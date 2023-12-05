const { Router } = require('express'); 
const app = Router(); 

const courses = require('../Data/courses.json');

//קריאה לקבלת כל הקורסים.
app.get('/courses',(req,res)=>{
    try
    {
        res.send(courses);
    }
    catch(err)
    {
        res.status(500).send("Internal Server Error");
    }
    

});

//קריאה לקבלת קורס מסוים.
app.get('/courses/:courseId',(req,res)=>{
    try
    {
        const coursId=Number(req.params.courseId);
        const acourse=courses.find(course=>course.courseId===coursId);

        if(acourse)
        {
            res.send(acourse.courseName);
        }    
        else
        { 
            res.status(404).send('Course dosnt exist!');
        }
    }
    catch(err)
    {
        res.status(500).send("Internal Server Error");
    }
});


module.exports=app;