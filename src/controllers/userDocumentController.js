const jwt = require("jsonwebtoken");
const userDocumentModel = require("../models/userDocumentModel");

const createUser = async function (req, res) {
  try {
    let data = req.body;
    let saveData = await userDocumentModel.create(data);
    res.status(201).send({ msg: saveData, status: true });
  } catch (err) {
    res.status(500).send({ msg: "ERROR", error: err.message})
    console.log(err)
  }
};


const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;
    let user = await userDocumentModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.status(404).send({ msg: "username or the password is not corerct", status: false, })
    let token = jwt.sign({ userId: user._id.toString(), batch: "plutonium", organisation: "FunctionUp", }, "S1@hailabh");
    res.status(202).send({ status: true, token: token });
  } catch (err) {
    res.status(500).send({ msg: "ERROR", error: err.message })
  }
};


const checkUser = async function (req, res) {
  try {
    let userId = req.params.userId
    let saveData = await userDocumentModel.findById(userId)
    res.status(202).send({ msg: saveData, status: true })
  } catch (err) {
    res.status(500).send({ msg: "ERROR", error: err.message })
  }
}


const updateUser = async function (req, res) {
  try {
    let userData = req.body
    let userId = req.params.userId
    let saveData = await userDocumentModel.findOneAndUpdate({ _id: userId }, userData, { new: true })
    res.status(202).send({ msg: saveData, status: true })
  } catch (err) {
    res.status(500).send({ msg: "ERROR", error: err.message })
  }
}


let deleteUser = async function (req, res) {
  try {
    let userId = req.params.userId
    let saveData = await userDocumentModel.findOneAndUpdate({ _id: userId }, { isDeleted: true }, { new: true })
    res.status(202).send({ msg: saveData, status: true })
  } catch (err) {
    res.status(500).send({ msg: "ERROR", error: err.message })
  }
}



module.exports.createUser = createUser
module.exports.loginUser = loginUser
module.exports.checkUser = checkUser
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser