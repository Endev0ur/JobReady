import React , {useState , useEffect} from 'react'

const Education = ({educationDetails , setEducationDetails , setSaveToBackend}) => {

  // console.log(educationDetails);

  const [userEducationDetails , setUserEducationDetails] = useState({
    collegeName:"",
    city:"",
    course:"",
    branch:"",
    backlogs:0,
    startDate:"",
    endDate:"",
    currentSemGPA:"",
    overallGPA:""
  });

  const [showSaveBtn , setShowSaveBtn] = useState(false);

  useEffect(() => {
    if (educationDetails) {
      setUserEducationDetails({
        collegeName: educationDetails.collegeName || '',
        city: educationDetails.city || '',
        course: educationDetails.course || '',
        branch: educationDetails.branch || '',
        backlogs: educationDetails.backlogs || 0,
        startDate:educationDetails.startDate||'',
        endDate: educationDetails.endDate || '',
        currentSemGPA: educationDetails.currentSemGPA || '',
        overallGPA: educationDetails.overallGPA || '',
      });
    }
  }, [educationDetails]);
  // console.log("user education details sins : " , userEducationDetails);
  
  console.log("basic education Details are : " , educationDetails);

  const handleChange = (e) => {

    const {name , value} = e.target;

    setUserEducationDetails((prev)=>({
      ...prev,
      [name]:value,
    }))

    setShowSaveBtn(true);

  }

  const handleSaveChanges = () => {
    setEducationDetails((prev)=>({
      ...prev,
      education:userEducationDetails,
    }))

    setShowSaveBtn(false);
    setSaveToBackend(true);
  }

  return (
    <>
      <div className="bg-gray-300 p-5 width-[100%] border rounded-xl mt-10">
          <h2 className="text-2xl font-bold inline-block">Education Qualification</h2>
          <button className={` p-2 pl-5 pr-5 bg-blue-500 cursor-pointer font-bold text-white rounded-md ml-5 ${showSaveBtn ? "inline-block" : "hidden"}`} onClick={handleSaveChanges}>Save Changes</button>
          <form className="mt-3">
            <div className="flex justify-around items-center text-xl font-bold w-[100%]  flex-wrap">
              <div className=" w-full">
                <span className="text-xl">College : </span>
                <input
                  type="text"
                  name='collegeName'
                  value={userEducationDetails.collegeName}
                  placeholder='Enter your college name'
                  className="bg-white p-2 xl:pl-5 xl:pr-5 rounded-xl outline-none ml-2 xl:ml-5 w-[64%]"
                  onChange={handleChange}
                />
              </div>

              <div className=" w-full mt-5 flex justify-around items-center flex-wrap">
                <div className="w-full">
                  <span className="text-xl">City : </span>
                  <input
                    type="text"
                    name='city'
                    value={userEducationDetails.city}
                    placeholder='Enter the city'
                    className="bg-white p-2 rounded-xl outline-none ml-2 xl:ml-5 w-[77%]"
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <span className="text-xl">Course : </span>
                  <input
                    type="text"
                    name='course'
                    value={userEducationDetails.course}
                    placeholder='Course name'
                    className="bg-white p-2 rounded-xl outline-none ml-2 mt-3 xl:ml-5 w-[67%]"
                    onChange={handleChange}
                  />
                </div>

                <div className="w-full">
                  <span className="text-xl">Branch : </span>
                  <input
                    type="text"
                    name='branch'
                    value={userEducationDetails.branch}
                    placeholder='Branch name'
                    className="bg-white p-2 rounded-xl outline-none ml-2 mt-3 xl:ml-5 w-[67%]"
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <span className="text-xl">Start Year : </span>
                  <input
                    type="text"
                    name='startDate'
                    value={userEducationDetails.startDate}
                    placeholder='Branch name'
                    className="bg-white p-2 rounded-xl outline-none ml-2 mt-3 xl:ml-5 w-[67%]"
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <span className="text-xl">End Year : </span>
                  <input
                    type="text"
                    name='endDate'
                    value={userEducationDetails.endDate}
                    placeholder='Branch name'
                    className="bg-white p-2 rounded-xl outline-none ml-2 mt-3 xl:ml-5 w-[67%]"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className=" w-full mt-5 flex justify-around items-center flex-wrap">
                <div className="w-full">
                    <span className="text-xl">backlogs : </span>
                    <input
                      type="text"
                      name='backlogs'
                      value={educationDetails.backlogs || 0}
                      placeholder='Backlogs'
                      className="bg-white p-2 rounded-xl outline-none ml-2 xl:ml-5 w-[59%]"
                      onChange={handleChange}
                    />
                  </div>

                <div className="w-full">
                  <span className="text-xl">CurrentSem GPA : </span>
                  <input
                    type="text"
                    name='currentSemGPA'
                    value={userEducationDetails.currentSemGPA}
                    placeholder='Enter your currentSem GPA'
                    className="bg-white p-2 rounded-xl outline-none ml-2 mt-3 xl:ml-5 w-[32%]"
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <span className="text-xl">Overall GPA: </span>
                  <input
                    type="text"
                    name='overallGPA'
                    value={userEducationDetails.overallGPA}
                    placeholder='Enter your overall GPA'
                    className="bg-white p-2 rounded-xl outline-none ml-2 mt-3 xl:ml-5 w-[50%]"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
    </>
  )
}

export default Education