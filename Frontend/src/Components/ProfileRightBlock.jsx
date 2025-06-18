import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectDetails from "./ProjectDetails";
import Education from "./Education";
import Experience from "./Experience";
import Achievement from "./Achievements";
import Skills from "./Skills";
import UserDetails from "./UserDetails";
import { toast } from "react-toastify";

const ProfileRightBlock = () => {
  let [resumeDetails, setResumeDetails] = useState({
    userDetails: {},
    education: {},
    project: [],
    experience: [],
    skills: [],
    achievements: [],
  });

  const [saveToBackend , setSaveToBackend] = useState(false);

  /* This is for when profile page will load then it will fetch the user detail if possible */
  useEffect(() => {
    const getDetails = async () => {
      let url = `${import.meta.env.VITE_BACKEND_URL}/profile/get-details`;
      const response = await axios.get(url, {
        withCredentials: true,
      });

      // console.log(response);
      const result = response.data;
      const { success } = result;
      if (success) {
        const { resume } = result;

        setResumeDetails((res) => ({
          ...res,
          userDetails: resume.userDetails,
          education: resume.education,
          project: resume.project,
          experience: resume.experience,
          skills: resume.skills,
          achievements: resume.achievements,
        }));

        // console.log("resumeDetails are : " , resumeDetails);
      } else {
        console.log("user details are not here");
      }
    };

    getDetails();
  }, []);

  /* this below useEffect is just for knowing that is my resumeDetails filled successfully or not */
  useEffect(() => {
    // console.log("resumeDetails are : ", resumeDetails.experience[0]);
  }, [UserDetails , saveToBackend]);


  const handleFinalSave = async(e) => {
    e.preventDefault();

    setSaveToBackend(false);

    const url = `${import.meta.env.VITE_BACKEND_URL}/profile/save`;
    const response = await axios.post(url , resumeDetails , {
      withCredentials:true
    });

    // console.log(response);
    const result = response.data;
    // console.log(data);

    const {success , message} = result;

    if(success){
      toast.success(`${message}`);
    }else{
      toast.error(`${message}`);
    }

  }

  return (
    <div className="h-[100%] w-[99%] sm:w-[95%] md:w-[85%] lg:w-[70%] bg-gradient-to-r from-red-500 to-orange-500 rounded-lg shadow-2xl shadow-black p-1 sm:p-2 md:p-4 lg:p-6 xl:p-10 pt-10">
      <div className="flex just-center items-center mb-5">
      <h1 className="text-4xl font-bold inline-block pl-5">DETAILS : </h1>
      {saveToBackend && <button className=" xl:pl-5 xl:pr-5 p-2  bg-lime-500 text-white rounded-lg ml-10 font-bold cursor-pointer" onClick={handleFinalSave}>Final Save</button>}
      </div>
      <div className="h-[94%] w-[100%] border-2 bg-gray-900 mt-4 rounded-lg p-2 xl:p-5 overflow-scroll no-scrollbar">
        {/* User Details */}

        <UserDetails
          basicDetails={resumeDetails.userDetails}
          setBasicDetails={setResumeDetails}
          setSaveToBackend={setSaveToBackend}
        ></UserDetails>

        {/* EDUCATION QUALIFICATION */}

        <Education
          educationDetails={resumeDetails.education}
          setEducationDetails={setResumeDetails}
          setSaveToBackend={setSaveToBackend}
        ></Education>

        {/* Project1 Details * 2  */}

        <ProjectDetails
          projectDetails={resumeDetails.project[0]}
          setProjectDetails={setResumeDetails}
          setSaveToBackend={setSaveToBackend}
          index={0}
        ></ProjectDetails>

        <ProjectDetails
          projectDetails={resumeDetails.project[1]}
          setProjectDetails={setResumeDetails}
          setSaveToBackend={setSaveToBackend}
          index={1}
        ></ProjectDetails>

        {/* Experience Section * 2 */}

        <Experience
          experienceDetails={resumeDetails.experience[0]}
          setExperienceDetails={setResumeDetails}
          setSaveToBackend={setSaveToBackend}
          index={0}
        ></Experience>

        <Experience experienceDetails={resumeDetails.experience[1]}
          setExperienceDetails={setResumeDetails}
          setSaveToBackend={setSaveToBackend}
          index={1}></Experience>

        {/* Achievement section */}

        <Achievement
          achievementDetails={resumeDetails.achievements}
          setAchievementsDetails={setResumeDetails}
          setSaveToBackend={setSaveToBackend}
        ></Achievement>

        {/* Skills */}

        <Skills
          skillsDetails={resumeDetails.skills}
          setSkillsDetails={setResumeDetails}
          setSaveToBackend={setSaveToBackend}
        ></Skills>
      </div>
    </div>
  );
};

export default ProfileRightBlock;
