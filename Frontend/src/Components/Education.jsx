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
  
  // console.log("basic education Details are : " , educationDetails);

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
      <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-6 w-full border border-indigo-300 shadow-md rounded-2xl mt-5">
        <h2 className="text-2xl font-bold text-indigo-800 inline-block">Education Qualification</h2>
        <button
          className={`ml-4 px-5 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-sm transition duration-200 hover:bg-indigo-700 ${showSaveBtn ? "inline-block" : "hidden"}`}
          onClick={handleSaveChanges}
        >
          Save Changes
        </button>
        <form className="mt-6">
          <div className="flex justify-around items-center text-lg w-full flex-wrap gap-5">

            <div className="w-full">
              <label className="block text-indigo-700 font-medium mb-1">College</label>
              <input
                type="text"
                value={userEducationDetails.collegeName}
                name="collegeName"
                placeholder="Enter Your College Name"
                className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                onChange={handleChange}
              />
            </div>

            <div className="w-full mt-5">
              <label className="block text-indigo-700 font-medium mb-1">City</label>
              <input
                type="text"
                value={userEducationDetails.city}
                name="city"
                placeholder="Enter Your City"
                className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                onChange={handleChange}
              />
            </div>

            <div className="w-full mt-5">
              <label className="block text-indigo-700 font-medium mb-1">Course</label>
              <input
                type="text"
                value={userEducationDetails.course}
                name="course"
                placeholder="Enter Your course"
                className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                onChange={handleChange}
              />
            </div>

            <div className="w-full mt-5">
              <label className="block text-indigo-700 font-medium mb-1">Branch</label>
              <input
                type="text"
                value={userEducationDetails.branch}
                name="branch"
                placeholder="Enter Your Branch"
                className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                onChange={handleChange}
              />
            </div>

            <div className="w-full mt-5">
              <label className="block text-indigo-700 font-medium mb-1">Start Year</label>
              <input
                type="text"
                value={userEducationDetails.startDate}
                name="startDate"
                placeholder="Enter Your Start Year"
                className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                onChange={handleChange}
              />
            </div>

            <div className="w-full mt-5">
              <label className="block text-indigo-700 font-medium mb-1">End Year</label>
              <input
                type="text"
                value={userEducationDetails.endDate}
                name="endDate"
                placeholder="Enter Your End Year"
                className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                onChange={handleChange}
              />
            </div>

            <div className="w-full mt-5">
              <label className="block text-indigo-700 font-medium mb-1">Backlogs</label>
              <input
                type="number"
                value={userEducationDetails.backlogs}
                name="backlogs"
                placeholder="Enter Your Backlogs"
                className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                onChange={handleChange}
              />
            </div>

            <div className="w-full mt-5">
              <label className="block text-indigo-700 font-medium mb-1">Current Sem GPA</label>
              <input
                type="text"
                value={userEducationDetails.currentSemGPA}
                name="currentSemGPA"
                placeholder="Enter Your Current Sem GPA"
                className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                onChange={handleChange}
              />
            </div>

            <div className="w-full mt-5">
              <label className="block text-indigo-700 font-medium mb-1">Overall GPA</label>
              <input
                type="text"
                value={userEducationDetails.overallGPA}
                name="overallGPA"
                placeholder="Enter Your Overall GPA"
                className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Education