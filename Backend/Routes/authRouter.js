const {signup , login , logout , getUserDetails , isLoggedIn} = require('../Controllers/authController');

const express = require('express');
const router = express.Router();

router.post("/signup" , signup);
router.post("/login" , login);
router.post("/logout" , logout);
router.get("/getUserDetails" , getUserDetails);



module.exports = router;