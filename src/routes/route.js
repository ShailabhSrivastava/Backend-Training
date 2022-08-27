const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const userDocumentController= require("../controllers/userDocumentController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId", userController.updateUser)

router.post("/registerAUser", userDocumentController.createUser)
router.post("/loginUser", userDocumentController.loginUser)

module.exports = router;