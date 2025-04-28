const {GoogleGenAI} = require('@google/genai')

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY});

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


module.exports = {jobSummarizer};