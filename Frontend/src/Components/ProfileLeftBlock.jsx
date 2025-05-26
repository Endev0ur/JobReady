import React , {useState , useEffect} from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';

const ProfileLeftBlock = () => {

  const navigateTo = useNavigate();
  

  const handleLogOut = async (e) => {
    // e.preventDefault();

    try{
      const response = await axios.post("http://localhost:3000/auth/logout" ,"" , {
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
      else{
        alert("No User Logged In");
        navigateTo("/login");
      }
    }
    catch(err){
      alert("No User Logged In");
      navigateTo("/login");
    }

    
  }


  let [resumeDetails, setResumeDetails] = useState({
    userDetails: {},
  });

  /* This is for when profile page will load then it will fetch the user detail if possible */
  useEffect(() => {
    const getDetails = async () => {
      let url = "http://localhost:3000/profile/get-details";
      const response = await axios.get(url, {
        withCredentials: true,
      });

      // console.log(response);
      const result = response.data;
      const { success } = result;
      if (success) {
        const { resume } = result;

        setResumeDetails((res) => ({
          ...res,
          userDetails: resume.userDetails,
        }));

        // console.log("resumeDetails are : " , resumeDetails);
      } else {
        console.log("user details are not here");
      }
    };

    getDetails();
  }, []);




  // console.log("user datails are : " , resumeDetails);

  return (
    <div className="h-[30%] w-[97%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[30%] 2xl:w-[25%] xl:mr-10 2xl:mr-0 mb-10 xl:mb-0 bg-[linear-gradient(to_right,#90ee90,#ffff00,#87ceeb)] rounded-2xl shadow-2xl shadow-black p-4">
        <div className="h-[100%] w-[100%] flex justify-center flex-col font-bold items-center text-center pt-10 pb-10">
          <h1 className="text-4xl">{resumeDetails.userDetails.name}</h1>
          <div className=" h-[15%] w-[100%] mt-5 flex items-center justify-center">
            <div className="text-md h-[100%] w-[60%] flex justify-center items-center">
              {resumeDetails.userDetails.email}
            </div>
          </div>
          <button className="mt-10 bg-red-500 pt-3 pb-3 pl-4 pr-4 w-[50%] rounded-xl shadow-md shadow-gray-500 cursor-pointer" onClick={handleLogOut}>
            Log Out
          </button>
        </div>
      </div>
  )
}

export default ProfileLeftBlock