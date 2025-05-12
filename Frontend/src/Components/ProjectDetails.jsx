
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const ProjectDetails = ({ projectDetails , setProjectDetails , index}) => {

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
    const {name , value} = e.target;

    setAddNewTechStack(value);
    // console.log("Add new Tech Stack si : " , addNewTechStack);

  }
  const handleAddTechStack = (e) => {
    e.preventDefault();

    setShowSaveBtn(true);

    if(addNewTechStack===""){
      console.log("Atleast write something");
    }

    const techStackArray = [...userProjectDetails.techStack];
    const findTechStack = techStackArray.find((item)=>{
      return item===addNewTechStack;
    })

    // console.log("findTechStackIs" , findTechStack);
    if(findTechStack===undefined){
      techStackArray.push(addNewTechStack);

      setUserProjectDetails((prev)=>({
        ...prev,
        techStack:techStackArray,
      }));

      // console.log("userProjectDetails techstack is" , userProjectDetails.techStack);

      setAddNewTechStack("");
    }
    else{
      console.log("It is already Present , return ")
    }

  }

  const handleDeleteTechStack = (e) => {

    e.preventDefault();

    setShowSaveBtn(true);

    const index = e.target.parentElement.id;

    // console.log("index is : " , index);

    const techStackArray = [...userProjectDetails.techStack];
    const updatedTechStackArray = techStackArray.filter((item , ind) => {
      return ind!=index;
    })

    // console.log("updatedTechstack is : " , updatedTechStackArray);
    setUserProjectDetails((prev)=>({
      ...prev,
      techStack:updatedTechStackArray,
    }));

    // console.log("userProjectDetails techstack is" , userProjectDetails.techStack);

  }



  return (
    <>
    {/* Project Details */}

      <div className="bg-gray-300 p-5 width-[100%] border rounded-2xl mt-10">
          <h2 className="text-2xl font-bold inline-bold inline-block">Project Details : </h2>
          <button className={`border p-2 pl-5 pr-5 rounded-md ml-5 ${showSaveBtn ? "inline-block" : "hidden"}`} onClick={handleSaveChanges}>Save Changes</button>
          {/* <button className="border p-2 rounded-lg ml-3" onClick={handleDeleteProject}>Delete This Project</button> */}
          <form className="mt-3">
            <div className="flex justify-around items-center text-xl font-bold w-[100%]  flex-wrap">
              <div className=" w-full">
                <span className="text-xl">Name of the Project : </span>
                <input
                  type="text"
                  value={userProjectDetails.projectName}
                  name="projectName"
                  className="bg-white p-2  pl-5 pr-5 rounded-xl outline-none ml-5 w-[75%]"
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
                <div className="w-[100%] grid grid-cols-5">
                  {userProjectDetails.techStack.map((item , index)=> {
                    return <div key={index} id={index} className="border m-2 flex justify-center items-center relative rounded-lg">
                      {item}
                      <button className=" h-[100%] w-[20%] absolute right-0 flex justify-center items-center bg-red-500 rounded-r-lg cursor-pointer" onClick={handleDeleteTechStack}>
                        <RxCross2 className="text-white"></RxCross2>
                      </button>
                    </div>
                  })} 
                </div>

                <div className="flex w-[50%] h-[50px] items-center mt-5 border">
                  <input className="m-2 border w-[70%] h-[100%]" name="addSkills" onChange={handleTechStackChange} value={addNewTechStack}/>
                  <button className="border w-[25%] h-[100%]"
                  onClick={handleAddTechStack}>ADD</button>
                </div>
                
              </div>




              <div className=" w-full mt-5 flex justify-around items-center">
              <div className="w-full">
                <span className="text-xl">Github : </span>
                <input
                  type="text"
                  name="github"
                  value={userProjectDetails.github}
                  className="bg-white p-2 rounded-xl outline-none ml-1 w-[75%]"
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
                  className="bg-white p-2 rounded-xl outline-none ml-1 w-[75%]"
                  placeholder="Project Deployed Link"
                  onChange={handleChange}
                />
              </div>
            </div>

              <div className=" w-full mt-5">
                <h1 className="block">Brifely About Project (pointwize) : </h1>
                <textarea
                name="briefPoints[0]"
                value={userProjectDetails.briefPoints[0]}
                className="w-[100%] mt-6 bg-gray-500 h-[100px] resize-none p-5 rounded-xl no-scrollbar"
                placeholder="Write Something about project "
                onChange={(e)=>handleBriefPointsChange(e , 0)}
              ></textarea>

              <textarea
                name="briefPoints[1]"
                value={userProjectDetails.briefPoints[1]}
                className="w-[100%] mt-6 bg-gray-500 h-[100px] resize-none p-5 rounded-xl no-scrollbar"
                placeholder="Write Something about project "
                onChange={(e)=>handleBriefPointsChange(e , 1)}
              ></textarea>

              <textarea
                name="briefPoints[2]"
                value={userProjectDetails.briefPoints[2]}
                className="w-[100%] mt-6 bg-gray-500 h-[100px] resize-none p-5 rounded-xl no-scrollbar"
                placeholder="Write Something about project "
                onChange={(e)=>handleBriefPointsChange(e , 2)}
              ></textarea>

              <textarea
                name="briefPoints[3]"
                value={userProjectDetails.briefPoints[3]}
                className="w-[100%] mt-6 bg-gray-500 h-[100px] resize-none p-5 rounded-xl no-scrollbar"
                placeholder="Write Something about project "
                onChange={(e)=>handleBriefPointsChange(e , 3)}
              ></textarea>
              </div>
            </div>
          </form>
        </div>
    </>
  )
}

export default ProjectDetails