const express=require("express");
const mongoose=require("mongoose");
const routers=express.Router();


const teachers_schema=mongoose.Schema({
name:String,
address:String,
age:Number,
number_of_students:Number,
titel:String,
bio:String,
teacher_rate:String,
courses_rate:String,
courses:Array,



});


let teacher_model=mongoose.model("teachers",teachers_schema);



routers.post('/',function(req,res){


    teacher_model(req.body).save();
     
    res.status(201).send();
});


 routers.get('/',async function(req,res)
{
    const all_teachers=await teacher_model.find();
    res.status(200).json(all_teachers);
    
    
    
});
    
    

routers.patch("/:id",async function(req,res)
{
    
    
    teacher_model.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((result) => {
        if (!result) {
            return res.status(404).send();
        }
        res.status(200).json(result).send();
    }).catch((error) => {
        res.status(500).send("id format isnt correct ");
    })
});










module.exports=routers;