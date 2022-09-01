const UserModel = require("../models/userModel")
let axios = require("axios")




const basicCode = async function (req, res) {
    let tokenDataInHeaders = req.headers.token
    console.log(tokenDataInHeaders)

    console.log("HEADER DATA ABOVE")
    console.log("hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)" })
}



















const createUser = async function (req, res) {
    let data = req.body
    let savedData = await UserModel.create(data)
    res.send({ msg: savedData })
}

const getUsersData = async function (req, res) {
    let allUsers = await UserModel.find()
    res.send({ msg: allUsers })
}




let meme = async function (req, res) {
    try {
        let id = req.query.template_id
        let one = req.query.text0
        let two = req.query.text1
        let mail = req.query.username
        let pwd = req.query.password
        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${one}&text1=${two}&username=${mail}&password=${pwd}`
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({ msg: data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



let sahar = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let Arr = []
        for (let i = 0; i < cities.length; i++) {
            let object = { city: cities[i] }
            let saveData = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=c55f822ff81027b835b08ccfa87365e7`)
            object.temp = saveData.data.main.temp
            Arr.push(object)
        }
        let sort = Arr.sort(function (a, b) { return a.temp - b.temp })
        res.status(200).send({ msg: sort, status: true })
    } catch (err) {
        res.status(500).send({ msg: err.message })
    }
}



module.exports.createUser = createUser
module.exports.getUsersData = getUsersData
module.exports.basicCode = basicCode
module.exports.meme = meme
module.exports.sahar=sahar