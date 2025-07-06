import React, { useRef, useState } from "react";
import { ImCross } from "react-icons/im";
import axios from "axios";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { Grid } from 'react-loader-spinner';

const ATScheck = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [file, setFile] = useState(null);

  const navigateTo = useNavigate();

  const [movingState, setMovingState] = useState(false);

  /* Now we are going to start result form here */

  const [atsScore , setATSScore] = useState(0);
  const [categoryScore , setCategoryScore] = useState({});
  const [scoreExplanation , setScoreExplanation] = useState({});
  const [resumeImprovmentSuggestion , setResumeImprovementSuggestion] = useState([]);
  const [finalSuggestion , setFinalSuggestion] = useState({});


  const [loading , setLoading] = useState(false);

  /* ================================================================================================================================== */

  const handleChange = (e) => {
    e.preventDefault();
    // console.log("helow");
    setJobDescription(e.target.value);
    // console.log(jobDescription);
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      if (!file) {
        toast.error("Please Select the file !");
        return;
      }

      if(!jobDescription){
        toast.error("Please Provide the jobDescription");
        return;
      }

      const formData = new FormData();
      formData.append("jobDescription", jobDescription);
      formData.append("resume", file);

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/resume/ats-check`,
        formData,
        {
          withCredentials: true,
        }
      );

      // console.log(response.data);

      const result = response.data;

      /* This is overall ATS Score */
      const score = result.message["ATS Compatibility Score"];
      setATSScore(score);

      /* Now, Category-wise score */

      const catScore = (result.message['Category Scores']);

      // console.log(catScore["Skills Match"]);

      setCategoryScore(catScore);

      /* Now, Score Explanation */

      const explanation = result.message['Score Explanation'];
      setScoreExplanation(explanation);

      // console.log(explanation);

      // console.log(scoreExplanation);


      /* Now, Resume Improvement Suggestion */

      const suggestion = result.message['Resume Improvement Suggestions'];
      setResumeImprovementSuggestion(suggestion);

      /* Now, Final Suggestion */

      const conclusion = result.message['Final_Suggestion'];
      setFinalSuggestion(conclusion);
      // console.log(finalSuggestion);
      setMovingState(true);

      // console.log(result);
      toast.success("Report Generated Successfully!")
    } catch (err) {
      // console.log("Error in ats check frontend", err);
      if(err.response.data.message==="The resume content seems invalid (only contains newlines), please provide a valid resume."){
        toast.error("Please Provide the Text Based Pdf");
        return;
      }
      else if(err.response.data.message==="No token is there!"){
        toast.error("Please Login first !");
        navigateTo("/login");
        return;
      }
      toast.error("Please provide a valid resume format pdf (Text Based pdf) !");
    }
    finally{
      setLoading(false);
    }

    
  };


  if(loading){
    return (
    <div className='h-screen w-full flex justify-center items-center text-bold text-2xl'>
      <Grid
        height="80"
        width="80"
        color="#000000"
        ariaLabel="grid-loading"
        visible={true}
      />
    </div>
    )
  }

 

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-green-600 via-red-400 to-green-600 flex justify-around items-center flex-wrap">
      {!movingState ? (<div className="bg-white/10 backdrop-blur-lg rounded-lg h-screen w-[98%] p-5 max-w-[600px] max-h-[850px] shadow-2xl shadow-black mb-10 mt-10 bg-clip-border bg-gradient-to-bl from-gray-900 via-indigo-900 to-gray-900 ">
        <h1 className="text-4xl font-bold text-white text-shadow-lg text-shadow-black">ATS Check</h1>
        <form action="" className="h-[100%] w-[100%]" onSubmit={handleSubmit}>
          <div className="mt-6 h-[70%]  p-2">
            <p className="text-xl font-bold text-white">Job Description : </p>
            <textarea
              name=""
              id=""
              autoComplete="none"
              placeholder="Copy & Paste the Job Description Here ..."
              className=" border-2 mt-2 h-[91%] w-[100%] resize-none p-3 outline-none rounded-lg font-bold border-gray-300 bg-gray-300 bg-opacity-80 text-gray-800 placeholder:text-gray-900 no-scrollbar"
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
          <button className="mt-6 border-white text-xl pt-2 pb-2 p-10 rounded-lg text-white font-bold bg-gradient-to-r from-blue-500 to-blue-400 cursor-pointer outline-none">
            Check
          </button>
        </form>
      </div>)
      
       : 
       
       (
      
        <div className={`${
          movingState ? "block" : "hidden"
        } bg-gray-300 rounded-lg p-5 pt-10 2xl:p-10 h-screen xl:h-[900px] xl:mt-10 w-[95%] 2xl:w-[55%] mb-10 transition-all duration-1000 shadow-xl shadow-black overflow-y-scroll no-scrollbar`}
       >
        <h1 className="text-3xl 2xl:text-5xl font-bold text-shadow-lg text-shadow-black italic text-white">YOUR ATS REPORT : </h1>

        {/* Overall Score */}
        <div className="mt-10  2xl:pl-10 flex justify-left items-center">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold">Your Ats Score : </h3>
          <div className="inline-block ml-4 2xl:ml-10">
            <CircularProgressbar className="size-20 sm:size-30 xl:size-40  inline-block" value={atsScore} text={`${atsScore}/100`} />
          </div>
        </div>

        {/* Category Wise Score Distribution  */}
        <div className="mt-10">
          <h2 className=" 2xl:ml-10 text-2xl 2xl:text-3xl font-bold">Category-Wise Score Distribution : </h2>

          <div className="w-full pt-5 border-4 bg-gray-700 grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-5 rounded-xl">

            <div className=" h-[260px] ml-3 mr-3">
              <div className="w-full h-[70%]  inline-block">
                <CircularProgressbar value={(categoryScore["Skills Match"])*3.33} text={`${categoryScore["Skills Match"]}/30`} className="inline-block size-30"/>
              </div>
              <div className="flex justify-center items-center h-[30%] font-bold text-center text-2xl text-white">
                <p>Skills Match</p>
              </div>
            </div>

            <div className=" h-[250px]  ml-3 mr-3">
              <div className="w-full h-[70%]  inline-block">
                <CircularProgressbar value={(categoryScore["Experience Relevance"])*3.33} text={`${(categoryScore["Experience Relevance"])}/30`} className="inline-block size-30"/>
              </div>
              <div className="flex justify-center items-center text-center h-[30%] font-bold text-xl text-white">
                <p>Experience Relevence</p>
              </div>
            </div>

            <div className=" h-[250px]  ml-3 mr-3">
              <div className="w-full h-[70%]  inline-block">
                <CircularProgressbar value={(categoryScore["Education and Certifications"])*5} text={`${categoryScore["Education and Certifications"]}/20`} className="inline-block size-30"/>
              </div>
              <div className="flex justify-center items-center h-[30%] text-center font-bold text-3xl text-white">
                <p>Education</p>
              </div>
            </div>

            <div className=" h-[250px] ml-3 mr-3">
              <div className="w-full h-[70%]  inline-block">
                <CircularProgressbar value={(categoryScore["Keywords and Formatting"])*5} text={`${(categoryScore["Keywords and Formatting"])}/20`} className="inline-block size-30 "/>
              </div>
              <div className="flex justify-center items-center text-center h-[30%] font-bold text-xl text-white">
                <p>Keywords & Formating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Score Explanation */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold">Score Explanation : </h2>
          <div className="p-3 sm:p-4 md:p-5 lg:p-6 xl:p-10 bg-gray-700 mt-5 rounded-xl">
            {Object.entries(scoreExplanation).map(([key, value]) => {
              return <div key={key} className="border p-2 mb-2 rounded-xl bg-gray-400">
                <h4 className="text-2xl font-bold">{key}</h4>
                <p className="mt-1">{value}</p>
              </div>
            })}
          </div>
        </div>

        {/* Suggestion to improvement */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold">Suggestion to Improvement: </h2>
          <div className="p-3 2xl:p-10 bg-gray-700 mt-5 rounded-xl">
            <ol className="list-decimal">
              {resumeImprovmentSuggestion.map((element , index) => {
                return <div key={index} className="border pl-3 pr-3 pt-2 pb-2 mb-2 md:text-lg 2xl:text-xl rounded-xl bg-gray-400 flex justify-left items-center">
                  <li className="ml-6 font-bold">{element}</li>
                </div>
              })}
            </ol>
          </div>
        </div>


        {/* Final Verdict */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold">Final Verdict: </h2>
          <div className="p-3 2xl:p-10 bg-gray-700 mt-5 rounded-xl">
            <div className="border pl-3 pr-3 pt-2 pb-2 mb-2 rounded-xl bg-gray-400 ">
              <h5 className="font-bold text-xl">Should you use this resume for this job : </h5>
              <p className="font-bold text-blue-900 text-xl ml-2">{finalSuggestion['shouldUse']}</p>
            </div>

            <div className="border pl-3 pr-3 pt-2 pb-2 mb-2 rounded-xl bg-gray-400 ">
              <h5 className="font-bold text-xl">why ? : </h5>
              <p className="font-bold text-blue-900 text-xl ml-2">{finalSuggestion['whyUseOrWhyNot']}</p>
            </div>

            <div className="border pl-3 pr-3 pt-2 pb-2 mb-2 rounded-xl bg-gray-400">
              <h5 className="font-bold text-xl block">Chances of Selection : </h5>
              <p className="font-bold text-blue-900 text-xl ml-2">{finalSuggestion['selectionProbability']}</p>
            </div>
          </div>
        </div>

 
      </div>)}
      

      
    </div>
  );
};

export default ATScheck;
