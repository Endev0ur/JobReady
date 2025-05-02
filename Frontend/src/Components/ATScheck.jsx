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
  const [categoryScore , setCategoryScore] = useState([]);




  /* =============================================== */

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

      console.log(result.message["ATS Compatibility Score"]);

      

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
              className=" border-2 mt-2 h-[91%] w-[100%] resize-none p-3 outline-none rounded-2xl font-bold bg-gray-700 placeholder:text-gray-900"
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
        <div className="mt-10  pl-10 flex justify-left items-center">
          <h3 className="text-4xl font-bold">Your Ats Score : </h3>
          <div className="inline-block ml-10">
            <CircularProgressbar className="size-40  inline-block" value={percentage} text={`${percentage}/100`} />
          </div>
        </div>

        <div className="mt-10">
          <h2 className="ml-10 text-3xl font-bold">Category-Wise Score Distribution : </h2>

          <div className="w-full pt-5 border-4 bg-gray-700 grid xl:grid-cols-4 grid-cols-2 mt-5 rounded-xl">

            <div className=" h-[250px] ml-3 mr-3">
              <div className="w-full h-[70%]  inline-block">
                <CircularProgressbar value={50} text={`${10}/20`} className="inline-block size-40"/>
              </div>
              <div className="flex justify-center items-center h-[30%] font-bold text-3xl text-white">
                <p>Skills Match</p>
              </div>
            </div>

            <div className=" h-[250px]  ml-3 mr-3">
              <div className="w-full h-[70%]  inline-block">
                <CircularProgressbar value={50} text={`${10}/20`} className="inline-block size-40"/>
              </div>
              <div className="flex justify-center items-center h-[30%] font-bold text-xl text-white">
                <p>Experience Relevence</p>
              </div>
            </div>

            <div className=" h-[250px]  ml-3 mr-3">
              <div className="w-full h-[70%]  inline-block">
                <CircularProgressbar value={50} text={`${10}/20`} className="inline-block size-40"/>
              </div>
              <div className="flex justify-center items-center h-[30%] font-bold text-3xl text-white">
                <p>Education</p>
              </div>
            </div>

            <div className=" h-[250px] ml-3 mr-3">
              <div className="w-full h-[70%]  inline-block">
                <CircularProgressbar value={50} text={`${10}/20`} className="inline-block size-40 "/>
              </div>
              <div className="flex justify-center items-center h-[30%] font-bold text-xl text-white">
                <p>Keywords & Formating</p>
              </div>
            </div>
            

          </div>

        </div>
        
      </div>
    </div>
  );
};

export default ATScheck;
