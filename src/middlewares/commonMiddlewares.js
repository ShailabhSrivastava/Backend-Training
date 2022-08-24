 const moment= require('moment')

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


 const middleWare= function(req, res, next) {
    const today= new moment()
    const timestamp= today.format("DD-MM-YYYY hh:mm:ss,")
    const IP= req.socket.remoteAddress
    const URL= req.route.path
    console.log(timestamp,  ","   ,IP,  "," ,URL)
    next();
 }




module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
 module.exports.middleWare=middleWare
