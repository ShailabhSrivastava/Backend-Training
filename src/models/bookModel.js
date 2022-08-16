const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    tags: [String],
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    sales: {type: Number, default: 10}
}, { timestamps: true });

 const BookSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String,
    tags: [String],
    totalPages: Number,
    stockAvailable: Boolean,
    price: {
        indianPrice: String,
        europePrice: String,
    },
    year: {type: Number, default: 2021}
 })


module.exports = mongoose.model('Book', bookSchema) //users
module.exports = mongoose.model('Books',BookSchema)


//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
