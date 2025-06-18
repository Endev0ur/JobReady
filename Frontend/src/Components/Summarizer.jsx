import React , {useState} from "react";
import { ImCross } from "react-icons/im";
import axios from 'axios';
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Summarizer = () => {

  const navigateTo = useNavigate();

  const [movingState , setMovingState] = useState(false);

  const [jobDescription , setJobDescription] = useState("");

  const [keywords , setKeyWords] = useState([]);
  const [keypoints , setKeypoints] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();

    setJobDescription(e.target.value);

    // console.log(jobDescription);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();


    // console.log(jobDescription);

    try{

      if(!jobDescription){
        toast.error("Job Description is mandatory!");
        return;
      }


      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/resume/job-summarizer` , jobDescription , {
        headers : {
          'Content-Type':"text/plain",
        },
        withCredentials:true,
      })

      // console.log(response.data);

      setKeyWords(response.data.message.keywords);
      setKeypoints(response.data.message.keypoints);

      toast.success("Result come Successfully!");

       setMovingState(true);

      // console.log("hellow" , response.data.message.keywords);

    }catch(err){
      // console.log("error in summarization of job description" , err);
      if(err.response.data.message==="No token is there!"){
        toast.error("Please Login first !");
        navigateTo("/login");
        return;
      }
      toast.error(" Error occur from our end , Please try again later !");
    }
  }


  // console.log(keypoints);
  // console.log(keywords);
  

  return (
    <div className="bg-sky-300 h-[100%] flex justify-around items-center flex-wrap">
      <div className={`bg-gray-800 h-screen w-[99%]  rounded-lg p-5 max-w-[600px] max-h-[850px] shadow-2xl shadow-white mb-10 mt-10`}>
        <h1 className="text-4xl font-bold text-white text-shadow-lg text-shadow-black">Summarizer</h1>
        <form className="h-[100%] w-[100%]" onSubmit={handleSubmit}>
          <div className="mt-10 h-[70%]  p-2">
            <p className="text-xl font-bold text-white">Job Description : </p>
            <textarea
              name=""
              id=""
              autoComplete="none"
              placeholder="Copy & Paste the Job Description Here ..."
              className=" border-2 mt-2 h-[95%] w-[100%] resize-none p-3 outline-none rounded-lg font-bold bg-gray-700 placeholder:text-gray-900 no-scrollbar 2xl:text-xl text-gray-200"
              onChange={handleChange}
            ></textarea>
          </div>

          <br />
          <button className="mt-8 border-3 text-xl pt-2 pb-2 p-4 rounded-lg text-white font-bold bg-blue-700 outline-none cursor-pointer" type="submit">Summarize</button>
        </form>
      </div>

      {/* Summarizer result start from here */}
      <div className={`${movingState ? "block" :"hidden"} bg-gray-300 rounded-lg p-5 pt-10 2xl:p-10 h-screen xl:h-[850px] xl:ml-5 mt-10 w-[95%] xl:w-[50%] mb-10 transition-all duration-1000 shadow-xl shadow-black border overflow-y-scroll no-scrollbar`}>
        <p className="text-3xl 2xl:text-4xl font-bold ">Points and Word you can use in you resume that make your resume more <strong className="underline">ATS-Friendly</strong> and <strong className="underline">Attaractive</strong></p>

        {/* Keywords */}
        <h1 className="text-3xl font-bold mt-10">Keywords : </h1>    
        <ol className="ml-10 mt-4 list-decimal">
          {keywords.map((elem , index)=>(
            <li key={index} className="text-xl font-bold text-gray-700">{ elem}</li>
          ))}
        </ol> 
        
        {/* Keypoints */}
        <h1 className="text-3xl font-bold mt-10">Keypoints : </h1>    
        <ol className="ml-10 mt-4 list-decimal">
          {keypoints.map((elem , index)=>(
            <li key={index} className="text-xl font-bold text-gray-700">{ elem}</li>
          ))}
        </ol> 

      </div>
    </div>
  );
};

export default Summarizer;
