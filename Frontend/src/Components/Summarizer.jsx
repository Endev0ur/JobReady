import React from "react";
import { ImCross } from "react-icons/im";

const Summarizer = ({ openForm, setOpenForm }) => {
  const handleClose = () => {
    setOpenForm(!openForm);
  };

  return (
    <div className="h-screen bg-white flex justify-center items-center">
      <div className="bg-gray-800 h-[98%] w-[98%] rounded-2xl p-5 max-w-[690px] max-h-[850px] shadow-2xl shadow-black">
        <h1 className="text-4xl font-bold text-white">Summarizer</h1>
        <form action="" className="h-[100%] w-[100%]">
          <div className="mt-10 h-[70%]  p-2">
            <p className="text-xl font-bold text-white">Job Description : </p>
            <textarea
              name=""
              id=""
              autoComplete="none"
              placeholder="Copy & Paste the Job Description Here ..."
              className=" border-2 mt-2 h-[95%] w-[100%] resize-none p-3 outline-none rounded-2xl font-bold bg-gray-700 placeholder:text-gray-900 "
            ></textarea>
          </div>

          <br />
          <button className="mt-8 border-3 text-xl pt-2 pb-2 p-4 rounded-xl text-white font-bold bg-blue-700 outline-none">Summarize</button>
        </form>

      </div>
    </div>
  );
};

export default Summarizer;
