import React from "react";

const Login = ({flipped , setFlipped}) => {

  const handleFlipped = () => {
    setFlipped(!flipped)
  }

  return (
    <div className="h-[500px] w-[350px] xl:h-[600px] xl:w-[550px] bg-white p-10 rounded-xl flex flex-col items-center ">
    <h1 className="text-3xl xl:text-5xl font-bold mb-2 xl:mb-4 ">Login </h1>

    <div className="p-2 h-[120px] w-[100%] rounded-xl mt-3 ">
      <h2 className="text-xl xl:text-2xl font-bold">Email</h2>
      <input
        type="email"
        className="mt-1 h-[60%] w-[100%] rounded-xl text-xl xl:text-2xl pl-5 pr-5 outline-none font-bold border-1"
        placeholder="Enter Your Name here"
      />
    </div>

    <div className="p-2 h-[120px] w-[100%] rounded-xl mt-3 ">
      <h2 className="text-xl xl:text-2xl font-bold">Password</h2>
      <input
        type="password"
        className="mt-1 h-[60%] w-[100%] rounded-xl text-xl xl:text-2xl pl-5 pr-5 outline-none font-bold border-1"
        placeholder="Enter Your Name here"
      />
    </div>

    

    <button className="text-xl xl:text-2xl mt-5 p-2 xl:p-4 h-[60px] w-[70%] rounded-2xl  font-bold cursor-pointer bg-black  hover:scale-105 duration-500 text-white flex justify-center items-center">
      Login
    </button>

    <div className="mt-10 h-[70px] w-[100%] flex items-center">
      <h2 className="text-md xl:text-2xl font-bold">Don't Have an account ? </h2>
      <span
        className="ml-2 text-xl xl:text-2xl font-bold text-blue-500 underline cursor-pointer"
        onClick={handleFlipped} 
      >
        Signup
      </span>
    </div>
  </div>
  );
};

export default Login;
