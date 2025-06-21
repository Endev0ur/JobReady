
const {isLoggedIn} = require("../Controllers/checkController");
const express = require('express');
const router = express.Router();

router.get("/" , isLoggedIn)


module.exports = router;