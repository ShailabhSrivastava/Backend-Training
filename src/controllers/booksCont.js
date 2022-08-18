 const Books= require("../models/Books")
 const Author= require("../models/Author")

 const createBook= async function(req,res){
    let data= req.body
    let saveData= await Books.create(data)
    res.send({msg:saveData})
 }


 const updateBookPrice= async function(req,res){
   let saveData= await Books.updateMany(
      {name:"Two States"},
      {$set:{price:100}}
   )
   res.send({msg:saveData})
 }

  const booksCost= async function(req,res) {
   let saveData= await Books.find( { price : { $gte: 50, $lte: 100} } ).select({author_id :1,_id:0})
   console.log(saveData)
   let output=[];
   for(let i=0;i<saveData.length;i++){
   let out= await Author.findOne(saveData[i]).select({authorName:1,_id:0});
   console.log(out);
   output.push(out.authorName)
   }
  res.send({msg:output})
  }


 module.exports.createBook=createBook
 module.exports.updateBookPrice=updateBookPrice
 module.exports.booksCost=booksCost
 