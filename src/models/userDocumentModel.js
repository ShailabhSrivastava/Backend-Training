const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema( {
    firstName : String,
    lastName : String,
    mobile : Number,
    emailId : String,
    password : String,
    gender : {
        type: String,
        enum: ["Male","Female","Others"]
    },
	isDeleted: {
        type: Boolean,
        default: false
    },
    age: Number
}, { timestamps: true });

module.exports = mongoose.model('UDM', usersSchema)