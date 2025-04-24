const {signup} = require('../Controllers/authController');

const express = require('express');
const router = express.Router();

console.log("ehlllo");

router.post("/signup" , signup)



module.exports = router;