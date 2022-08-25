const mongoose = require('mongoose');
const objectId= mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
	userId: {
        type: objectId,
        ref: "USER1"
    },
	productId: {
        type: objectId,
        ref: "PRODUCT1"
    },
	amount: Number, 
    isFreeAppUser: Boolean,
	date: String
 } ,{ timestamps: true })

 module.exports= mongoose.model('ORDER1', orderSchema)



