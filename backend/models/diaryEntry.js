const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const diaryEntriesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    diary: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Diary"
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    }
})

diaryEntriesSchema.plugin(uniqueValidator);

module.exports = mongoose.model('DiaryEntry', diaryEntriesSchema);