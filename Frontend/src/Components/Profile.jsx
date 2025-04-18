import React from "react";

const Profile = () => {
  return (
    <div className="h-screen w-full hidden md:flex justify-around bg-gray-500 p-7">
      <div className="h-[50%] w-[30%] bg-blue-500 rounded-2xl shadow-2xl shadow-black p-4">
        <div className="h-[100%] w-[100%] bg-blue-500 rounded-2xl  flex items-center flex-col p-10 font-bold">
          <h1 className="text-4xl">SHUBHAM RAWAT</h1>
          <div className=" h-[15%] w-[100%] mt-5 flex items-center justify-center">
            <div className="text-sm border-r-1 h-[100%] w-[60%] flex justify-center items-center">
              shubham0000rawat@gmail.com
            </div>

            <div className="h-[100%] w-[40%] flex justify-center items-center border-l-1">
              +91 7982083324
            </div>
          </div>
          <div className="h-[18%] w-[100%] bg-black mt-5 flex justify-between items-center">
            <div className=" h-[100%] w-[33%] mr-1 bg-blue-500 flex justify-center items-center">
              <a href="">LinkediN</a>
            </div>
            <div className=" h-[100%] w-[33%] bg-blue-500 flex justify-center items-center">
              <a href="">Github</a>
            </div>
            <div className=" h-[100%] w-[33%] ml-1 bg-blue-500 flex justify-center items-center">
              <a href="">Twitter</a>
            </div>
          </div>

          <div className="h-[20%] w-[100%] bg-orange-500 mt-5 rounded-4xl border-3 flex justify-center items-center text-2xl font-bold shadow-lg shadow-black">
            FULL STACK DEVELOPER
          </div>

          <button className="mt-10 bg-red-500 pt-3 pb-3 pl-4 pr-4 w-[50%] rounded-xl shadow-md shadow-gray-500 cursor-pointer">
            Log Out
          </button>
        </div>
      </div>
      <div className="h-[100%] w-[65%] bg-red-500 rounded-2xl shadow-2xl shadow-black p-10">
        <h1 className="text-4xl font-bold">DETAILS</h1>
        <div className="h-[94%] w-[100%] border mt-4 rounded-3xl p-5">
          {/* EDUCATION QUALIFICATION */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
