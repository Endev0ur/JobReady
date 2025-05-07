const express = require('express');
const router = express.Router();
const {profileSave} = require('../Controllers/profileController');

router.post("/save" , profileSave);

module.exports = router;