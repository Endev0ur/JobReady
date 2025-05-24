import React, { useEffect, useState } from "react";

const Achievement = ({achievementDetails , setAchievementsDetails , setSaveToBackend}) => {

  // console.log("he he he h eh ehehehe ehhe e" , achievementDetails);

  const [userAchievementDetails , setUserAchievementDetails] = useState([]);

  const [addNewAchievement , setAddNewAchievement] = useState("");

  const [showSaveBtn , setShowSaveBtn] = useState(false);
  
  useEffect(()=>{
    if(achievementDetails){
      setUserAchievementDetails(achievementDetails);
    }
  } , [achievementDetails])

  // console.log("achievements are : " , userAchievementDetails);

  const handleNewAchievementChange = (e) => {
    const {value} = e.target;

    setAddNewAchievement(value);

    if(value===""){
      setShowSaveBtn(false);
    }else{
      setShowSaveBtn(true);
    }
    
  }

  const handleAddNewAchievement = (e) => {
    e.preventDefault();

    // console.log("new achievemtn si : " , addNewAchievement);

    if(addNewAchievement===""){
      alert("write something")
      return;
    }

    const achievementArray = [...userAchievementDetails];

    achievementArray.push(addNewAchievement);

    setUserAchievementDetails(achievementArray);

    setAddNewAchievement("");

    setShowSaveBtn(true);

  }

  const handleDeleteAchievement = (e) => {

    e.preventDefault();

    const index = e.target.parentElement.id;

    const achievementArray = [...userAchievementDetails];

    const updatedAchievementArray = achievementArray.filter((item , ind)=>{
      return ind!=index;
    })

    setUserAchievementDetails(updatedAchievementArray);

    setShowSaveBtn(true);

  }

  const handleSaveChanges = (e) => {

    setShowSaveBtn(false);
    setSaveToBackend(true);
    setAchievementsDetails((prev)=>({
      ...prev,
      achievements:userAchievementDetails,
    }))

  }

  return (
    <>
      <div className="bg-gray-300 p-5 width-[100%] border rounded-xl mt-10">
          <h2 className="text-2xl font-bold inline-block">Achievements (Optional)</h2>
          <button className={`p-2 pl-5 pr-5 bg-blue-500 text-white font-bold cursor-pointer rounded-md ml-5 ${showSaveBtn ? "inline-block" : "hidden"}`} onClick={handleSaveChanges}>Save Changes</button>
          <div className="mt-3">
            <div className="flex justify-around items-center text-xl font-bold w-[100%]  flex-wrap">
              <div className=" w-full mt-5">
                <h1 className="block">Describe Your Achievements : </h1>

                <div className="w-[100%] grid grid-cols-1">
                  {userAchievementDetails.map((item , index)=> {
                    return <div key={index} id={index} className="border m-2 flex justify-between items-center relative rounded-lg p-5">
                      <div className="w-[80%] whitespace-nowrap pr-5 overflow-x-scroll no-scrollbar">
                      {index+1}. {item}
                      </div>
                      <button className=" h-[100%] w-[20%] absolute right-0 flex justify-center items-center bg-red-500 rounded-r-lg cursor-pointer text-white" onClick={handleDeleteAchievement}>
                        X
                      </button>
                    </div>
                  })} 
                </div>

                <div className="flex w-[100%] xl:w-[50%] h-[50px] items-center mt-5 ">
                  <input className="m-2 border w-[70%] h-[100%] rounded-lg pl-5 pr-5" placeholder="Enter the Achievement you want to add" onChange={handleNewAchievementChange} value={addNewAchievement}/>
                  <button className="border-2 w-[25%] h-[100%] font-bold bg-green-500 rounded-lg cursor-pointer" type="submit"
                  onClick={handleAddNewAchievement}>ADD</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Achievement;