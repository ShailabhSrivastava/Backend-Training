 const userDocumentModel= require("../models/userDocumentModel")
 const jwt = require("jsonwebtoken")

 const mid1= async function(req, res, next){
    let token= req.headers["x-auth-token"]
    if(!token) return res.send({msg:"token must be present", status:false})
    let decodeToken= jwt.verify(token,"S1@hailabh")
    if (!decodeToken) return res.send({msg:"token is inValid", status:false})
    next()
 }

 module.exports.mid1=mid1