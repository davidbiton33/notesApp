const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    id: Number,
    title: String,
    date:String,
    time:String
});

module.exports = mongoose.model('notes', noteSchema);
