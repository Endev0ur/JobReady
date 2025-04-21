import React from "react";
import ProjectDetails from "./ProjectDetails";
import Education from "./Education";
import Experience from "./Experience";
import Achievement from "./Achievements";
import Skills from "./Skills";
const ProfileRightBlock = () => {
  
  return (
    <div className="h-[100%] w-[70%] bg-white rounded-2xl shadow-2xl shadow-black p-10">
      <h1 className="text-4xl font-bold inline-block">DETAILS</h1>
      <div className="h-[94%] w-[100%] border mt-4 rounded-3xl p-5 overflow-scroll no-scrollbar">
        {/* EDUCATION QUALIFICATION */}

        <Education></Education>

        {/* Project1 Details :  */}

        <ProjectDetails></ProjectDetails>

        {/* Experience Section */}

        <Experience></Experience>

        {/* Achievement section */}

        <Achievement></Achievement>

        {/* Skills */}

        <Skills></Skills>



        

        
      </div>
    </div>
  );
};

export default ProfileRightBlock;
