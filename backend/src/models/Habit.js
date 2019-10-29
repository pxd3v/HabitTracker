const mongoose = require('mongoose');

const HabitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    status: {
        type: [Boolean],
        default: false,
    },
});

module.exports = mongoose.model('Habit', HabitSchema)
