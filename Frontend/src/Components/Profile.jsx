import React, { useState } from "react";
import ProfileLeftBlock from "./ProfileLeftBlock";
import ProfileRightBlock from "./ProfileRightBlock";

const Profile = () => {

  const [done , setDone] = useState(false);

  return (
     <>
      {done ? (<div className="h-screen w-full hidden md:flex justify-around bg-gray-500 p-7">
        <ProfileLeftBlock />
        <ProfileRightBlock />
      </div>) : (<div className="h-screen text-2xl font-bold flex justify-center items-center">Under building ........</div>)}
     </>
    
  );
};
export default Profile;
