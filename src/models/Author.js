 const mongoose = require('mongoose');

 const AuthorSchema = new mongoose.Schema({
    author_id: Number,
    authorName: String,
    age: Number,
    address: String
 }, {timestamps:true} );


 module.exports = mongoose.model('Author',AuthorSchema)