var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var CommentSchema = new Schema({
    username: String,
    comment: String,
    time : String
});

module.exports = mongoose.model('Comment', CommentSchema);