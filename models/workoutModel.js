const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    username: {
        type: String,
        trim: true,
        required: "name is required"
    },

    duration: {
        type: Number,
        required: "enter an excercise duration in minutes"
    },

    weight: {
        type: Number,
    },

    set: {
        type: Number,
    },

    reps: {
        type: Number,
    },

    distance: {
        type: Number,
    },

    userCreated: {
    type: Date,
    default: Date.now
}

});

const User = mongoose.model("User", workoutSchema);

module.exports = User;