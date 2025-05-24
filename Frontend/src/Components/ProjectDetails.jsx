
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

      <div className="bg-gray-300 p-5 width-[100%] border rounded-2xl mt-10">
          <h2 className="text-2xl font-bold inline-bold inline-block">Project Details : </h2>
          <button className={` p-2 pl-5 pr-5 bg-blue-500 font-bold text-white cursor-pointer rounded-md ml-5 ${showSaveBtn ? "inline-block" : "hidden"}`} onClick={handleSaveChanges}>Save Changes</button>
          {/* <button className="border p-2 rounded-lg ml-3" onClick={handleDeleteProject}>Delete This Project</button> */}
          <div className="mt-3">
            <div className="flex justify-around items-center text-xl font-bold w-[100%]  flex-wrap">
              <div className=" w-full">
                <span className="text-xl">Name of the Project : </span>
                <input
                  type="text"
                  value={userProjectDetails.projectName}
                  name="projectName"
                  placeholder="Enter the Project name"
                  className="bg-white p-2  pl-5 pr-5 mt-2 xl:mt-0 rounded-xl outline-none ml-5 w-[75%]"
                  onChange={handleChange}
                />
              </div>

              <textarea
                name="projectDescription"
                id=""
                value={userProjectDetails.projectDescription}
                className="w-[100%] mt-6 bg-gray-500 h-[100px] resize-none p-5 rounded-xl no-scrollbar"
                placeholder="Write Something about project "
                onChange={handleChange}
              ></textarea>

              <div className=" w-full mt-5">
                <span className="text-xl">Tech Stack Used : </span>
                <div className="w-[100%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {userProjectDetails.techStack.map((item , index)=> {
                    return <div key={index} id={index} className="border m-2 pr-[5%] pl-[10%] flex justify-between items-center relative rounded-lg">
                      <div className="whitespace-nowrap w-[80%] overflow-x-scroll h-[100%] no-scrollbar p-2">
                      {item}  
                      </div>
                      
                      <button className=" h-[100%] w-[20%] absolute right-0 flex justify-center items-center bg-red-500 rounded-r-lg cursor-pointer " onClick={(e)=>handleDeleteTechStack(e , index)}>
                        <RxCross2 className="text-white"></RxCross2>
                      </button>
                    </div>
                  })} 
                </div>

                <form className="flex w-[100%] xl:w-[50%] h-[50px] items-center mt-5" onSubmit={handleAddTechStack}>
                  <input className="m-2 border-2 w-[70%] h-[100%] pl-3 pr-3 outline-none rounded-xl bg-white" placeholder="Enter the stack you want to add" name="addSkills" onChange={handleTechStackChange} value={addNewTechStack}/>
                  <button className="border-3 w-[25%] h-[100%] rounded-xl font-bold bg-green-500 cursor-pointer"
                  type="submit">ADD</button>
                </form>
                
              </div>




              <div className=" w-full mt-5 flex justify-around items-center flex-wrap">
              <div className="w-full">
                <h1 className="text-2xl mb-2">Links : </h1>
                <span className="text-xl">Github : </span>
                <input
                  type="text"
                  name="github"
                  value={userProjectDetails.github}
                  className="bg-white p-2 pl-5 rounded-xl outline-none ml-2 xl:ml-5 w-[67%]"
                  placeholder="Project Github Link"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <span className="text-xl">Deployed : </span>
                <input
                  type="text"
                  name = "deployed"
                  value={userProjectDetails.deployed}
                  className="bg-white p-2 pl-5 rounded-xl outline-none ml-2 mt-3 xl:ml-5 w-[58%] "
                  placeholder="Project Deployed Link"
                  onChange={handleChange}
                />
              </div>
            </div>

              <div className=" w-full mt-5">
                <h1 className="block">Brifely About Project (in 4 Points) : </h1>
                <textarea
                name="briefPoints[0]"
                value={userProjectDetails.briefPoints[0]}
                className="w-[100%] mt-6 bg-gray-500 h-[100px] resize-none p-5 rounded-xl no-scrollbar placeholder-gray-900"
                placeholder="Point No. 1 : "
                onChange={(e)=>handleBriefPointsChange(e , 0)}
              ></textarea>

              <textarea
                name="briefPoints[1]"
                value={userProjectDetails.briefPoints[1]}
                className="w-[100%] mt-6 bg-gray-500 h-[100px] resize-none p-5 rounded-xl no-scrollbar placeholder-gray-900"
                placeholder="Point No. 2 : "
                onChange={(e)=>handleBriefPointsChange(e , 1)}
              ></textarea>

              <textarea
                name="briefPoints[2]"
                value={userProjectDetails.briefPoints[2]}
                className="w-[100%] mt-6 bg-gray-500 h-[100px] resize-none p-5 rounded-xl no-scrollbar placeholder-gray-900"
                placeholder="Point No. 3 : "
                onChange={(e)=>handleBriefPointsChange(e , 2)}
              ></textarea>

              <textarea
                name="briefPoints[3]"
                value={userProjectDetails.briefPoints[3]}
                className="w-[100%] mt-6 bg-gray-500 h-[100px] resize-none p-5 rounded-xl no-scrollbar placeholder-gray-900"
                placeholder="Point No. 4 : "
                onChange={(e)=>handleBriefPointsChange(e , 3)}
              ></textarea>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ProjectDetails