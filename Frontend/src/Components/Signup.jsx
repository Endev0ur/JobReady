import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router";

const Signup = () => {

  const navigateTo = useNavigate();

  const [input ,  setInput] = useState({
    name:"",
    email:"",
    password:"",
  })

  const handleChange = (e) => {
    /* this is for which part is changing in input field */
    const targetName = e.target.name;

    /* this is for track of values */
    const value = e.target.value;

    /* set newinput = input and then change the value in newinput and atlast set it into input */
    const newInput = input;
    newInput[targetName] = value;
    setInput(newInput);

    // console.log(input);
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await axios.post("http://localhost:3000/auth/signup" , input , {
        headers : {
          'Content-Type':"application/json",
        },
        withCredentials:true,
      })

      const result = response.data;

      const {success , message} = result;

      if(success){
        navigateTo("/login");
      }
      else{
        console.log("Error in signup");
      }

    }
    catch(error){
      console.log("Error in signup Integration from fronend" , error);
    }
  }


  const handleNavigate = () => {
    navigateTo("/login")
  };

  return (
    <div className={`h-screen w-full bg-black flex justify-center items-center`}>
      <div className="h-[600px] w-[350px] xl:h-[750px] xl:w-[550px] bg-white p-10 rounded-xl flex flex-col items-center ">
        <h1 className="text-3xl xl:text-5xl font-bold mb-2 xl:mb-4 ">Sign Up </h1>
        <form  onSubmit={handleSubmit}>
          <div className="p-2 h-[120px] w-[100%] rounded-xl mt-2 xl:mt-3 ">
            <h2 className="text-xl xl:text-2xl font-bold">Name</h2>
            <input
              type="text"
              name="name"
              className="mt-1 h-[60%] w-[100%] rounded-xl text-xl xl:text-2xl pl-5 pr-5 outline-none font-bold border-1"
              placeholder="Enter Your Name here"
              onChange={handleChange}
            />
          </div>

          <div className="p-2 h-[120px] w-[100%] rounded-xl mt-2 xl:mt-3 ">
            <h2 className="text-xl xl:text-2xl font-bold">Email</h2>
            <input
              type="email"
              name="email"
              className="mt-1 h-[60%] w-[100%] rounded-xl text-xl xl:text-2xl pl-5 pr-5 outline-none font-bold border-1"
              placeholder="Enter Your Email here"
              onChange={handleChange}
            />
          </div>

          <div className="p-2 h-[120px] w-[100%] rounded-xl mt-2 xl:mt-3 ">
            <h2 className="text-xl xl:text-2xl font-bold">Password</h2>
            <input
              type="password"
              name="password"
              className="mt-1 h-[60%] w-[100%] rounded-xl text-xl xl:text-2xl pl-5 pr-5 outline-none font-bold border-1"
              placeholder="Enter Your Password here"
              onChange={handleChange}
            />
          </div>

          

          <button className="text-xl xl:text-2xl mt-5 p-2 xl:p-4 h-[60px] w-[70%] rounded-2xl  font-bold cursor-pointer bg-black  hover:scale-105 duration-500 text-white flex justify-center items-center" type="submit">
            Signup
          </button>
          
        </form>

        <div className="mt-10 h-[70px] w-[100%] flex items-center">
          <h2 className="text-md xl:text-2xl font-bold">Already Have an account ? </h2>
          <span
            className="ml-2 text-xl xl:text-2xl font-bold text-blue-500 underline cursor-pointer"
            onClick={handleNavigate}
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
