const express=require("express");
const mongoose=require("mongoose");
const routers=express.Router();



const courses_schema=mongoose.Schema({
 name:String,
prise:Number,
 hours:Number,
 certified:Boolean,
  description:String,
  number_of_purchases:Number,
  rate:String ,
   teacher:String ,
   enrolled_students:Array,

    
    });
    
let courses_model=mongoose.model("courses",courses_schema);
 
routers.post('/',function(req,res){

    courses_model(req.body).save();
    
    res.status(201).send();
});
 routers.get('/',async function(req,res)
{   
     all_courses=await courses_model.find();

    res.status(200).json(all_courses);
  
});


routers.get("/name/:name",async function(req,res)
{

  const course=await courses_model.findOne({name :req.params.name});
  
   course!=undefined?
   res.status(200).json(course):res.status(404).send("name not ");   
   
});



routers.get("/prise/:prise", async function(req,res)
{

const course= await courses_model.find({prise :{$gt:req.params.prise}});

   course!=undefined?
   res.status(200).json(course):res.status(404).send();      
    
});




routers.patch("/:id",async function(req,res)
{
    
    courses_model.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((result) => {
        if (!result) {
            return res.status(404).send();
        }
        res.status(200).json(result).send();
    }).catch((error) => {
        res.status(500).send("id format isnt correct ");
    })
});







module.exports=routers;