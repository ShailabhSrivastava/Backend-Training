const userDocumentModel = require("../models/userDocumentModel")
const jwt = require("jsonwebtoken")

const mid1 = async function (req, res, next) {
    try{
    let token = req.headers["x-auth-token"]
    if (!token) return res.status(401).send({ msg: "token must be present", status: false })
    let decodeToken = jwt.verify(token, "S1@hailabh")
    if (!decodeToken) return res.status(500).send({ msg: "token is inValid", status: false })
    let userToBeModified = req.params.userId
    let userLoggedIn = decodeToken.userId
    if (userToBeModified != userLoggedIn) return res.status(403).send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })
    next()
    } catch (err) {
        res.status(500).send({msg:"ERROR", error: err.message})
    }
}


module.exports.mid1 = mid1