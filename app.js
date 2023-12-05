//שימוש בספריית express
const express = require('express'); 
const app = express(); 

//הגדרת port
const port=8000;


const workers=require('./Routers/workersRouter');
const courses=require('./Routers/coursesRouter');


 app.use(workers);
 app.use(courses);

 //טיפול בשגיאת מערכת
 app.get("*", (req, res) => { 

    res.status(500)
    .send("THERE IS CURNRTTLY A PROBLOEM WITH THE SERVER!"); 
}); 

//שולח ל-port
app.listen(port, () => {
    console.log("listening on http://localhost:8000");
});
