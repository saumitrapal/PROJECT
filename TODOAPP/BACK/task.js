const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());


let tasks = [];

// POST request user can input there todoId, todoCategory, todoTask, todoDate  
app.post("/add-task", function(req, res) {
    const id = req.body.id;
    const category = req.body.category;
    const task = req.body.task;
    const date = req.body.date;

    //console.log (id, task, category, date);

    if (task) {
        tasks.push({id, category, task, date});
        res.status(200).send({msg: "You successfully add your task!"});
    } else {
        res.status(400).send({msg: "Your can't written any task!"})
    }
    

    // res.status(200).json({
    //     msg: "You successfully add "+ id
    // })
})


// GET request user can see there todo's
app.get("/view-task", function(req, res) {
    res.send(tasks)
    //console.log(tasks);
})


// DELETE request user can delete there todo's 
app.delete("/delete-task", function(req, res) {
        const id = req.body.id;
        const deleteIndex = delete tasks[id - 1];

        if (!id) {
            res.status(400).send({
                msg: "You input invalid id. Make sure you input valid id"
            })
        }

        //console.log(deleteIndex);
        //console.log(tasks);

        res.status(200).send({
            msg: `You can successfully deleted your task id ${id}`
        })
})


app.listen(port);