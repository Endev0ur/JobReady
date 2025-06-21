import React, { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { GiSandsOfTime } from "react-icons/gi";
import { IoPersonOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

const Mainbar = ({
  openForm,
  setOpenForm,
  option ,
  setOption
}) => {
  const navigateTo = useNavigate();
  const handleOpenForm = (num) => {
    // console.log(openForm);
    if (num == 1) {
      navigateTo("/summarizer")
    } else if (num == 2) {
      navigateTo("/atscheck")
    } else if(num == 3) {
      navigateTo("/generate")
    }
    else if(num==4){
      setOption("aboutus")
    }
    else if(num==5){
      navigateTo("/profile");
    }

    setOpenForm(!openForm);
  };

  return (
      <div className="h-15 w-[95%] md:h-20 md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[40%] border-3 md:border-5 rounded-[100px] bg-gradient-to-r from-blue-500 via-sky-900 to-blue-400 backdrop-blur-md shadow-xl flex justify-center items-center  shadow-black">
        <div
          className="h-[100%] w-[17.5%]  bg-transparent hover:bg-sky-500  transition-all duration-500 rounded-l-[100px] flex justify-center items-center cursor-pointer"
          onClick={() => handleOpenForm(1)}
        >
          <GiSandsOfTime className="text-2xl  xl:text-4xl " />
        </div>
        <div
          className="h-[100%] w-[17.5%] bg-transparent hover:bg-sky-600 transition-all duration-500 flex justify-center items-center cursor-pointer"
          onClick={() => handleOpenForm(2)}
        >
          <h1 className="text-xl xl:text-3xl font-bold text-shadow-md text-shadow-black italic text-white">ATS</h1>
        </div>
        <div
          className="h-[100%] w-[30%]  bg-transparent hover:bg-sky-600  transition-all duration-500 relative flex justify-center items-center cursor-pointer"
          onClick={() => handleOpenForm(3)}
        >
          <div
            className="w-fit h-fit p-2 mb-10 md:mb-13 xl:mb-18 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 hover:bg-sky-300 border-4 flex justify-center items-center cursor-pointer"
            onClick={() => handleOpenForm(3)}
          >
            <FiPlusCircle className="text-5xl md:text-7xl xl:text-8xl text-gray-700" />
          </div>
        </div>
        <div className="h-[100%] w-[17.5%] bg-transparent hover:bg-sky-600  transition-all duration-500 flex justify-center items-center cursor-pointer" onClick={() => handleOpenForm(4)}>
          <h1 className="text-xl font-bold xl:text-3xl text-shadow-md text-shadow-black italic text-white">US</h1>
        </div>
        <div className="h-[100%] w-[17.5%] bg-transparent hover:bg-sky-500  transition-all duration-500 rounded-r-[100px] flex justify-center items-center cursor-pointer" onClick={() => handleOpenForm(5)}>
          <IoPersonOutline className="text-xl xl:text-3xl" />
        </div>
      </div>
  );
};

export default Mainbar;
