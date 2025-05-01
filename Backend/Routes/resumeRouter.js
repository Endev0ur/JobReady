const {jobSummarizer , AtsCheck} = require('../Controllers/resumeController');

const express = require('express');
const router = express.Router();

router.post("/job-summarizer" , jobSummarizer);

router.post("/ats-check" , AtsCheck);

module.exports = router;