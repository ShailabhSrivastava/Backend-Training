const userDocument = require("../models/userDocument")
const productDocument= require("../models/productDocument")

 
const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}

const MID1= function(req,res,next){
    console.log(req.headers.isfreeappuser)
    if(req.headers.isfreeappuser){
        req.body.isFreeAppUser=req.headers.isfreeappuser;
        next()
    } else {
        res.send({Error:"isFreeAppUser is necessary"})
    }
}


 const MID2= async function(req,res,next){
    const data= req.body
    const userExist= await userDocument.findOne({_id:data.userId})
    const productExist= await productDocument.findOne({_id:data.productId})
    if (userExist && productExist){
        next()
    } else if (!userExist && !productExist){
        res.send({Error: "not available"})
    } else if (!productExist) {
        res.send({Error:"USER"})
    } else {
        res.send({Error:PRODUCT})
    }
 }



module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
module.exports.MID1=MID1
module.exports.MID2=MID2
