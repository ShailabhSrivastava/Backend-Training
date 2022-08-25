const user1 = require("../models/userDocument")

const createUser= async function(req,res){
    let data= req.body
    let saveData= await user1.create(data)
    res.send({msg:saveData})
 }

 module.exports.createUser=createUser