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
      <div className="bg-gray-300 p-5 width-[100%] border rounded-xl">
        <h2 className="text-2xl font-bold inline-block">User Details : </h2>
        <button className={`border-0 p-2 pl-5 pr-5 bg-blue-500 font-bold text-white cursor-pointer rounded-md ml-1 xl:ml-5 ${showSaveBtn ? "inline-block" : "hidden"}`} onClick={handleSaveChanges}>Save Changes</button>
        <form className="mt-3">
          <div className="flex justify-around items-center text-xl font-bold w-[100%] flex-wrap">
            <div className=" w-full">
              <span className="text-xl">Name : </span>
              <input
                type="text"
                value={userDetails.name}
                name="name"
                placeholder="Enter Your Name "
                className="bg-white p-2 pl-5 pr-5 rounded-xl outline-none ml-2 xl:ml-5 w-[67%]"
                onChange={handleChange}
              />
            </div>

            <div className=" w-full mt-5 flex justify-around items-center flex-wrap mb-2">
              <div className="w-full">
                <span className="text-xl">Email : </span>
                <input
                  type="email"
                  value={userDetails.email}
                  name="email"
                  placeholder="Enter Your Email"
                  className="bg-white p-2 pl-5 pr-5  rounded-xl outline-none ml-2 xl:ml-5 w-[67%]"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <span className="text-xl">Phone No. : </span>
                <input
                  type="text"
                  name = "phoneNo"
                  value={userDetails.phoneNo}
                  placeholder="Enter Your Password"
                  className="bg-white p-2 xl:pl-5 xl:pr-5 rounded-xl outline-none ml-2 mt-3 xl:ml-5 w-[50%]"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className=" w-full mt-3 flex justify-around items-center flex-wrap">
              <div className="w-full">
                <span className="text-xl">LinkedIn : </span>
                <input
                  type="text"
                  value={userDetails.linkedIn}
                  name="linkedIn"
                  placeholder="Enter your LinkedIn profile link"
                  className="bg-white p-2 xl:pl-5 xl:pr-5 rounded-xl outline-none ml-2 xl:ml-5 w-[55%]"
                  onChange={handleChange}
                />
              </div>

              <div className="w-full">
                <span className="text-xl">github : </span>
                <input
                  type="text"
                  value={userDetails.github}
                  name="github"
                  placeholder="Enter your Github profile link"
                  className="bg-white p-2 xl:pl-5 xl:pr-5 rounded-xl outline-none mt-3 ml-2 xl:ml-5 w-[65%]"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserDetails;
