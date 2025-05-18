import React, { useState , useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';

const GenerateResumeForm = () => {

  const navigateTo = useNavigate();
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
      let url = "http://localhost:3000/profile/get-details";
      const response = await axios.get(url, {
        withCredentials: true,
      });

      console.log(response);
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
    console.log("helow");
    setJobDescription(e.target.value);
    console.log(jobDescription);
  };

  const handleGenerateResume = async (e) => {
    const url = "http://localhost:3000/generate/resume";

    const response = await axios.post(url , jobDescription , {
      withCredentials:true,
    });

    const result = response.data;

    console.log("result is : " , result);

    const {message , success} = result;

    localStorage.setItem("message" , JSON.stringify(message));;
    
    setTimeout(() => {
      navigateTo("/resume");
    }, 100);
  }


  return (
    <>
      <div className="h-screen w-full hidden md:flex items-center justify-center bg-gray-500 p-7">
        <div className='bg-red-500 h-[99%] w-[50%] p-10 overflow-y-scroll'>
          <h1 className='text-4xl font-bold mb-10'>Details : </h1>

          {/* User Details */}
          <div className='border p-2 mb-5'>
            <h3 className='text-xl font-bold'>User Details : </h3>
            <p className='pl-3'><b>Name</b> : {resumeDetails.userDetails.name}</p>
            <p className='pl-3'><b>Email</b> : {resumeDetails.userDetails.email}</p>
            <p className='pl-3'><b>PhoneNo</b> : {resumeDetails.userDetails.phoneNo}</p>
            <p className='pl-3'><b>Linkedin</b> : {resumeDetails.userDetails.linkedIn}</p>
            <p className='pl-3'><b>Github</b> : {resumeDetails.userDetails.github}</p>
          </div>

          {/* Education Details */}
          <div className='border p-2 mb-5'>
            <h3 className='text-xl font-bold'>Education Details : </h3>
            <p className='pl-3'><b>CollgeName</b> : {resumeDetails.education.collegeName}</p>
            <p className='pl-3'><b>City</b> : {resumeDetails.education.city}</p>
            <p className='pl-3'><b>Course</b> : {resumeDetails.education.course}</p>
            <p className='pl-3'><b>Branch</b> : {resumeDetails.education.branch}</p>
            <p className='pl-3'><b>Backlogs</b> : {resumeDetails.education.backlogs}</p>
            <p className='pl-3'><b>CurrentSemGPA</b> : {resumeDetails.education.currentSemGPA}</p>
            <p className='pl-3'><b>Overall GPA</b> : {resumeDetails.education.overallGPA}</p>
          </div>

          {/* Product Details */}
          <div className='border p-2 mb-5'>
            <h3 className='text-xl font-bold'>Project Details : </h3>
            {resumeDetails.project.map((item , index)=>{
              return (
                <div className='border p-2 mt-3' key={index}>
                  <h4 className='text-lg font-bold mb-2'>Project{index+1}</h4>
                  <p className='pl-3'><b>CollgeName</b> : {item.projectName}</p>
                  <p className='pl-3'><b>City</b> : {item.projectDescription}</p>
                  <ul className='pl-3'><b>Course</b> : {item.techStack.map((items , ind)=>{
                    return <li className='pl-10' key={ind}> {items}</li>
                  })}</ul>
                  <p className='pl-3'><b>Branch</b> : {item.github}</p>
                  <p className='pl-3'><b>Backlogs</b> : {item.deployed}</p>
                  <ul className='pl-3'><b>CurrentSemGPA</b> : {item.briefPoints.map((items , ind)=>{
                    return <li className='pl-10' key={ind}> {items} <hr /></li>

                  })}</ul>
                </div>
              )
            })}
          </div>

          {/* Experience */}
          <div className='border p-2 mb-5'>
            <h3 className='text-xl font-bold'>Experience Details : </h3>
            {resumeDetails.experience.map((item , index)=>{
              return (
                <div className='border p-2 mt-3' key={index}>
                  <h4>Experience{index+1}</h4>
                  <p className='pl-3'><b>CollgeName</b> : {item.companyName}</p>
                  <p className='pl-3'><b>City</b> : {item.role}</p>
                  <p className='pl-3'><b>Branch</b> : {new Date (item.joiningDate).toISOString().split('T')[0]}</p>
                  <p className='pl-3'><b>Backlogs</b> : {new Date (item.leavingDate).toISOString().split('T')[0]}</p>
                  <ul className='pl-3'><b>CurrentSemGPA</b> : {item.briefPoints.map((items , ind)=>{
                    return <li className='pl-10' key={ind}> {items} <hr /></li>

                  })}</ul>
                </div>
              )
            })}
          </div>

          {/* Achievements */}
          <div className='border p-2 mb-5'>
            <h3 className='text-xl font-bold'>Achievements Details : </h3>
            {resumeDetails.achievements.map((item , index)=>{
              return (
                <div className='border p-2 mt-3' key={index}>
                  {item}
                </div>
              )
            })}
          </div>

          {/* Skills */}
          <div className='border p-2 mb-5'>
            <h3 className='text-xl font-bold'>Skills Details : </h3>
            <div className='grid grid-cols-5 gap-2'>
              {resumeDetails.skills.map((item , index)=>{
                return (
                  <div className='border p-2 mt-3' key={index}>
                    {item}
                  </div>
                )
              })}
            </div>            
          </div>

        </div>
        <div className='bg-blue-500 h-[99%] w-[40%] p-10'>
          <textarea name="" id="" placeholder='Paste the Job Description Here ....' className='h-[90%] w-[97%] resize-none border outline-none text-xl p-10 rounded-md' onChange={handleChange}></textarea>
          <button className='border pl-10 pr-10 p-3 mt-5 text-xl font-bold cursor-pointer' onClick={handleGenerateResume}>Generate</button>
        </div>
      
      </div>
    </>
    
  )
}

export default GenerateResumeForm