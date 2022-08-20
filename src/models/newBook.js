const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId

 const newBookSchema= new mongoose.Schema( {
    name: String,
	author:{
        required: true,
        type: objectId,
        ref: "Author1"
    },
	price: Number,
    ratings: Number,
	publisher: {
        required: true,
        type: objectId,
        ref: "Publisher1"
    },
    isHardCover: {
        type: Boolean,
        default: false
    }
 })


module.exports = mongoose.model('Kitaab1',newBookSchema)