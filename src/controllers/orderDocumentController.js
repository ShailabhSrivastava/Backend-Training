const order1 = require("../models/orderDocument")
const product1= require("../models/productDocument")
const user1= require("../models/userDocument")

 const createOrder= async function(req,res) {
    let data= req.body
    let saveData
    data.isFreeAppUser=req.isFreeAppUser
    if (data.isFreeAppUser='true') {
        data.amount=0
        saveData= await order1.create(data)
    } else {
        let product= await product1.findOne({_id:data.productId}).select({price:1,_id:0})
        let price= product.price
        let user= await user1.findOne({_id:data.userId}).select({balance:1,_id:0})
        let balance= user.balance
        if (price<=balance){
            await user1.findOneAndUpdate(
                {_id:data.userId},
                {$inc:{balance:-(price)}}
            )
            data.amount=price
            saveData= await order1.create(data)
        } else {
            return res.send({Error:"Min Balanc"})
        }
    }
    res.send({msg:saveData})
 }
 
 module.exports.createOrder=createOrder