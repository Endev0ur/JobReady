
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const ProjectDetails = ({ projectDetails , setProjectDetails , index , setSaveToBackend}) => {

  // console.log("project details are " , projectDetails);
  const [addNewTechStack , setAddNewTechStack] = useState("");

  // console.log(projectDetails)
  const [userProjectDetails , setUserProjectDetails] = useState({
    projectName:"",
    projectDescription:"",
    techStack:[],
    github:"",
    deployed:"",
    briefPoints:[],
  });

  const [showSaveBtn , setShowSaveBtn] = useState(false);

  useEffect(() => {
    if (projectDetails) {
      setUserProjectDetails({
        projectName: projectDetails.projectName || '',
        projectDescription: projectDetails.projectDescription || '',
        techStack: projectDetails.techStack || [],
        github: projectDetails.github || "",
        deployed:projectDetails.deployed || "",
        briefPoints: projectDetails.briefPoints || [],
      });
    }
  }, [projectDetails]);

  // console.log("projectdetails are : " , userProjectDetails);

  // let techStackArray;

  const handleChange = (e) => {

    const {name , value} = e.target;

    setUserProjectDetails((prev)=>({
      ...prev,
      [name]:value,
    }))

    setShowSaveBtn(true);

  }

  const handleBriefPointsChange = (e , index) => {
    const updatedBriefPoints = [...userProjectDetails.briefPoints];
    updatedBriefPoints[index] = e.target.value;

    setUserProjectDetails((prev)=>({
      ...prev,
      briefPoints:updatedBriefPoints,
    }));

    setShowSaveBtn(true);
  }

  

  const handleSaveChanges = () => {
    setShowSaveBtn(false);
    setSaveToBackend(true);
    setProjectDetails((prev) => {
      const updatedProjectArray = [...prev.project];
      updatedProjectArray[index] = userProjectDetails;
  
      return {
        ...prev,
        project: updatedProjectArray,
      };
    });

    
  }

  const handleTechStackChange = (e) => {
    const { value} = e.target;

    setAddNewTechStack(value);
    // console.log("Add new Tech Stack si : " , addNewTechStack);

  }
  const handleAddTechStack = (e) => {
    e.preventDefault();
    setShowSaveBtn(true);
  
    const value = addNewTechStack.trim();
  
    if (value === "") {
      alert("At least write something");
      return;
    }
  
    const techStackArray = [...userProjectDetails.techStack];
    const alreadyExists = techStackArray.includes(value);
  
    if (!alreadyExists) {
      techStackArray.push(value);
  
      setUserProjectDetails((prev) => ({
        ...prev,
        techStack: techStackArray,
      }));
  
      setAddNewTechStack(""); // Clear input after adding
    } else {
      console.log("It is already present, skipping...");
    }
  };
  

  const handleDeleteTechStack = (e, index) => {
    e.preventDefault();
    setShowSaveBtn(true);
  
    const updatedTechStackArray = userProjectDetails.techStack.filter(
      (item, ind) => ind !== index
    );
  
    setUserProjectDetails((prev) => ({
      ...prev,
      techStack: updatedTechStackArray,
    }));
  };
  



  return (
    <>
    {/* Project Details */}

      <div className="bg-gradient-to-br from-[#b1bfff] to-[#cad5ff] p-5 w-full border rounded-2xl mt-10">
        <h2 className="text-2xl font-bold inline-block text-indigo-800">Project Details :</h2>
        <button className={`p-2 px-5 bg-blue-600 font-bold text-white cursor-pointer rounded-md ml-5 ${showSaveBtn ? "inline-block" : "hidden"}`} onClick={handleSaveChanges}>
          Save Changes
        </button>

        <div className="mt-3">
          <div className="flex flex-wrap justify-around items-center text-xl w-full">
            <div className="flex items-center w-full">
              <span className="text-xl mr-5 text-indigo-700">ProjectName:</span>
              <input
                type="text"
                value={userProjectDetails.projectName}
                name="projectName"
                placeholder="Enter Your projectName"
                className="bg-white p-2 px-5 rounded-xl outline-none w-full"
                onChange={handleChange}
              />
            </div>

            <textarea
              name="projectDescription"
              value={userProjectDetails.projectDescription}
              className="w-full mt-6 bg-slate-100 h-[100px] resize-none p-5 rounded-xl no-scrollbar"
              placeholder="Write Something about project"
              onChange={handleChange}
            ></textarea>

            <div className="w-full mt-5">
              <span className="text-xl font-bold text-indigo-800">Tech Stack Used:</span>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {userProjectDetails.techStack.map((item, index) => (
                  <div key={index} className="border m-2 pr-[5%] pl-[10%] flex justify-between items-center relative rounded-lg border-purple-200 bg-white">
                    <div className="whitespace-nowrap w-[80%] overflow-x-scroll no-scrollbar p-2 ">{item}</div>
                    <button
                      className="absolute right-0 w-[20%] h-[100%] flex justify-center items-center bg-red-500 rounded-r-lg cursor-pointer "
                      onClick={(e) => handleDeleteTechStack(e, index)}
                    >
                      <RxCross2 className="text-white" />
                    </button>
                  </div>
                ))}
              </div>

              <form className="flex flex-wrap w-full xl:w-1/2 h-[50px] items-center mt-5" onSubmit={handleAddTechStack}>
                <input
                  className="m-2 border-2 w-[70%] h-full pl-3 pr-3 outline-none rounded-xl bg-white"
                  placeholder="Enter the stack you want to add"
                  name="addSkills"
                  onChange={handleTechStackChange}
                  value={addNewTechStack}
                />
                <button className="w-[25%] h-full rounded-xl font-bold bg-green-600 text-white cursor-pointer" type="submit">
                  ADD
                </button>
              </form>
            </div>

            <div className="w-full mt-5">
              <h1 className="text-2xl mb-2 font-bold text-indigo-800">Links:</h1>
              <div className="flex items-center w-full">
                <span className="text-xl mr-5 text-indigo-700">Github:</span>
                <input
                  type="text"
                  value={userProjectDetails.github}
                  name="github"
                  placeholder="Project Github Link"
                  className="bg-white p-2 px-5 rounded-xl outline-none w-full"
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center w-full mt-5">
                <span className="text-xl mr-5 text-indigo-700">Deployed:</span>
                <input
                  type="text"
                  value={userProjectDetails.deployed}
                  name="deployed"
                  placeholder="Project Deployed Link"
                  className="bg-white p-2 px-5 rounded-xl outline-none w-full"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="w-full mt-5">
              <h1 className="font-bold text-indigo-800">Briefly About Project:</h1>
              {[0, 1, 2, 3].map((i) => (
                <textarea
                  key={i}
                  name={`briefPoints[${i}]`}
                  value={userProjectDetails.briefPoints[i] || ""}
                  className="w-full mt-6 bg-slate-100 h-[100px] resize-none p-5 rounded-xl no-scrollbar placeholder-gray-900"
                  placeholder={`Point No. ${i + 1} : `}
                  onChange={(e) => handleBriefPointsChange(e, i)}
                ></textarea>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectDetails