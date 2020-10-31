// Dependencies 
const express = require ("express");
const mongoose = require ("mongoose");
const logger = require ("morgan");

// Setting up App
const app = express();
const PORT = 8080

app.use(logger("dev"))
app.use(express.json());

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
})



