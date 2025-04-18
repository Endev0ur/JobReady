import React, { useRef } from "react";
import { ImCross } from "react-icons/im";

const ATScheck = ({ openForm, setOpenForm }) => {

  const handleClose = () => {
    setOpenForm(!openForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (

    <div className="h-screen bg-white flex justify-center items-center">
      <div className="bg-gray-800 h-[98%] w-[98%] rounded-2xl p-5 max-w-[690px] max-h-[850px] shadow-2xl shadow-black">
        <h1 className="text-4xl font-bold text-white">ATS Check</h1>
        <form action="" className="h-[100%] w-[100%]">
          <div className="mt-6 h-[70%]  p-2">
            <p className="text-xl font-bold text-white">Job Description : </p>
            <textarea
              name=""
              id=""
              autoComplete="none"
              placeholder="Copy & Paste the Job Description Here ..."
              className=" border-2 mt-2 h-[91%] w-[100%] resize-none p-3 outline-none rounded-2xl font-bold bg-gray-700 placeholder:text-gray-900"
            ></textarea>
          </div>

          <input
            type="file"
            accept=".pdf"
            className="mt-3 pl-4 cursor-pointer text-sm xl:text-xl text-white p-3 border-b-3 bg-gray-800 rounded-3xl"
          />
          <br />
          <button className="mt-6 border-3 text-xl pt-2 pb-2 p-4 rounded-xl text-white font-bold bg-blue-700 outline-none">Summarize</button>
        </form>

      </div>
    </div>

    
  );
};

export default ATScheck;
