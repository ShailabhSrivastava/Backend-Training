const newAuthors= require("../models/newAuthor")

const createAuthor1= async function (req, res) {
    let author1 = req.body
    let saveData = await newAuthors.create(author1)
    res.send({msg: saveData})
}

 module.exports.createAuthor1=createAuthor1