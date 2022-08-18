 const Author= require("../models/Author")
 const Books= require("../models/Books")

 const createAuthor= async function(req,res){
    let data= req.body
    let saveData= await Author.create(data)
    res.send({msg:saveData})
 }


  const getChetanBhagatBooks= async function(req,res){
    let saveData= await Author.findOne({authorName:"Chetan Bhagat"}).select({author_id:1,_id:0})
    console.log(saveData);
    let list= await Books.find(saveData);
    res.send({msg:list});
 }

 module.exports.createAuthor=createAuthor
 module.exports.getChetanBhagatBooks=getChetanBhagatBooks

