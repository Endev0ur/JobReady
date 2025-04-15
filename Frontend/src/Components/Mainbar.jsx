import React from 'react'
import { FiPlusCircle } from "react-icons/fi";
import { GiSandsOfTime } from "react-icons/gi";
import { IoPersonOutline } from "react-icons/io5";

const Mainbar = () => {
  return (
    <>
      <div className='h-15 w-[95%] md:h-20 md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[40%] border-3 md:border-5 rounded-[100px] bg-blue-500 flex   justify-center items-center shadow-lg shadow-black'>
        <div className='h-[100%] w-[17.5%]  bg-blue-400 hover:bg-blue-300  transition-all duration-500 rounded-l-[100px] flex justify-center items-center cursor-pointer'>
        <GiSandsOfTime className="text-2xl  xl:text-4xl " />
        </div>
        <div className='h-[100%] w-[17.5%] bg-blue-400 hover:bg-blue-300 transition-all duration-500 flex justify-center items-center cursor-pointer'>
          <h1 className='text-xl xl:text-3xl font-bold'>ATS</h1>
        </div>
        <div className='h-[100%] w-[30%]  bg-blue-400 hover:bg-blue-300  transition-all duration-500 relative flex justify-center items-center cursor-pointer'>
          <div className="w-fit h-fit p-2 mb-10 md:mb-13 xl:mb-18 rounded-full bg-blue-300 hover:bg-blue-300 border-4 flex justify-center items-center cursor-pointer">
            <FiPlusCircle className="text-5xl md:text-7xl xl:text-8xl text-gray-700" />
          </div>
        </div>
        <div className='h-[100%] w-[17.5%] bg-blue-400 hover:bg-blue-300  transition-all duration-500 flex justify-center items-center cursor-pointer'>
          <h1 className="text-xl font-bold xl:text-3xl">US</h1>
        </div>
        <div className='h-[100%] w-[17.5%] bg-blue-400 hover:bg-blue-300  transition-all duration-500 rounded-r-[100px] flex justify-center items-center cursor-pointer'>
          <IoPersonOutline className="text-xl xl:text-3xl"/>
        </div>
      </div>
    </>
  )
}

export default Mainbar