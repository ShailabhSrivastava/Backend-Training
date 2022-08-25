const product1 = require("../models/productDocument")

 const createProduct= async function(req,res){
    let data= req.body
    let saveData= await product1.create(data)
    res.send({msg:saveData})
 }

 module.exports.createProduct=createProduct