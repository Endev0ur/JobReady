const express = require('express');
const router = express.Router();
const {profileSave , getDetails} = require('../Controllers/profileController');

router.post("/save" , profileSave);

router.get("/get-details" , getDetails);

module.exports = router;