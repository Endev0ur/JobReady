import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import {toast} from 'react-toastify'

const Login = () => {
  const navigateTo = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setInput(prevInput => ({
        ...prevInput,
        [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { email, password } = input;

      if (!email || !password) {
        toast.error("All Fields are mandatory!");
        return;
      }

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
        input,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log(response);
      const result = response.data;

      const { success, message } = result;

      if (success) {
        navigateTo("/");
        toast.success("Login Successfully");
      } else {
        // console.log("Error in signup");
        toast.error("Email or password is incorrect");
      }
    } catch (error) {
      // console.log("Error in login Integration from fronend", error);
      toast.error("Error in login");
    }
  };

  const handleNavigate = () => {
    navigateTo("/signup");
  };

  return (
    <div
      className={`h-screen w-full  bg-gradient-to-br from-indigo-600 to-purple-600 flex justify-center items-center`}
    >
      <div className="h-[500px] w-[350px] md:w-[400px] lg:w-[500px] xl:h-[600px] border-5 xl:w-[550px] bg-white/10 backdrop-blur-lg text-white p-10 rounded-xl flex flex-col items-center border-white/20">
        <h1 className="text-3xl xl:text-5xl font-bold mb-2 xl:mb-4 ">LOGIN </h1>

        <form onSubmit={handleSubmit}>
          <div className="p-2 h-[120px] w-[100%] rounded-xl mt-3 ">
            <h2 className="text-xl font-bold">Email</h2>
            <input
              type="email"
              name="email"
              value={input.email}
              className="mt-1 h-[60%] w-[100%] rounded-xl text-xl pl-5 pr-5 outline-none font-bold bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter Your Email here"
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          <div className="p-2 h-[120px] w-[100%] rounded-xl mt-1 ">
            <h2 className="text-xl  font-bold">Password</h2>
            <input
              type="password"
              name="password"
              value={input.password}
              className="mt-1 h-[60%] w-[100%] rounded-xl text-xl pl-5 pr-5 outline-none font-bold bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter Your Password here"
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          <button
            className="text-xl mt-4 p-2 xl:p-4 h-[60px] cursor-pointer bg-sky-500 duration-500 flex justify-center items-center w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-2 rounded-xl font-semibold transition-transform"
            type="submit"
          >
            Login
          </button>
        </form>

        <div className="mt-5 xl:mt-10 h-[70px] w-[100%] flex items-center">
          <h2 className="text-md xl:text-xl text-white font-bold">
            Don't Have an account ?{" "}
          </h2>
          <span
            className="ml-2 text-xl font-bold text-blue-200 underline cursor-pointer"
            onClick={handleNavigate}
          >
            Signup
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
