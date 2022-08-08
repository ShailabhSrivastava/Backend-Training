const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    
    
    router.get('/movies', function (req, res){
    res.send(movies)
   })

   
   router.get('/movies/:index', function(req, res){
   const index=req.params.index
   res.send(movies[index]) 
  })



   router.get('/movies/:indexNumber' , function(req,res){
    let displayMovie
    if(req.params.indexNumber < movies.length){
        displayMovie = movies[req.params.indexNumber]
    }else{
        displayMovie = "use a valid index number"
    }
    res.send(displayMovie)
})


   router.get('/films', function(req,res){
    const films =  [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       } ]
      res.send(films)      
  })


  
   router.get('/get-/films/:indexNumber',function(req, res){
    let movieName = [{
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }
       ] 
       let index = req.params.indexNumber;
       if(index>movieName.length){
        return res.send('movie length is greater')
       } else {
        res.send(movieName[index])
       }
  })

module.exports = router;