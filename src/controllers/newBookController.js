const newBooks= require("../models/newBook")

 const createBook1= async function (req, res) {
    let Book1 = req.body
    let saveData = await newBooks.create(Book1)
    res.send({msg: saveData})
}

 const getAuthor= async function (req,res) {
    let saveData = await newBooks.find()
    res.send({msg:saveData})
 }

 const createBook2 = async function(req,res){
    let saveData = await newBooks.find().populate('author').populate('publisher')
    res.send({msg:saveData})
 }

const updateCover= async function(req,res){
   let saveData= await newBooks.find().populate({path:'publisher',match:{$or:[{name:'penguin'},{name:'HarperCollins'}]},select:'name'})
   let cover=[]
   saveData.forEach(element=> {
      if(element.publisher!=null){
         cover.push(element._id)
      }
   })  
   let COVER = await newBooks.updateMany(
      {_id:cover},
      {$set:{isHardCover:true}}
   ) 
      res.send({msg:COVER})
}

 const updatePrice= async function(req,res){
   let saveData= await newBooks.find().populate({path:'author',match:{rating:{$gt:3.5}},select:'rating'})
   let price=[]
   saveData.forEach(element=> {
      if(element.author!==null){
         price.push(element._id)
      }
   })
     let PRICE = await newBooks.updateMany(
      {_id:price},
      {$inc :{price:+10}}
   )
   res.send({msg:PRICE})
 }
 



 module.exports.createBook1=createBook1
 module.exports.getAuthor=getAuthor
 module.exports.createBook2=createBook2
 module.exports.updateCover=updateCover
 module.exports.updatePrice=updatePrice
 