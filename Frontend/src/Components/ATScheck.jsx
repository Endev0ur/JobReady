import React, { useRef, useState } from "react";
import { ImCross } from "react-icons/im";
import axios from 'axios';

const ATScheck = () => {
  
  const [jobDescription , setJobDescription] = useState("");
  const [file , setFile] = useState(null);


  const handleChange = (e) => {
    e.preventDefault();
    console.log("helow");
    setJobDescription(e.target.value);
    console.log(jobDescription);
  }

  const handleFileChange = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    try{

      if(!file){
        alert("Please Select the file !");
      }

      const formData = new FormData();
      formData.append("jobDescription" , jobDescription);
      formData.append("resume" , file);
      
      const url = "http://localhost:3000/resume/ats-check"
      const response = axios.post(url , formData);

      console.log(response);

    }
    catch(err){
      console.log("Error in ats check frontend" , err);
    }

  };

  return (

    <div className="h-screen bg-white flex justify-center items-center">
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
          <button className="mt-6 border-3 text-xl pt-2 pb-2 p-4 rounded-xl text-white font-bold bg-blue-700 outline-none">Summarize</button>
        </form>

      </div>
    </div>

    
  );
};

export default ATScheck;
