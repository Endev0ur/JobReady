import React, { useRef } from "react";
import { ImCross } from "react-icons/im";

const ATScheck = ({ openForm, setOpenForm }) => {

  const handleClose = () => {
    setOpenForm(!openForm);
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="h-[85%] xl:h-[80%] w-[95%] md:w-[70%] lg:w-[50%] xl:w-[40%] bg-gray-900 shandow-2xl shadow-black rounded-3xl p-5 xl:p-10 flex flex-col items-start relative">
          <h1 className="text-2xl mt-8 xl:text-4xl font-bold text-white">
            ATS Score Check :
          </h1>
          <textarea
            name=""
            id=""
            autoComplete="none"
            placeholder="Copy & Paste the Job Description Here ..."
            className=" border mt-5 xl:mt-7 h-[50%] xl:h-[60%] w-[100%] resize-none rounded-2xl p-4 xl:p-10 text-lg font-bold xl:text-2xl outline-none bg-gray-500"
          ></textarea>

          <p className=" mt-5 xl:mt-10 text-lg xl:text-xl font-bold text-white">
            Upload Your Resume (Pdf only) :{" "}
          </p>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="mt-3 pl-4 cursor-pointer text-sm xl:text-xl text-white p-3 border-b-3 bg-gray-800 rounded-3xl"
          />
          <button
            type="submit"
            className="mt-5 xl:mt-8 h-[50px] xl:h-[60px] w-[170px] xl:w-[200px] border-3 rounded-xl text-2xl font-bold bg-blue-600 text-gray-300 cursor-pointer hover:bg-gray-300 hover:text-blue-600 transition-all duration-1000"
          >
            Check
          </button>
          <ImCross
            className="text-white absolute top-4 right-4 xl:top-7 xl:right-8 text-lg xl:text-3xl cursor-pointer"
            onClick={handleClose}
          />
        </div>
      </div>
    </form>
  );
};

export default ATScheck;
