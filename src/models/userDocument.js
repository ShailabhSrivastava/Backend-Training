const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: String,
	balance:{
        type: Number,
        default: 100
    },
	address: String,
	age: Number,
 	gender: {
        type: String,
        enum: ["Male", "Female", "Other"]
    } ,
	isFreeAppUser: Boolean
}, { timestamps: true })


 module.exports= mongoose.model('USER1', userSchema)