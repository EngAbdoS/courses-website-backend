const express=require("express");
const mongoose=require("mongoose");



app_server=express();
app_server.use(express.json());
app_server.listen(3000,()=>console.log("server is now opend 😒"));



const student_route=require("./students");
const teacher_route=require("./teachers");
const course_route=require("./courses");



app_server.use("/students",student_route);
app_server.use("/teachers",teacher_route);
app_server.use("/courses",course_route);



app_server.get('/',function(req,res)
{
res.send('hello from courses ');


})


mongoose.connect("mongodb://0.0.0.0:27017/cources_website",(err)=>console.log(!err?"connected to db 🙂":err));

