import React , {useState , useEffect} from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';

const ProfileLeftBlock = () => {

  const navigateTo = useNavigate();
  

  const handleLogOut = async (e) => {
    // e.preventDefault();

    try{
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/logout` ,"" , {
        withCredentials:true,
      })
  
      // console.log("respnse si : " , response);
  
      const result = response.data;
      // console.log("result is : " , result);
  
      const {success , message} = result;
      if(success){
        alert("Logged Out Successfully");
        navigateTo("/login");
      }
    }
    catch(err){
      alert("No User Logged In");
      navigateTo("/login");
    }

    
  }


  let [userDetails , setUserDetails] = useState({});

  /* This is for when profile page will load then it will fetch the user detail if possible */
  useEffect(() => {
    const getDetails = async () => {
      try{
        let url = `${import.meta.env.VITE_BACKEND_URL}/auth/getUserDetails`;
        // console.log(url);
        const response = await axios.get(url, {
          withCredentials: true,
        });

        console.log(response);
        const result = response.data;
        const { success , message } = result;
        // console.log("success is : " , success);
        // console.log(success);
        // console.log(result)
        if (success) {
          setUserDetails(message);
        }else{
          navigateTo("/login");
        }
        //  else {
        //   console.log("user details are not here");
        // }
      }
      catch(err){
        navigateTo("/login");
      }
      
    };

    getDetails();
  }, []);




  // console.log("user datails are : " , userDetails);

  return (
    <div className="h-[30%] w-[97%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[30%] 2xl:w-[25%] xl:mr-10 2xl:mr-0 mb-10 xl:mb-0 backdrop-blur-md bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-2xl shadow-2xl shadow-black p-4">
        <div className="h-[100%] w-[100%] flex justify-center flex-col font-bold items-center text-center pt-10 pb-10">
          <h1 className="text-4xl ">{userDetails.name}</h1>
          <div className=" h-[15%] w-[100%] mt-5 flex items-center justify-center">
            <div className="text-md h-[100%] w-[60%] flex justify-center items-center text-gray-200">
              {userDetails.email}
            </div>
          </div>
          <button className="mt-10 bg-red-500 hover:bg-red-600 pt-3 pb-3 pl-4 pr-4 w-[50%] rounded-xl shadow-md shadow-gray-500 cursor-pointer" onClick={handleLogOut}>
            Log Out
          </button>
        </div>
      </div>
  )
}

export default ProfileLeftBlock