const express = require('express');
const abc = require('../logger/logger.js')
const def = require('../util/helper.js')
const ghi = require('../validator/formatter.js')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.myWelcome()
    def.printDate().printMonth().getBatchInfo()
    ghi.LowerCase().UpperCase().Trim()
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason