const express=require("express");
const mongoose=require("mongoose");
const routers=express.Router();


const student_schema=mongoose.Schema({
    name:String,
    address:String,
    age:Number,
    number_of_courses:Number,
    bio:String,
    interests:Array,
    enrolled_courses:Array,
    complated_courses:Array,

    
    
    
    });
    
    
    let student_model=mongoose.model("students",student_schema);
    
    
    routers.post('/',function(req,res){

    
        student_model(req.body).save();
        
        res.status(201).send();
    });
    
    
     routers.get('/',async function(req,res)
    {
        const all_students=await student_model.find();
        res.status(200).json(all_students);
        
        
        
    });
        
        



module.exports=routers;