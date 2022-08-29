const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const userDocumentController= require("../controllers/userDocumentController")
const MW= require("../middleware/auth2")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)
router.post("/users/:userId/posts", userController.postMessage)

router.put("/users/:userId", userController.updateUser)
// router.delete('/users/:userId', userController.deleteUser)


router.post("/registerAUser", userDocumentController.createUser)
router.post("/loginUser", userDocumentController.loginUser)
router.get("/user/:userId", MW.mid1, userDocumentController.checkUser)
router.put("/user/:userId", MW.mid1, userDocumentController.updateUser)
router.delete("/user/:userId", MW.mid1, userDocumentController.deleteUser)

 

module.exports = router;