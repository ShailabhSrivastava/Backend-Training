const express = require('express');
const underscore = require('underscore')
const _ = require('lodash')
// const abc = require('../logger/logger.js')
// const def = require('../util/helper.js')
// const ghi = require('../validator/formatter.js')
const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('My batch is', abc.name)
    // abc.myWelcome()
    // def.printDate().printMonth().getBatchInfo()
    // ghi.LowerCase().UpperCase().Trim()
    // const _ = require("lodash");
    let arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    console.log(_.chunk(arr, 3));
    let x = [1,3,5,7,9,11,13,15,17,19]
    let newArray = _.tail(x);
    console.log(newArray);
    let newArr= _.union([1, 2, 3 ,3, 4, 5]);
    console.log(newArr);
    let pairs = [['horror','the shinig'], ['drama','titanic'], ['thriller','Shutter Islabd']] 
    let obj = _.fromPairs(pairs);
    console.log(obj)
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason