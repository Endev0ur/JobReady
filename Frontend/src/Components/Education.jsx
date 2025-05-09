import React , {useState , useEffect} from 'react'

const Education = ({educationDetails , setEducationDetails}) => {

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
  console.log("user education details sins : " , userEducationDetails);
  
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
  }

  return (
    <>
      <div className="bg-gray-300 p-5 width-[100%] border rounded-2xl mt-10">
          <h2 className="text-2xl font-bold inline-block">Education Qualification</h2>
          <button className={`border p-2 pl-5 pr-5 rounded-md ml-5 ${showSaveBtn ? "inline-block" : "hidden"}`} onClick={handleSaveChanges}>Save Changes</button>
          <form className="mt-3">
            <div className="flex justify-around items-center text-xl font-bold w-[100%]  flex-wrap">
              <div className=" w-full">
                <span className="text-xl">College : </span>
                <input
                  type="text"
                  name='collegeName'
                  value={userEducationDetails.collegeName}
                  className="bg-white p-2  pl-5 pr-5 rounded-xl outline-none ml-5 w-[90%]"
                  onChange={handleChange}
                />
              </div>

              <div className=" w-full mt-5 flex justify-around items-center">
                <div className="w-full">
                  <span className="text-xl">City : </span>
                  <input
                    type="text"
                    name='city'
                    value={userEducationDetails.city}
                    className="bg-white p-2 rounded-xl outline-none ml-1 w-[75%]"
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <span className="text-xl">Course : </span>
                  <input
                    type="text"
                    name='course'
                    value={userEducationDetails.course}
                    className="bg-white p-2 rounded-xl outline-none ml-1 w-[75%]"
                    onChange={handleChange}
                  />
                </div>

                <div className="w-full">
                  <span className="text-xl">branch : </span>
                  <input
                    type="text"
                    name='branch'
                    value={userEducationDetails.branch}
                    className="bg-white p-2 rounded-xl outline-none ml-1 w-[60%]"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className=" w-full mt-5 flex justify-around items-center">

                <div className="w-full">
                    <span className="text-xl">backlogs : </span>
                    <input
                      type="text"
                      name='backlogs'
                      value={educationDetails.backlogs}
                      className="bg-white p-2 rounded-xl outline-none ml-1 w-[50%]"
                      onChange={handleChange}
                    />
                  </div>

                <div className="w-full">
                  <span className="text-xl">Current Sem CGPA : </span>
                  <input
                    type="text"
                    name='currentSemGPA'
                    value={userEducationDetails.currentSemGPA}
                    className="bg-white p-2 rounded-xl outline-none ml-1 w-[50%]"
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <span className="text-xl">Overall CGPA: </span>
                  <input
                    type="text"
                    name='overallGPA'
                    value={userEducationDetails.overallGPA}
                    className="bg-white p-2 rounded-xl outline-none ml-1 w-[50%]"
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