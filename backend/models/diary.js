const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const diarySchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    user_id: {
        type: String,
        required: true
    },
    pages: {
        type: Array,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

diarySchema.plugin(uniqueValidator);

module.exports = mongoose.model('Diary', diarySchema);