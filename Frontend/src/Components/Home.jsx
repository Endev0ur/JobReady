import React, { useRef, useState } from "react";
import Mainbar from "./Mainbar";
import AboutUs from './AboutUs';
import { FiPlusCircle } from "react-icons/fi";
import { GiSandsOfTime } from "react-icons/gi";

const Home = () => {
  // summary , atscheck , generate
  const [openForm, setOpenForm] = useState(false);
  const [option, setOption] = useState("");

  return (
    <div className="relative">
      <div className="h-screen w-full flex justify-between items-center flex-col bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:20px_20px] bg-gray-900 ">
        <div className="h-[80%] mt-1 w-[100%] sm:w-[80%] md:w-[60%] lg:w-[50%] pt-4 xl:p-10 bg-transparent overflow-y-scroll no-scrollbar">
          <div className=" mb-10">
            <h1 className=" text-5xl lg:text-[50px]  xl:text-[60px] ml-4 font-bold text-white">WELCOME TO <strong className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-red-500 to-blue-600 text-shadow">JOB READY</strong></h1>
            <p className="text-xl xl:text-4xl ml-7 xl:ml-5 font-bold text-white">AI Powered Resume Analyser and Generator</p>
          </div>

          <div className="bg-transparent h-[75%] flex justify-center flex-wrap p-3 overflow-scroll no-scrollbar">

            <div className='2xl:h-[70%] w-full   2xl:w-[70%] mb-5 bg-white shadow-md shadow-gray-500 p-4 sm:p-10 flex justify-center items-center flex-col text-center rounded-xl'>
              <div className=" p-3 rounded-lg bg-sky-500">
               <GiSandsOfTime className="text-4xl " />
              </div>
              <h3 className="text-4xl font-bold mt-5">Summarizer</h3>
              <p className="text-xl font-bold mt-5 text-gray-500">Extracts important keywords and job highlights to help you create a perfectly targeted resume.</p>
              
            </div>

            <div className='2xl:h-[70%] w-full 2xl:w-[70%] mb-5 bg-white shadow-md shadow-gray-500 p-4 sm:p-10 flex justify-center items-center flex-col text-center rounded-xl'>
              <div className=" p-3 rounded-lg bg-lime-500">
                <h1 className="text-2xl font-bold text-shadow-md text-shadow-black text-white">ATS</h1>
              </div>
              <h3 className="text-4xl font-bold mt-4">ATS Check</h3>
              <p className="text-xl font-bold mt-4 text-gray-500">Our AI checks your resume against job requirements and tells you exactly what recruiters and ATS systems see — so you can fix gaps before applying.</p>
            </div>

            <div className='2xl:h-[70%] w-full 2xl:w-[70%] shadow-md bg-white shadow-gray-500 p-4 sm:p-10 flex justify-center items-center flex-col text-center rounded-xl'>
              <div className=" p-3 rounded-lg bg-violet-500">
                <FiPlusCircle className="text-4xl text-black" />
              </div>
              <h3 className="text-4xl font-bold mt-4">Generator</h3>
              <p className="text-xl font-bold mt-4 text-gray-500">Instantly creates a personalized, ATS-optimized resume tailored to your profile and the job description — no formatting or writing needed.</p>
            </div>

          </div>
        </div>
        <div className="h-[20%] w-[100%] bg-transparent flex items-center justify-center">
          <Mainbar
              openForm={openForm}
              setOpenForm={setOpenForm}
              option={option}
              setOption={setOption}
          ></Mainbar>
        </div>
      </div>
      {openForm && (
        <div className="fixed inset-0 z-50 backdrop-blur-lg bg-black/30">
          {option=="aboutus" && <AboutUs openForm={openForm} setOpenForm={setOpenForm}/>}
        </div>
      )}
    </div>
  );
};

export default Home;





{/* <div className="h-[70%] w-[100%] p-5 sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] flex justify-start items-start flex-col bg-white pt-10 xl:pt-20 overflow-y-scroll no-scrollbar ">
          <h1 className="text-3xl font-bold italic sm:text-3xl xl:text-4xl">
            Welcome to <strong className="text-5xl text-sky-500 text-shadow-lg text-shadow-black">JOB READY</strong> <span className="underline">( Your AI Powered Resume Generator and Analyser )</span> {" "}
          </h1>
          <br />
          <h1 className="text-2xl font-bold underline sm:text-3xl xl:text-4xl">
            How to Use the Product ?{" "}
          </h1>
          <br />
          <br className="hidden sm:block" />
          <p className="text-xl font-bold sm:text-2xl xl:text-3xl">
            Feature 1 : Summarizer
          </p>
          <br className="hidden sm:block" />
          <p className="pl-6 text-lg font-bold sm:text-xl xl:text-2xl text-gray-700">
            I. Paste the job description and extract the
            keywords for your resume
          </p>
          <br />
          <br className="hidden sm:block" />
          <p className="text-xl font-bold sm:text-2xl xl:text-3xl">
            Feature 2 : ATS Score
          </p>
          <br className="hidden sm:block" />
          <p className="pl-6 text-lg font-bold sm:text-xl xl:text-2xl text-gray-700">
            II. Upload Your resume and check the ATS Score Based on Job
            Description
          </p>
          <br />
          <br className="hidden sm:block" />
          <p className="text-xl font-bold sm:text-2xl xl:text-3xl">
            Feature 3 : Generate Resume
          </p>
          <br className="hidden sm:block" />
          <p className="pl-6 text-lg font-bold sm:text-xl xl:text-2xl text-gray-700">
            III. Generate the ATS Friendly resume based on job description <br />{" "}
            (* Different Resume's for different Job Description with just one click)
          </p>
        </div>
        <div className="h-[30%] w-[100%] flex items-center justify-center">
          <Mainbar
            openForm={openForm}
            setOpenForm={setOpenForm}
            option={option}
            setOption={setOption}
          ></Mainbar>
        </div> */}