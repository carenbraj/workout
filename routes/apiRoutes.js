const WorkoutModel = require("../models/workoutModel.js")
const app = require("express").Router();


app.get("/api/workoutModel", function (req, res) {
    WorkoutModel.find()
        .them(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
});

app.post("/api/workoutModel", function (req, res) {
    WorkoutModel.create({})
    .then(data => res.json(data))
    .catch(err => {
        console.log("err", err)
        res.json(err)
    })
})

app.put("/api/workoutModel/:id", ({ body, params }, res) => {
    WorkoutModel.findByIdAndUpdate(
        params.id,
        { $push: { excercise: body } },
        { new: true, runValidators: true }         
    )
    .then(data => res.json(data))
    .catch(err => {
        console.log("err", err)
        res.json(err)
})


});

module.exports = app;