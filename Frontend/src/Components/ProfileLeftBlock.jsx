import React from 'react'

const ProfileLeftBlock = () => {
  return (
    <div className="h-[30%] w-[25%] bg-[linear-gradient(to_right,#90ee90,#ffff00,#87ceeb)] rounded-2xl shadow-2xl shadow-black p-4">
        <div className="h-[100%] w-[100%] bg-transparent rounded-2xl  flex items-center flex-col p-10 font-bold">
          <h1 className="text-4xl">SHUBHAM RAWAT</h1>
          <div className=" h-[15%] w-[100%] mt-5 flex items-center justify-center">
            <div className="text-md h-[100%] w-[60%] flex justify-center items-center">
              shubham0000rawat@gmail.com
            </div>
          </div>
          <button className="mt-10 bg-red-500 pt-3 pb-3 pl-4 pr-4 w-[50%] rounded-xl shadow-md shadow-gray-500 cursor-pointer">
            Log Out
          </button>
        </div>
      </div>
  )
}

export default ProfileLeftBlock