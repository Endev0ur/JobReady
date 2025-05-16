import React, { useEffect, useState } from 'react'

const Skills = ({skillsDetails , setSkillsDetails , setSaveToBackend}) => {

  const [userSkills , setUserSkills] = useState([]);

  const [addNewSkill , setAddNewSkill] = useState("");

  const [showSaveBtn , setShowSaveBtn] = useState(false);

  useEffect(()=>{
    if(skillsDetails){
      setUserSkills(skillsDetails);
    }
  } , [skillsDetails])

  const handleNewSkillChange = (e) => {
    const {value} = e.target;

    setAddNewSkill(value);

    if(value===""){
      setShowSaveBtn(false);
    }else{
      setShowSaveBtn(true);
    }
  }

  const handleAddNewSkill = (e) => {

    e.preventDefault();

    if(addNewSkill==="")
    {
      alert("write something");
      return;
    }

    const skillsArray = [...userSkills];

    skillsArray.push(addNewSkill);

    setUserSkills(skillsArray);

    setAddNewSkill("");

    setShowSaveBtn(true);

  }

  const handleDeleteSkill = (e) => {

    e.preventDefault();

    const index = e.target.parentElement.id;

    // console.log("index is in skills : " , index);

    const skillsArray = [...userSkills];

    const newSkillsArray = skillsArray.filter((item , ind) => {
      return ind!=index;
    })

    setUserSkills(newSkillsArray);

    setShowSaveBtn(true);

  }

  const handleSaveChanges = (e) => {

    setShowSaveBtn(false);
    setSaveToBackend(true);
    setSkillsDetails((prev)=>({
      ...prev,
      skills:userSkills,
    }))

  }




  return (
    <>
      <div className="bg-gray-300 p-5 width-[100%] border rounded-2xl mt-10">
          <h2 className="text-2xl font-bold inline-block">Skills</h2>
          <button className={`border p-2 pl-5 pr-5 rounded-md ml-5 ${showSaveBtn ? "inline-block" : "hidden"}`} onClick={handleSaveChanges}>Save Changes</button>
          <div className="mt-3">
            <div className="flex justify-around items-center text-xl font-bold w-[100%]  flex-wrap">
            <div className="w-[100%] grid grid-cols-5">
                  {userSkills.map((item , index)=> {
                    return <div key={index} id={index} className="border m-2 flex justify-between items-center relative rounded-lg p-5">
                      {index+1}. {item}
                      <button className=" h-[100%] w-[20%] absolute right-0 flex justify-center items-center bg-red-500 rounded-r-lg cursor-pointer text-white" onClick={handleDeleteSkill}>
                        X
                      </button>
                    </div>
                  })} 
                </div>

                <div className="flex w-[50%] h-[50px] items-center mt-5 border">
                  <input className="m-2 border w-[70%] h-[100%]" onChange={handleNewSkillChange} value={addNewSkill}/>
                  <button className="border w-[25%] h-[100%]"
                  onClick={handleAddNewSkill}>ADD</button>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Skills;