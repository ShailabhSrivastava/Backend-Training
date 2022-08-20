const newPublisher = require("../models/newPublisher")
const newPublishers= require("../models/newPublisher")

const createPublisher1= async function (req, res) {
    let Publisher1 = req.body
    let saveData = await newPublisher.create(Publisher1)
    res.send({msg: saveData})
}
 
 module.exports.createPublisher1=createPublisher1