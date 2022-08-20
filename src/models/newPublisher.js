const mongoose = require('mongoose');

 const newPublisherSchema= new mongoose.Schema({
    name: String,
    headQuarter: String,
 })

module.exports = mongoose.model('Publisher1',newPublisherSchema)