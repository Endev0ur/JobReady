const {jobSummarizer} = require('../Controllers/resumeController');

const express = require('express');
const router = express.Router();

router.post("/job-summarizer" , jobSummarizer);

module.exports = router;