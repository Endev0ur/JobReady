import React, { useEffect, useState } from "react";

const UserDetails = ({basicDetails , setBasicDetails , setSaveToBackend}) => {

  // console.log(basicDetails.name);

  const [userDetails , setUserDetails] = useState({
    name:"",
    email:"",
    phoneNo:"",
    linkedIn:"",
    github:"",
  });

  const [showSaveBtn , setShowSaveBtn] = useState(false);

  useEffect(() => {
    if (basicDetails) {
      setUserDetails({
        name: basicDetails.name || '',
        email: basicDetails.email || '',
        phoneNo: basicDetails.phoneNo || '',
        linkedIn: basicDetails.linkedIn || '',
        github: basicDetails.github || '',
      });
    }
  }, [basicDetails]);
  // console.log("user details sins : " , userDetails);
  
  // console.log("basic Details are : " , basicDetails);

  const handleChange = (e) => {

    const {name , value} = e.target;

    setUserDetails((prev)=>({
      ...prev,
      [name]:value,
    }))

    setShowSaveBtn(true);

  }

  const handleSaveChanges = () => {
    setBasicDetails((prev)=>({
      ...prev,
      userDetails:userDetails,
    }))

    setShowSaveBtn(false);
    setSaveToBackend(true);
  }

  return (
    <>
      <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-6 w-full border border-indigo-300 shadow-md rounded-2xl">
        <h2 className="text-3xl font-semibold text-indigo-800 inline-block">User Details</h2>
        <button
          className={`ml-3 xl:ml-6 px-5 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-sm transition duration-200 hover:bg-indigo-700 ${showSaveBtn ? "inline-block" : "hidden"}`}
          onClick={handleSaveChanges}
        >
          Save Changes
        </button>
        <form className="mt-6">
          <div className="flex justify-around items-center text-lg w-full flex-wrap gap-4">
            <div className="w-full">
              <label className="block text-indigo-700 font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={userDetails.name}
                placeholder="Enter Your Name"
                className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                onChange={handleChange}
              />
            </div>

            <div className="w-full mt-5">
              <label className="block text-indigo-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={userDetails.email}
                placeholder="Enter Your Email"
                className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                onChange={handleChange}
              />
            </div>

            <div className="w-full mt-5">
              <label className="block text-indigo-700 font-medium mb-1">Phone Number</label>
              <input
                type="text"
                name="phoneNo"
                value={userDetails.phoneNo}
                placeholder="Enter Your Phone Number"
                className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                onChange={handleChange}
              />
            </div>

            <div className="w-full mt-5">
              <label className="block text-indigo-700 font-medium mb-1">LinkedIn</label>
              <input
                type="text"
                name="linkedIn"
                value={userDetails.linkedIn}
                placeholder="Enter Your LinkedIn Profile"
                className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                onChange={handleChange}
              />
            </div>

            <div className="w-full mt-5">
              <label className="block text-indigo-700 font-medium mb-1">GitHub</label>
              <input
                type="text"
                name="github"
                value={userDetails.github}
                placeholder="Enter Your GitHub Profile"
                className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
      </div>

    </>
  );
};

export default UserDetails;
