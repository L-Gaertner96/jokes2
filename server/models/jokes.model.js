const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "At least try to be funny"],
        minlength: [10, "Gotta be longer that that. Try at least 10 letters"],
        maxlength: [255, "We have limited server space"]
    },

    punchline: {
        type: String,
        required: [true, "At least try to be funny"],
        minlength: [3, "Gotta be longer that. Try at least 3 letters"],
        maxlength: [255, "We have limited server space"]
    }
}, {timestamps: true});

module.exports = mongoose.model('Joke', JokeSchema);