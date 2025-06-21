import React, { useEffect, useState } from "react";

const Experience = ({experienceDetails , setExperienceDetails , index , setSaveToBackend}) => {

  // console.log("experience Details are : " , experienceDetails)

  const [showSaveBtn , setShowSaveBtn] = useState(false);

  const [userExperienceDetails , setUserExperienceDetails] = useState({
    companyName:'',
    role:'',
    joiningDate:"",
    leavingDate:"",
    briefPoints:[],
  });

  useEffect(()=>{

    if(experienceDetails){

      // console.log(experienceDetails.companyName);
      setUserExperienceDetails({
        companyName: experienceDetails.companyName || '',
        role: experienceDetails.role,
        joiningDate:new Date (experienceDetails.joiningDate).toISOString().split('T')[0] || "",
        leavingDate:new Date(experienceDetails.leavingDate).toISOString().split('T')[0] ||"",
        briefPoints: experienceDetails.briefPoints || []
      })
    }
  } , [experienceDetails])

  // console.log("user experience details i : " , userExperienceDetails);

  const handleChange = (e) => {
    const {name , value} = e.target;

    setUserExperienceDetails((prev)=>({
      ...prev,
      [name]:value,
    }));

    setShowSaveBtn(true);
  }

  const handleSaveChanges = (e) => {
    setShowSaveBtn(false);
    setSaveToBackend(true);
    setExperienceDetails((prev) => {
      const updatedExperienceArray = [...prev.experience];
      updatedExperienceArray[index] = userExperienceDetails;
  
      return {
        ...prev,
        experience: updatedExperienceArray,
      };
    });
  }

  

  const handleBriefPointsChange = (e , ind) => {
    const updatedBriefPoints = [...userExperienceDetails.briefPoints];
    updatedBriefPoints[ind] = e.target.value;

    setUserExperienceDetails((prev)=>({
      ...prev,
      briefPoints:updatedBriefPoints,
    }));

    setShowSaveBtn(true);
  }


  return (
    <>
      <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-5 w-full border border-indigo-300 shadow-md rounded-xl mt-5">
        <h2 className="text-2xl font-bold inline-block text-indigo-900">Experience</h2>
        <button className={`p-2 pl-5 pr-5 bg-gradient-to-r from-indigo-500 to-purple-500 font-bold text-white cursor-pointer rounded-md ml-5 ${showSaveBtn ? "inline-block" : "hidden"}`} onClick={handleSaveChanges}>
          Save Changes
        </button>
        <div className="mt-3">
          <div className="flex justify-around items-center text-xl w-[100%] flex-wrap">

            <div className="flex items-center w-[100%] mt-5">
              <span className="text-xl mr-3 xl:mr-5 text-indigo-800">CompanyName:</span>
              <div className="w-[100%]">
                <input
                  type="text"
                  value={userExperienceDetails.companyName}
                  name="companyName"
                  placeholder="Enter Your Company Name"
                  className="bg-white p-2 pl-5 pr-5 rounded-xl outline-none w-full text-gray-900"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex items-center w-[100%] mt-5">
              <span className="text-xl mr-3 xl:mr-5 text-indigo-800">Role:</span>
              <div className="w-[100%]">
                <input
                  type="text"
                  value={userExperienceDetails.role}
                  name="role"
                  placeholder="Enter Your Job Profile"
                  className="bg-white p-2 pl-5 pr-5 rounded-xl outline-none w-full text-gray-900"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="w-full mt-5 flex justify-around items-center flex-wrap">
              <div className="flex items-center w-[100%]">
                <span className="text-xl mr-3 xl:mr-5 text-indigo-800">JoinDate:</span>
                <div className="w-[100%]">
                  <input
                    type="text"
                    value={userExperienceDetails.joiningDate}
                    name="joiningDate"
                    placeholder="Enter Your Joining Date"
                    className="bg-white p-2 pl-5 pr-5 rounded-xl outline-none w-full text-gray-900"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex items-center w-[100%] mt-5">
                <span className="text-xl mr-3 xl:mr-5 text-indigo-800">LeavingDate:</span>
                <div className="w-[100%]">
                  <input
                    type="text"
                    value={userExperienceDetails.leavingDate}
                    name="leavingDate"
                    placeholder="Enter Your Leaving Date"
                    className="bg-white p-2 pl-5 pr-5 rounded-xl outline-none w-full text-gray-900"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="w-full mt-5">
              <h1 className="block text-indigo-900 font-semibold">Brifely About Your Work:</h1>

              <textarea
                name="briefPoints[0]"
                value={userExperienceDetails.briefPoints[0] || ""}
                className="w-[100%] mt-6 bg-gradient-to-br from-indigo-100 to-purple-100 h-[100px] resize-none p-5 rounded-xl no-scrollbar placeholder-gray-700 text-gray-900"
                placeholder="Tell us what you’ve worked on and learned"
                onChange={(e) => handleBriefPointsChange(e, 0)}
              ></textarea>

              <textarea
                name="briefPoints[0]"
                value={userExperienceDetails.briefPoints[1] || ""}
                className="w-[100%] mt-6 bg-gradient-to-br from-indigo-100 to-purple-100 h-[100px] resize-none p-5 rounded-xl no-scrollbar placeholder-gray-700 text-gray-900"
                placeholder="Tell us what you’ve worked on and learned"
                onChange={(e) => handleBriefPointsChange(e, 1)}
              ></textarea>

              <textarea
                name="briefPoints[0]"
                value={userExperienceDetails.briefPoints[2] || ""}
                className="w-[100%] mt-6 bg-gradient-to-br from-indigo-100 to-purple-100 h-[100px] resize-none p-5 rounded-xl no-scrollbar placeholder-gray-700 text-gray-900"
                placeholder="Tell us what you have worked on and learned"
                onChange={(e) => handleBriefPointsChange(e, 2)}
              ></textarea>

              <textarea
                name="briefPoints[0]"
                value={userExperienceDetails.briefPoints[3] || ""}
                className="w-[100%] mt-6 bg-gradient-to-br from-indigo-100 to-purple-100 h-[100px] resize-none p-5 rounded-xl no-scrollbar placeholder-gray-700 text-gray-900"
                placeholder="Tell us what you have worked on and learned"
                onChange={(e) => handleBriefPointsChange(e, 3)}
              ></textarea>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Experience