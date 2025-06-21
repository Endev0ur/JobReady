import React from 'react'
import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import axios from "axios";
import { Grid } from 'react-loader-spinner';

const ProtectedRoute = ({children}) => {

  // const navigateTo = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true); 
  useEffect(() => {
    const method = async () => {
      try{
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/check`, {
          withCredentials: true, // Very important for cookies
        })
  
        // console.log(response);
        const result = response.data;
        const {loggedIn} = result;
  
        if(!loggedIn){
          setIsLoggedIn(false);
        }else{
          setIsLoggedIn(true);
        }
      }
      catch(err){
        setIsLoggedIn(false);
      }
      finally{
        setIsLoading(false);
      }
      
    }

    method();

  }, []);

  if(isLoading){
    return (
    <div className='h-screen w-full flex justify-center items-center text-bold text-2xl'>
      <Grid
        height="80"
        width="80"
        color="#000000"
        ariaLabel="grid-loading"
        visible={true}
      />
    </div>
    )
  }

  if(!isLoggedIn){
    return <Navigate to="/login" replace></Navigate>
  }

  return children;
  


}

export default ProtectedRoute;