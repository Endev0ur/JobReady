import React, {useEffect, useState } from "react";
import axios from 'axios';
import ProjectDetails from "./ProjectDetails";
import Education from "./Education";
import Experience from "./Experience";
import Achievement from "./Achievements";
import Skills from "./Skills";
import UserDetails from "./UserDetails";
const ProfileRightBlock = () => {
  
  let [resumeDetails , setResumeDetails] = useState({
    userDetails:{},
    education:{},
    project:[],
    experience:[],
    skills:[],
    achievements:[],
  })

  /* This is for when profile page will load then it will fetch the user detail if possible */
  useEffect(()=>{

    const getDetails = async() => {
      let url = "http://localhost:3000/profile/get-details";
      const response = await axios.get(url , {
        withCredentials:true,
      });

      console.log(response);
      const result = response.data;
      const {success} = result;
      if(success){
        const {resume} = result;
        
        setResumeDetails((res)=>({
          ...res,
          userDetails:resume.userDetails,
          education:resume.education,
          project:resume.project,
          experience : resume.experience,
          skills:resume.skills,
          achievements : resume.achievements
        }))

        console.log("resumeDetails are : " , resumeDetails);
      }
      else{
        console.log("user details are not here");
      }
    }

    getDetails();
    

  } , []);

  /* this below useEffect is just for knowing that is my resumeDetails filled successfully or not */
  useEffect(()=>{
    console.log("resumeDetails are : " , resumeDetails);
  } , [resumeDetails])



  return (
    <div className="h-[100%] w-[70%] bg-white rounded-2xl shadow-2xl shadow-black p-10">
      <h1 className="text-4xl font-bold inline-block">DETAILS : </h1>
      <div className="h-[94%] w-[100%] border mt-4 rounded-3xl p-5 overflow-scroll no-scrollbar">
        {/* User Details */}

        <UserDetails basicDetails = {resumeDetails.userDetails} setBasicDetails = {setResumeDetails}></UserDetails>


        {/* EDUCATION QUALIFICATION */}

        <Education educationDetails = {resumeDetails.education} setEducationDetails = {setResumeDetails}></Education>


        {/* Project1 Details * 2  */}

        <ProjectDetails  projectDetails={resumeDetails.project[0]} setProjectDetails={setResumeDetails}></ProjectDetails>

        <ProjectDetails></ProjectDetails>


        {/* Experience Section * 2 */}

        <Experience></Experience>

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
