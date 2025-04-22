import React, { useRef, useState } from "react";
import Mainbar from "./Mainbar";
import AboutUs from './AboutUs';

const Home = () => {
  // summary , atscheck , generate
  const [openForm, setOpenForm] = useState(false);
  const [option, setOption] = useState("");

  return (
    <div className="relative">
      <div className="h-screen w-full flex justify-center items-center flex-col bg-gray-300">
        <div className="h-[70%] w-[100%] p-5 sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] flex justify-start items-start flex-col bg-gray-300 pt-10 xl:pt-20 overflow-y-scroll no-scrollbar">
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
            I. Click & then copy paste the job description and extract the
            keywords for you resume
          </p>
          <br />
          <br className="hidden sm:block" />
          <p className="text-xl font-bold sm:text-2xl xl:text-3xl">
            Feature 2 : ATS Score
          </p>
          <br className="hidden sm:block" />
          <p className="pl-6 text-lg font-bold sm:text-xl xl:text-2xl text-gray-700">
            I. Upload Your resume and check the ATS Score Based on Job
            Description
          </p>
          <br />
          <br className="hidden sm:block" />
          <p className="text-xl font-bold sm:text-2xl xl:text-3xl">
            Feature 3 : Generate Resume
          </p>
          <br className="hidden sm:block" />
          <p className="pl-6 text-lg font-bold sm:text-xl xl:text-2xl text-gray-700">
            I. Generate the ATS Friendly resume based on job description <br />{" "}
            (* different resume for different job description with one click)
          </p>
        </div>
        <div className="h-[30%] w-[100%] flex items-center justify-center">
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
