import React from 'react'
import { ImCross } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const AboutUs = ({ openForm, setOpenForm }) => {

  const handleClose = () => {
    setOpenForm(!openForm);
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-black overflow-scroll no-scrollbar">
        <div className="h-[95%] w-[95%] md:w-[70%] lg:w-[50%] 2xl:w-[40%] shandow-2xl shadow-black rounded-3xl p-5 2xl:p-10 flex flex-col items-start relative">
          <h1 className="text-[60px] md:text-[70px] lg:text-[80px] xl:text-[90px] 2xl:text-[100px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-red-500 to-blue-500 ">
            ABOUT US
          </h1>

          <p className='text-xl xl:text-2xl 2xl:text-4xl font-bold mt-4 text-white'> <strong className='text-3xl 2xl:text-5xl'>Welcome To <span className='text-purple-500'>JOB READY</span></strong> : Your one way to build ATS friendly resume based on Job Description</p>

          <p className='text-lg xl:text-2xl 2xl:text-4xl mt-2 xl:mt-10 font-bold text-white'>Created By : <strong className='text-blue-500 text-3xl text-shadow-lg text-shadow-black'>SHUBHAM RAWAT</strong></p>

          <div className='w-[100%] pl-0 p-4 xl:flex mt-1 xl:mt-10  items-center text-white'>
            <p className=' text-2xl 2xl:text-3xl font-bold '>Connect With Us : </p>
            <a href='' className='text-3xl cursor-pointer mr-10 ml-5 inline-block mt-2 xl:mt-0'><FaLinkedin /></a>
            <a href='' className='text-3xl cursor-pointer mr-10 inline-block mt-2 xl:mt-0'><FaSquareInstagram /></a>
            <a href='' className='text-3xl cursor-pointer mr-10 inline-block mt-2 xl:mt-0'><FaXTwitter /></a>
            <a href="" className='text-3xl cursor-pointer xl:mr-10 mt-2 xl:mt-0 inline-block'><FaFacebookSquare /></a>
          </div>

          <div className='mt-10 text-xl 2xl:text-2xl font-bold pt-2 xl:pt-3 pb-2 xl:pb-3 pr-6 pl-6 bg-red-500 rounded-2xl border-3 flex justify-around items-center cursor-pointer shadow-lg shadow-black' onClick={handleClose}>
            <button className='cursor-pointer'>Go Back</button>
            <FaArrowRightFromBracket className='ml-2'/>
          </div>

        </div>
      </div>
  )
}

export default AboutUs