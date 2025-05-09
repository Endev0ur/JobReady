import React, { useEffect, useState } from "react";

const UserDetails = ({basicDetails , setBasicDetails}) => {

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
  }

  return (
    <>
      <div className="bg-gray-300 p-5 width-[100%] border rounded-2xl">
        <h2 className="text-2xl font-bold inline-block">User Details</h2>
        <button className={`border p-2 pl-5 pr-5 rounded-md ml-5 ${showSaveBtn ? "inline-block" : "hidden"}`} onClick={handleSaveChanges}>Save Changes</button>
        <form className="mt-3">
          <div className="flex justify-around items-center text-xl font-bold w-[100%]  flex-wrap">
            <div className=" w-full">
              <span className="text-xl">Name : </span>
              <input
                type="text"
                value={userDetails.name}
                name="name"
                className="bg-white p-2  pl-5 pr-5 rounded-xl outline-none ml-5 w-[90%]"
                onChange={handleChange}
              />
            </div>

            <div className=" w-full mt-5 flex justify-around items-center">
              <div className="w-full">
                <span className="text-xl">Email : </span>
                <input
                  type="email"
                  value={userDetails.email}
                  name="email"
                  className="bg-white p-2 rounded-xl outline-none ml-1 w-[75%]"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <span className="text-xl">Phone No. : </span>
                <input
                  type="text"
                  name = "phoneNo"
                  value={userDetails.phoneNo}
                  className="bg-white p-2 rounded-xl outline-none ml-1 w-[75%]"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className=" w-full mt-5 flex justify-around items-center">
              <div className="w-full">
                <span className="text-xl">LinkedIn : </span>
                <input
                  type="text"
                  value={userDetails.linkedIn}
                  name="linkedIn"
                  className="bg-white p-2 rounded-xl outline-none ml-1 w-[60%]"
                  onChange={handleChange}
                />
              </div>

              <div className="w-full">
                <span className="text-xl">github : </span>
                <input
                  type="text"
                  value={userDetails.github}
                  name="github"
                  className="bg-white p-2 rounded-xl outline-none ml-1 w-[60%]"
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
