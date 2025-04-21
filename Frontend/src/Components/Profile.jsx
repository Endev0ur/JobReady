import React from "react";
import ProfileLeftBlock from "./ProfileLeftBlock";
import ProfileRightBlock from "./ProfileRightBlock";

const Profile = () => {
  return (
    <div className="h-screen w-full hidden md:flex justify-around bg-gray-500 p-7">
      <ProfileLeftBlock />
      <ProfileRightBlock />
    </div>
  );
};
export default Profile;
