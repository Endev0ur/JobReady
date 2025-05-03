import React, { useRef, useState } from "react";
import { ImCross } from "react-icons/im";
import axios from "axios";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const ATScheck = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [file, setFile] = useState(null);

  const [movingState, setMovingState] = useState(false);

  /* Now we are going to start result form here */

  const [atsScore , setATSScore] = useState(0);
  const [categoryScore , setCategoryScore] = useState({});
  const [scoreExplanation , setScoreExplanation] = useState({});
  const [resumeImprovmentSuggestion , setResumeImprovementSuggestion] = useState([]);
  const [finalSuggestion , setFinalSuggestion] = useState({});

  /* ================================================================================================================================== */

  const handleChange = (e) => {
    e.preventDefault();
    console.log("helow");
    setJobDescription(e.target.value);
    console.log(jobDescription);
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMovingState(true);

    try {
      if (!file) {
        alert("Please Select the file !");
      }

      const formData = new FormData();
      formData.append("jobDescription", jobDescription);
      formData.append("resume", file);

      const response = await axios.post(
        "http://localhost:3000/resume/ats-check",
        formData,
        {
          withCredentials: true,
        }
      );

      console.log(response.data);

      const result = response.data;

      /* This is overall ATS Score */
      const score = result.message["ATS Compatibility Score"];
      setATSScore(score);

      /* Now, Category-wise score */

      const catScore = (result.message['Category Scores']);

      console.log(catScore["Skills Match"]);

      setCategoryScore(catScore);

      /* Now, Score Explanation */

      const explanation = result.message['Score Explanation'];
      setScoreExplanation(explanation);

      console.log(explanation);

      console.log(scoreExplanation);


      /* Now, Resume Improvement Suggestion */

      const suggestion = result.message['Resume Improvement Suggestions'];
      setResumeImprovementSuggestion(suggestion);

      /* Now, Final Suggestion */

      const conclusion = result.message['Final Suggestion'];
      setFinalSuggestion(conclusion);
     

      console.log(result);
    } catch (err) {
      console.log("Error in ats check frontend", err);
    }
  };

 

  return (
    <div className="h-screen bg-white flex justify-around items-center">
      <div className="bg-gray-800 h-[98%] w-[98%] rounded-2xl p-5 max-w-[690px] max-h-[850px] shadow-2xl shadow-black">
        <h1 className="text-4xl font-bold text-white">ATS Check</h1>
        <form action="" className="h-[100%] w-[100%]" onSubmit={handleSubmit}>
          <div className="mt-6 h-[70%]  p-2">
            <p className="text-xl font-bold text-white">Job Description : </p>
            <textarea
              name=""
              id=""
              autoComplete="none"
              placeholder="Copy & Paste the Job Description Here ..."
              className=" border-2 mt-2 h-[91%] w-[100%] resize-none p-3 outline-none rounded-2xl font-bold bg-gray-700 placeholder:text-gray-900 no-scrollbar"
              onChange={handleChange}
            ></textarea>
          </div>

          <input
            type="file"
            accept=".pdf"
            name="resume"
            className="mt-3 pl-4 cursor-pointer text-sm xl:text-xl text-white p-3 border-b-3 bg-gray-800 rounded-3xl"
            onChange={handleFileChange}
          />
          <br />
          <button className="mt-6 border-3 text-xl pt-2 pb-2 p-4 rounded-xl cursor-pointer text-white font-bold bg-blue-700 outline-none">
            Check
          </button>
        </form>
      </div>
      <div
        className={`${
          movingState ? "block" : "hidden"
        } bg-gray-300 rounded-2xl p-10 h-[90%] w-[55%] transition-all duration-1000 shadow-xl shadow-black overflow-y-scroll no-scrollbar`}
      >
        <h1 className="text-5xl font-bold">YOUR ATS REPORT : </h1>

        {/* Overall Score */}
        <div className="mt-10  pl-10 flex justify-left items-center">
          <h3 className="text-4xl font-bold">Your Ats Score : </h3>
          <div className="inline-block ml-10">
            <CircularProgressbar className="size-40  inline-block" value={atsScore} text={`${atsScore}/100`} />
          </div>
        </div>

        {/* Category Wise Score Distribution  */}
        <div className="mt-10">
          <h2 className="ml-10 text-3xl font-bold">Category-Wise Score Distribution : </h2>

          <div className="w-full pt-5 border-4 bg-gray-700 grid xl:grid-cols-4 grid-cols-2 mt-5 rounded-xl">

            <div className=" h-[250px] ml-3 mr-3">
              <div className="w-full h-[70%]  inline-block">
                <CircularProgressbar value={(categoryScore["Skills Match"])*3.33} text={`${categoryScore["Skills Match"]}/30`} className="inline-block size-40"/>
              </div>
              <div className="flex justify-center items-center h-[30%] font-bold text-3xl text-white">
                <p>Skills Match</p>
              </div>
            </div>

            <div className=" h-[250px]  ml-3 mr-3">
              <div className="w-full h-[70%]  inline-block">
                <CircularProgressbar value={(categoryScore["Experience Relevance"])*3.33} text={`${(categoryScore["Experience Relevance"])}/30`} className="inline-block size-40"/>
              </div>
              <div className="flex justify-center items-center h-[30%] font-bold text-xl text-white">
                <p>Experience Relevence</p>
              </div>
            </div>

            <div className=" h-[250px]  ml-3 mr-3">
              <div className="w-full h-[70%]  inline-block">
                <CircularProgressbar value={(categoryScore["Education and Certifications"])*5} text={`${categoryScore["Education and Certifications"]}/20`} className="inline-block size-40"/>
              </div>
              <div className="flex justify-center items-center h-[30%] font-bold text-3xl text-white">
                <p>Education</p>
              </div>
            </div>

            <div className=" h-[250px] ml-3 mr-3">
              <div className="w-full h-[70%]  inline-block">
                <CircularProgressbar value={(categoryScore["Keywords and Formatting"])*5} text={`${(categoryScore["Keywords and Formatting"])}/20`} className="inline-block size-40 "/>
              </div>
              <div className="flex justify-center items-center h-[30%] font-bold text-xl text-white">
                <p>Keywords & Formating</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold">Score Explanation : </h2>
          <div className="p-10 bg-gray-700 mt-5 rounded-xl">
            {Object.entries(scoreExplanation).map(([key, value]) => {
              return <div key={key} className="border p-2 mb-2 rounded-xl bg-gray-400">
                <h4 className="text-2xl font-bold">{key}</h4>
                <p className="mt-1">{value}</p>
              </div>
            })}
          </div>
        </div>


        <div className="mt-10">
          <h2 className="text-3xl font-bold">Suggestion to Improvement: </h2>
          <div className="p-10 bg-gray-700 mt-5 rounded-xl">
            <ol className="list-decimal">
              {resumeImprovmentSuggestion.map((element , index) => {
                return <div key={index} className="border pl-3 pr-3 pt-2 pb-2 mb-2 rounded-xl bg-gray-400 flex justify-left items-center">
                  <li className="ml-4 font-bold">{element}</li>
                </div>
              })}
            </ol>
          </div>
        </div>


        <div className="mt-10">
          <h2 className="text-3xl font-bold">Final Verdict: </h2>
          <div className="p-10 bg-gray-700 mt-5 rounded-xl">
            <div className="border pl-3 pr-3 pt-2 pb-2 mb-2 rounded-xl bg-gray-400 ">
              <h5 className="font-bold text-xl">Should you use this resume for this job : </h5>
              <p className="font-bold text-blue-900 text-xl ml-2">{finalSuggestion['shouldUse']}</p>
            </div>

            <div className="border pl-3 pr-3 pt-2 pb-2 mb-2 rounded-xl bg-gray-400 ">
              <h5 className="font-bold text-xl">why ? : </h5>
              <p className="font-bold text-blue-900 text-xl ml-2">{finalSuggestion['whyuseorwhynot']}</p>
            </div>

            <div className="border pl-3 pr-3 pt-2 pb-2 mb-2 rounded-xl bg-gray-400">
              <h5 className="font-bold text-xl block">Chances of Selection : </h5>
              <p className="font-bold text-blue-900 text-xl ml-2">{finalSuggestion['percentage']}</p>
            </div>
          </div>
        </div>

 
      </div>
    </div>
  );
};

export default ATScheck;
