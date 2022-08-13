const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

const newBook= async function(req,res) {
    let book= req.body
    let allBooks= await UserModel.create(book)
    res.send({msg: allBooks})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.newBook= newBook