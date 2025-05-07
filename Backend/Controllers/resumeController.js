const {GoogleGenAI} = require('@google/genai')
const pdfParse = require('pdf-parse');
const resumeModel = require('../Models/resumeModel');



const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY});

/* Feature 1 : Job Summarizer */

const jobSummarizer = async (req , res) => {

  const jobDescription = req.body;

  const prompt = `f"""
  You are an expert at analyzing job descriptions. Please read the following job description and identify the most relevant 10 keywords (full words) and 5-6 key responsibilities or qualifications. Return your answer as a JSON object with two keys: "keywords" and "keypoints". The value for "keywords" should be a list of relevant terms with each word as a separate string. The value for "keypoints" should be a list of the most important responsibilities or qualifications, with each point as a separate string in the list. no filler or preambles.
  
  Job Description:
  ${jobDescription}
  """`

  async function main() {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });
    console.log(response.text);

    const responseText = response.text;

    // Step 2: Clean it
    const cleanedText = responseText
    .replace(/```json/g, '') // remove starting ```json
    .replace(/```/g, '')      // remove ending ```
    .trim();                  // remove extra spaces

    // Step 3: Parse it
    const parsedText = JSON.parse(cleanedText);

    // Step 4: Beautify and print
    // console.log(JSON.stringify(parsedJson, null, 2));


    // const parsedText = JSON.parse(responseText);

    // const BeautifyText = JSON.stringify(parsedText , null , 2);

    res.json({
      success : true,
      message : parsedText,
    })

  }

  await main();

}


/* Feature 2 : ATS Check */

const AtsCheck = async(req , res)=>{ 

  const jobDescription = req.body.jobDescription;
  const resumeFile = req.file;

  const bufferResumeFile = resumeFile.buffer;
  console.log(resumeFile);

  // const text = await extractTextSmart(bufferResumeFile);

  // console.log(text);

  const parsedFile = await pdfParse(bufferResumeFile);

  const isOnlyNewlines = /^[\n\r]*$/.test(parsedFile.text); // Checks if text consists of only newlines and/or carriage returns
    if (isOnlyNewlines) {
      return res.status(400).json({
        success: false,
        message: 'The resume content seems invalid (only contains newlines), please provide a valid resume.',
      });
    }
  // // console.log(jobDescription);
  // // console.log(resumeFile);
  
  console.log("parsed file is : " , parsedFile.text);



const prompt = `You are an expert recruiter specializing in Applicant Tracking Systems (ATS) and resume optimization. Your task is to evaluate a resume against a given job description and provide a detailed analysis.

Analyze the following job description and resume, and then provide an ATS compatibility score out of 100. Break down the score into the following categories:

* **Skills Match (0-30):** Assesses the alignment of the candidate's skills with the job requirements, including both hard and soft skills.
* **Experience Relevance (0-30):** Evaluates how well the candidate's work experience aligns with the job responsibilities and requirements.
* **Education and Certifications (0-20):** Scores the relevance of the candidate's education, degrees, and certifications to the job.
* **Keywords and Formatting (0-20):** Evaluates the presence of relevant keywords from the job description in the resume and the overall formatting of the resume for ATS compatibility.

Provide a score for each category, and then provide an overall ATS score.

After providing the scores, give a detailed explanation for each score, justifying why you assigned that particular value. Explain what aspects of the resume contributed to the score and what areas were lacking.

Finally, provide specific and actionable suggestions on how the candidate can improve their resume to better match the job description and increase its ATS compatibility. Suggest specific keywords to add, sections to modify, or formatting changes to implement.

**Input:**

* **Job Description:** \[${jobDescription}]
* **Resume:** \[
${parsedFile.text}]

**Output:**

Provide your response in the following format:

{
"ATS Compatibility Score": Overall score out of 100,
"Category Scores": {
"Skills Match": Score out of 30,
"Experience Relevance": Score out of 30,
"Education and Certifications": Score out of 20,
"Keywords and Formatting": Score out of 20
},
"Score Explanation": {
"Skills Match": "Detailed explanation of the skills match score within 15-20 words",
"Experience Relevance": "Detailed explanation of the experience relevance score within 15-20 words",
"Education and Certifications": "Detailed explanation of the education and certifications score within 15-20 words",
"Keywords and Formatting": "Detailed explanation of the keywords and formatting score within 15-20 words"
},
"Resume Improvement Suggestions": [
"Specific and actionable suggestion 1",
"Specific and actionable suggestion 2",
"...(more suggestions)"
],
"Final_Suggestion": {
  "shouldUse": "YES or NO",
  "whyUseOrWhyNot": "Provide a justification for why or why not the resume should be used.",
  "selectionProbability": "Estimated percentage chance of being selected for the role based on this resume.(% sign is mandatory)"
}
  
}

avoid any prembles and fillers and stritly return a valid json object
`


  async function main() {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });
    console.log(response.text);

    const responseText = response.text;

    // Step 2: Clean it
    const cleanedText = responseText
    .replace(/```json/g, '') // remove starting ```json
    .replace(/```/g, '')      // remove ending ```
    .trim();                  // remove extra spaces

    // // Step 3: Parse it
    const parsedText = JSON.parse(cleanedText);

    console.log(parsedText);

    

    res.status(201).json({
      success : true,
      message : parsedText,
    })

  }

  await main();

} 


/* Feature 3 : Generate Resume */



module.exports = {jobSummarizer , AtsCheck}; 