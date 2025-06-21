import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router";
import {toast} from 'react-toastify';

const Signup = () => {

  const navigateTo = useNavigate();

  const [input ,  setInput] = useState({
    name:"",
    email:"",
    password:"",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setInput(prevInput => ({
        ...prevInput,
        [name]: value
    }));
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      
      const {name , email , password} = input;

      if(!name || !email || !password){
        toast.error("All fields are mandatory !");
        return;
      }

      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/signup` , input , {
        headers : {
          'Content-Type':"application/json",
        },
        withCredentials:true,
      })

      const result = response.data;

      const {success , message} = result;

      if(success){
        navigateTo("/login");
        toast.success("Sign Up Successfully")
      }
      else{
        console.log("Error in signup");
        toast.error("Email or password is incorrect");
      }

    }
    catch(error){
      console.log("Error in signup Integration from fronend" , error);
      toast.error("Error in Signup , Try again later !")
    }
  }


  const handleNavigate = () => {
    navigateTo("/login")
  };

  return (
    <div className={`h-screen w-full bg-gradient-to-br from-indigo-600 to-purple-600 flex justify-center items-center`}>
      <div className="h-[600px] w-[350px] md:w-[400px] lg:w-[500px] xl:h-[750px] xl:w-[550px]  border-5 xl:p-10 bg-white/10 backdrop-blur-lg text-white p-10 rounded-xl flex flex-col items-center border-white/20">
        <h1 className="text-3xl xl:text-5xl font-bold mb-2 xl:mb-4 ">SIGN UP </h1>
        <form  onSubmit={handleSubmit}>
          <div className="p-2 h-[120px] w-[100%] rounded-xl mt-1 xl:mt-3 ">
            <h2 className="text-xl xl:text-xl font-bold">Name</h2>
            <input
              type="text"
              name="name"
              value={input.name}
              className="mt-1 h-[60%] w-[100%] rounded-xl text-xl pl-5 pr-5 outline-none font-bold bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter Your Name here"
              onChange={handleChange}
            />
          </div>

          <div className="p-2 h-[120px] w-[100%] rounded-xl mt-1 xl:mt-3 ">
            <h2 className="text-xl xl:text-xl font-bold">Email</h2>
            <input
              type="email"
              name="email"
              value={input.email}
              className="mt-1 h-[60%] w-[100%] rounded-xl text-xl pl-5 pr-5 outline-none font-bold bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter Your Email here"
              onChange={handleChange}
            />
          </div>

          <div className="p-2 h-[120px] w-[100%] rounded-xl mt-2 xl:mt-3 ">
            <h2 className="text-xl xl:text-xl font-bold">Password</h2>
            <input
              type="password"
              name="password"
              value={input.password}
              className="mt-1 h-[60%] w-[100%] rounded-xl text-xl pl-5 pr-5 outline-none font-bold bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter Your Password here"
              onChange={handleChange}
            />
          </div>

          

          <button className="text-xl mt-4 p-2 xl:p-4 h-[60px] cursor-pointer bg-sky-500 duration-500 flex justify-center items-center w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-2 rounded-xl font-semibold transition-transform" type="submit">
            Signup
          </button>
          
        </form>

        <div className="mt-5 ml-3 xl:mt-10 h-[70px] w-[100%] flex items-center">
          <h2 className="text-md xl:text-xl font-bold text-white">Already Have an account ? </h2>
          <span
            className="ml-2 text-xl font-bold text-blue-200 underline cursor-pointer"
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
