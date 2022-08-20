const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const newAuthorController= require("../controllers/newAuthorController")
const newPublisherController= require("../controllers/newPublisherController")
const newBookController= require("../controllers/newBookController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.post("/createAuthor1", newAuthorController.createAuthor1)

router.post("/createPublisher1", newPublisherController.createPublisher1)

router.post("/createBook1", newBookController.createBook1)

router.post("/getAuthor", newBookController.getAuthor)

router.get("/createBook2",newBookController.createBook2)

router.put("/updateCover",newBookController.updateCover)

router.put("/updatePrice",newBookController.updatePrice)


module.exports = router;