const path = require("path");

module.exports = function (app){

    app.get("/excercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/excercise.html"));
    })

    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

}