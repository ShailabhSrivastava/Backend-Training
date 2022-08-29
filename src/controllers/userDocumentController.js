const jwt = require("jsonwebtoken");
const userDocumentModel = require("../models/userDocumentModel");

const createUser = async function (req,res) {
    let data = req.body;
    let saveData = await userDocumentModel.create(data);
    res.send({ msg: saveData, status:true });
  };


  const loginUser = async function (req, res) {
    let userName = req.body.emailId;
    let password = req.body.password;
    let user = await userDocumentModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.send({msg: "username or the password is not corerct", status: false,})
    let token = jwt.sign({userId: user._id.toString(), batch: "plutonium",organisation: "FunctionUp",},"S1@hailabh");
    res.send({ status: true, token: token });
  };
 

  const checkUser= async function(req,res){  
    let userId= req.params.userId
    let saveData= await userDocumentModel.findById(userId)
    res.send({msg:saveData, status:true})
    }


  const updateUser= async function(req,res){
    let userData= req.body
    let userId= req.params.userId
    let saveData= await userDocumentModel.findOneAndUpdate({_id:userId}, userData, {new:true})
    res.send({msg:saveData, status:true})
  }


  let deleteUser= async function (req,res){
    let userId= req.params.userId
    let saveData= await userDocumentModel.findOneAndUpdate({_id:userId},{isDeleted:true},{new:true})
    res.send({msg:saveData, status:true})
  }



  module.exports.createUser=createUser
  module.exports.loginUser=loginUser
  module.exports.checkUser=checkUser 
  module.exports.updateUser=updateUser
  module.exports.deleteUser=deleteUser