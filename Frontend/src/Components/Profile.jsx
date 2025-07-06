import React, { useState } from "react";
import ProfileLeftBlock from "./ProfileLeftBlock";
import ProfileRightBlock from "./ProfileRightBlock";

const Profile = () => {

  const [done , setDone] = useState(true);

  return (
     <>
      <div className="min-h-screen xl:h-screen w-full flex flex-col xl:flex-row justify-around items-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-2 md:p-3 lg:p-4 xl:p-7">
        <ProfileLeftBlock />
        <ProfileRightBlock />
      </div>
     </>
    
  );
};
export default Profile;
