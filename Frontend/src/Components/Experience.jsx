import React, { useEffect, useState } from "react";

const Experience = ({experienceDetails , setExperienceDetails , index , setSaveToBackend}) => {

  console.log("experience Details are : " , experienceDetails)

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

  console.log("user experience details i : " , userExperienceDetails);

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
      <div className="bg-gray-300 p-5 width-[100%] border rounded-xl mt-10">
          <h2 className="text-2xl font-bold inline-block">Experience</h2>
          <button className={` p-2 pl-5 pr-5 bg-blue-500 font-bold text-white cursor-pointer rounded-md ml-5 ${showSaveBtn ? "inline-block" : "hidden"}`} onClick={handleSaveChanges}>Save Changes</button>
          <div className="mt-3">
            <div className="flex justify-around items-center text-xl font-bold w-[100%]  flex-wrap">
              <div className=" w-full">
                <span className="text-xl">Company Name : </span>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Enter the Company Name"
                  value={userExperienceDetails.companyName}
                  className="bg-white p-2  pl-5 pr-5 rounded-xl outline-none ml-5 mt-2 xl:mt-0 w-[80%]"
                  onChange={handleChange}
                />
              </div>

              <div className=" w-full mt-5">
                <span className="text-xl">Role : </span>
                <input
                  type="text"
                  name="role"
                  value={userExperienceDetails.role}
                  placeholder="Enter your Job Profile"
                  className="bg-white p-2  pl-5 pr-5 rounded-xl outline-none ml-2 xl:ml-5 w-[75%]"
                  onChange={handleChange}
                />
              </div>

              <div className=" w-full mt-5 flex justify-around items-center flex-wrap">
                <div className="w-full">
                  <span className="text-xl">Joining Date : </span>
                  <input
                    type="date"
                    name="joiningDate"
                    value={userExperienceDetails.joiningDate}
                    className="bg-white p-2 rounded-xl outline-none ml-2 xl:ml-5 w-[45%]"
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <span className="text-xl">Leaving Date : </span>
                  <input
                    type="date"
                    name="leavingDate"
                    value={userExperienceDetails.leavingDate}
                    className="bg-white p-2 rounded-xl outline-noneml-2 mt-3 xl:ml-5 w-[45%]"
                    onChange={handleChange}
                  />
                </div>

              </div>

              <div className=" w-full mt-5">
                <h1 className="block">Brifely About Project (pointwize) : </h1>

                <textarea 
                  name="briefPoints[0]"
                  value={userExperienceDetails.briefPoints[0] || ""}
                  className="w-[100%] mt-6 bg-gray-500 h-[100px] resize-none p-5 rounded-xl no-scrollbar placeholder-gray-900"
                  placeholder="Tell us what you’ve worked on and learned "
                  onChange={(e)=>handleBriefPointsChange(e , 0)}
                ></textarea>

                <textarea 
                  name="briefPoints[0]"
                  value={userExperienceDetails.briefPoints[1] || ""}
                  className="w-[100%] mt-6 bg-gray-500 h-[100px] resize-none p-5 rounded-xl no-scrollbar placeholder-gray-900"
                  placeholder="Tell us what you’ve worked on and learned"
                  onChange={(e)=>handleBriefPointsChange(e , 1)}
                ></textarea>

                <textarea 
                  name="briefPoints[0]"
                  value={userExperienceDetails.briefPoints[2] || ""}
                  className="w-[100%] mt-6 bg-gray-500 h-[100px] resize-none p-5 rounded-xl no-scrollbar placeholder-gray-900"
                  placeholder="Tell us what you have worked on and learned"
                  onChange={(e)=>handleBriefPointsChange(e , 2)}
                ></textarea>

                <textarea 
                  name="briefPoints[0]"
                  value={userExperienceDetails.briefPoints[3] || ""}
                  className="w-[100%] mt-6 bg-gray-500 h-[100px] resize-none p-5 rounded-xl no-scrollbar placeholder-gray-900"
                  placeholder="Tell us what you  have worked on and learned"
                  onChange={(e)=>handleBriefPointsChange(e , 3)}
                ></textarea>
                

              </div>

            
              
    
            </div>
          </div>
        </div>
    </>
  )
}

export default Experience