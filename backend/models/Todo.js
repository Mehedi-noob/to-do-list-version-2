const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean,
    date: {
        type: String,
        default: new Date().toString(),
    }
});

module.exports = mongoose.model("Todo", TodoSchema);