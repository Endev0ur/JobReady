import React from "react";
import { ImCross } from "react-icons/im";

const Summarizer = ({ openForm, setOpenForm }) => {
  const handleClose = () => {
    setOpenForm(!openForm);
  };

  return (
    <form action="">
      <div className="h-screen w-full flex justify-center items-center">
        <div className="h-[80%] w-[95%] md:w-[70%] lg:w-[50%] 2xl:w-[40%] bg-gray-900 shandow-2xl shadow-black rounded-3xl p-4 md:p-5 lg:p-7 xl:p-8 flex flex-col items-start relative">
          <h1 className=" text-2xl xl:text-4xl font-bold text-white mt-6 xl:mt-10">Job Description</h1>
          <textarea
            name=""
            id=""
            autoComplete="none"
            placeholder="Copy & Paste the Job Description Here ..."
            className=" border mt-7 h-[60%] w-[100%] resize-none rounded-2xl p-5 xl:p-10 text-lg font-bold xl:text-2xl outline-none bg-gray-500"
          ></textarea>
          <button className="mt-8 h-[60px] w-[200px] border-3 rounded-xl text-xl xl:text-2xl font-bold bg-blue-600 text-gray-300 cursor-pointer hover:bg-gray-300 hover:text-blue-600 transition-all duration-1000">
            Summarize
          </button>
          <ImCross
            className="text-white absolute top-3 right-4 xl:top-7 xl:right-8 text-lg xl:text-3xl cursor-pointer"
            onClick={handleClose}
          />
        </div>
      </div>
    </form>
  );
};

export default Summarizer;
