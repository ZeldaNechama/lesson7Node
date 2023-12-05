const { Router } = require('express');
const app = Router();

const workers = require("../Data/workers.json");
//קריאה לקבלת עובד מסוים לפי קוד מזהה.
app.get('/workers/:id',(req, res) => {
    try {
        //בדיקה עם ה-CATCH עובד.
        // const fs=require("fs").promises;
        // const t= await fs.readFile("./Data/t.txt"); 
        const id = Number(req.params.id);
        const aworker = workers.find(worker => worker.id === id);
        if (aworker) {
            res.send(aworker);
        }
        else {
            res.status(404)
                .send("Sorry,worker dosn't exict!");
        }
    }
    catch (err) {
        res.status(500).send("Internal Server Error");
    }

});
//קריאה לקבלת כל העובדים
app.get('/workers', (req, res) => {
    try {
        res.send(workers);
    }
    catch (err) {
        res.status(500).send("Internal Server Error");
    }

    // res.send(workers);
});

module.exports = app;