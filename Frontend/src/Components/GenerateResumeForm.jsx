import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import {toast} from 'react-toastify';
import { Grid } from 'react-loader-spinner';

const GenerateResumeForm = () => {
  const navigateTo = useNavigate();

  const [loading , setLoading] = useState(false);

  const [jobDescription, setJobDescription] = useState("");
  let [resumeDetails, setResumeDetails] = useState({
    userDetails: {},
    education: {},
    project: [],
    experience: [],
    skills: [],
    achievements: [],
  });

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

  // console.log("resume generate is : " , resumeDetails.userDetails.name);

  const handleChange = (e) => {
    e.preventDefault();
    // console.log("helow");
    setJobDescription(e.target.value);
    // console.log(jobDescription);
  };

  const handleGenerateResume = async (e) => {

    setLoading(true);

    try{
      const url = `${import.meta.env.VITE_BACKEND_URL}/generate/resume`;

      const response = await axios.post(url, jobDescription, {
        withCredentials: true,
      });

      const result = response.data;

      // console.log("result is : ", result);

      const { message, success } = result;

      if(!success){
        toast.error("Try again after some time");
        navigateTo("/");
      }

      localStorage.setItem("message", JSON.stringify(message));

      
      navigateTo("/resume");
    }
    catch(err){
      toast.error("Error occurred !");
      toast.error("Try again after some time");
      navigateTo("/");
    }
    finally{
      setLoading(false);
    }
  };

  const handleDetailsEdit = () => {
    navigateTo("/profile");
  };

  if(loading){
    return (
    <div className='h-screen w-full flex justify-center items-center text-bold text-2xl'>
      <Grid
        height="80"
        width="80"
        color="#000000"
        ariaLabel="grid-loading"
        visible={true}
      />
    </div>
    )
  }



  return (
    <>
      <div className="min-h-screen xl:h-screen w-full mx-auto flex flex-col xl:flex-row items-center justify-center bg-[linear-gradient(to_right,#ff0000,#ffff00,#9333ea)] p-7 xl:p-10 2xl:pl-15 2xl:pr-15">
        <div className="bg-gray-900 text-white max-h-[800px]  xl:h-[99%] xl:max-h-none min-w-[340px] sm:w-[95%] md:w-[90%] xl:w-[50%] p-1 pt-10 md:p-6 lg:p-10 overflow-y-scroll rounded-t-lg xl:rounded-t-none xl:rounded-l-lg shadow-2xl shadow-black">
          <div className="flex justify-left items-center">
            <h1 className="text-4xl font-bold pl-2">Details : </h1>
            <button
              className=" pl-10 pr-10 pt-2 pb-2 ml-10 rounded-lg cursor-pointer bg-green-500 font-bold"
              onClick={handleDetailsEdit}
            >
              EDIT
            </button>
          </div>

          {/* User Details */}
          <div className="border p-2 xl:p-5 mb-5 mt-10 rounded-lg">
            <h3 className="text-xl font-bold">User Details : </h3>
            <p className="pl-3">
              <b>Name</b> : {resumeDetails.userDetails.name}
            </p>
            <p className="pl-3">
              <b>Email</b> : {resumeDetails.userDetails.email}
            </p>
            <p className="pl-3">
              <b>PhoneNo</b> : {resumeDetails.userDetails.phoneNo}
            </p>
            <p className="pl-3">
              <b>Linkedin</b> : {resumeDetails.userDetails.linkedIn}
            </p>
            <p className="pl-3">
              <b>Github</b> : {resumeDetails.userDetails.github}
            </p>
          </div>

          {/* Education Details */}
          <div className="border p-2 xl:p-5 mb-5 rounded-lg">
            <h3 className="text-xl font-bold">Education Details : </h3>
            <p className="pl-3">
              <b>CollgeName</b> : {resumeDetails.education.collegeName}
            </p>
            <p className="pl-3">
              <b>City</b> : {resumeDetails.education.city}
            </p>
            <p className="pl-3">
              <b>Course</b> : {resumeDetails.education.course}
            </p>
            <p className="pl-3">
              <b>Branch</b> : {resumeDetails.education.branch}
            </p>
            <p className="pl-3">
              <b>Start Year</b> : {resumeDetails.education.startDate}
            </p>
            <p className="pl-3">
              <b>End Year</b> : {resumeDetails.education.endDate}
            </p>
            <p className="pl-3">
              <b>Backlogs</b> : {resumeDetails.education.backlogs}
            </p>
            <p className="pl-3">
              <b>CurrentSemGPA</b> : {resumeDetails.education.currentSemGPA}
            </p>
            <p className="pl-3">
              <b>Overall GPA</b> : {resumeDetails.education.overallGPA}
            </p>
          </div>

          {/* Product Details */}
          {resumeDetails.project.length !== 0 && (
            <div className="border p-2 xl:p-5 mb-5 rounded-lg">
              <h3 className="text-xl font-bold">Project Details : </h3>
              {resumeDetails.project.map((item, index) => {
                return (
                  <div className="border p-5 mt-3 rounded-lg" key={index}>
                    <h4 className="text-lg font-bold mb-2">
                      Project{index + 1}
                    </h4>
                    <p className="pl-3">
                      <b>CollgeName</b> : {item.projectName}
                    </p>
                    <p className="pl-3">
                      <b>City</b> : {item.projectDescription}
                    </p>
                    <ul className="pl-3">
                      <b>Course</b> :{" "}
                      {item.techStack.map((items, ind) => {
                        return (
                          <li className="pl-10" key={ind}>
                            {" "}
                            {items}
                          </li>
                        );
                      })}
                    </ul>
                    <p className="pl-3">
                      <b>Branch</b> : {item.github}
                    </p>
                    <p className="pl-3">
                      <b>Backlogs</b> : {item.deployed}
                    </p>
                    <ul className="pl-3">
                      <b>CurrentSemGPA</b> :{" "}
                      {item.briefPoints.map((items, ind) => {
                        return (
                          <li className="pl-10 " key={ind}>
                            {" "}
                            {items} <hr />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          )}

          {/* Experience */}
          {resumeDetails.experience.length !== 0 && (
            <div className="border p-2 mb-5">
              <h3 className="text-xl font-bold">Experience Details : </h3>
              {resumeDetails.experience.map((item, index) => {
                return (
                  <div className="border p-2 mt-3" key={index}>
                    <h4>Experience{index + 1}</h4>
                    <p className="pl-3">
                      <b>CollgeName</b> : {item.companyName}
                    </p>
                    <p className="pl-3">
                      <b>City</b> : {item.role}
                    </p>
                    <p className="pl-3">
                      <b>Branch</b> :{" "}
                      {new Date(item.joiningDate).toISOString().split("T")[0]}
                    </p>
                    <p className="pl-3">
                      <b>Backlogs</b> :{" "}
                      {new Date(item.leavingDate).toISOString().split("T")[0]}
                    </p>
                    <ul className="pl-3">
                      <b>CurrentSemGPA</b> :{" "}
                      {item.briefPoints.map((items, ind) => {
                        return (
                          <li className="pl-10" key={ind}>
                            {" "}
                            {items} <hr />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          )}

          {/* Achievements */}
          {resumeDetails.achievements.length !== 0 && (
            <div className="border p-2 mb-5 rounded-lg">
              <h3 className="text-xl font-bold">Achievements Details : </h3>
              {resumeDetails.achievements.map((item, index) => {
                return (
                  <div className="border p-2 mt-3" key={index}>
                    {item}
                  </div>
                );
              })}
            </div>
          )}

          {/* Skills */}
          {resumeDetails.skills.length !== 0 && (
            <div className="border p-2 mb-5 rounded-lg">
              <h3 className="text-xl font-bold rounded-lg">
                Skills Details :{" "}
              </h3>
              <div className="grid xl:grid-cols-5 lg:grid-col-4 md:grid-cols-3 grid-cols-2 gap-2">
                {resumeDetails.skills.map((item, index) => {
                  return (
                    <div
                      className="border p-2 mt-3 flex justify-center items-center rounded-md"
                      key={index}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <div className="bg-gray-100 max-h-[800px] xl:max-h-none xl:h-[99%] min-w-[340px] sm:w-[95%] md:w-[90%] xl:w-[40%] p-2 md:p-5 lg:p-10 rounded-b-lg xl:rounded-bl-none xl:rounded-r-lg shadow-2xl shadow-black">
          <textarea
            name=""
            id=""
            placeholder="Paste the Job Description Here ...."
            className="h-[90%] w-[97%] resize-none border outline-none text-xl min-h-[400px] p-2 md:p-5 lg:p-10 rounded-md"
            onChange={handleChange}
          ></textarea>
          <button
            className="pl-10 pr-10 p-3 mt-5 text-xl font-bold cursor-pointer rounded-lg bg-blue-500 text-white"
            onClick={handleGenerateResume}
          >
            Generate
          </button>
        </div>
      </div>
    </>
  );
};

export default GenerateResumeForm;