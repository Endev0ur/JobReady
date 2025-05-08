const {generateResume} = require("../Controllers/resumeController")
const express = require('express');
const router = express.Router();

router.post("/resume" , generateResume);

module.exports = router;