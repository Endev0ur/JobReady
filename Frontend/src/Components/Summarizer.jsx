import React , {useState} from "react";
import { ImCross } from "react-icons/im";
import axios from 'axios';

const Summarizer = () => {

  const [movingState , setMovingState] = useState(false);

  const [jobDescription , setJobDescription] = useState("");

  const [keywords , setKeyWords] = useState([]);
  const [keypoints , setKeypoints] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();

    setJobDescription(e.target.value);

    console.log(jobDescription);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMovingState(true);

    console.log(jobDescription);

    try{

      const response = await axios.post("http://localhost:3000/resume/job-summarizer" , jobDescription , {
        headers : {
          'Content-Type':"text/plain",
        },
        withCredentials:true,
      })

      console.log(response.data);

      setKeyWords(response.data.message.keywords);
      setKeypoints(response.data.message.keypoints);

      // console.log("hellow" , response.data.message.keywords);

    }catch(error){
      console.log("error in summarization of job description" , error);
    }
  }


  console.log(keypoints);
  console.log(keywords);
  

  return (
    <div className="h-screen w-full bg-white flex justify-around items-center">
      <div className="h-[50%] w-[40%]">

      </div>
      <div className={`bg-gray-800 h-[98%] w-[98%] rounded-2xl p-5 max-w-[690px] max-h-[850px] shadow-2xl shadow-black transition-transform duration-1000 absolute ${movingState ? "-translate-x-140":""}`}>
        <h1 className="text-4xl font-bold text-white">Summarizer</h1>
        <form action="" className="h-[100%] w-[100%]" onSubmit={handleSubmit}>
          <div className="mt-10 h-[70%]  p-2">
            <p className="text-xl font-bold text-white">Job Description : </p>
            <textarea
              name=""
              id=""
              autoComplete="none"
              placeholder="Copy & Paste the Job Description Here ..."
              className=" border-2 mt-2 h-[95%] w-[100%] resize-none p-3 outline-none rounded-2xl font-bold bg-gray-700 placeholder:text-gray-900 no-scrollbar 2xl:text-xl text-gray-200"
              onChange={handleChange}
            ></textarea>
          </div>

          <br />
          <button className="mt-8 border-3 text-xl pt-2 pb-2 p-4 rounded-xl text-white font-bold bg-blue-700 outline-none cursor-pointer" type="submit">Summarize</button>
        </form>
      </div>

      <div className={`${movingState ? "block" :"hidden"} bg-gray-300 rounded-2xl p-10 h-[90%] w-[55%] transition-all duration-1000 shadow-xl shadow-black overflow-y-scroll no-scrollbar`}>
        <p className="text-4xl font-bold ">Points and Word you can use in you resume that make your resume more <strong className="underline">ATS-Friendly</strong> and <strong className="underline">Attaractive</strong></p>
        <h1 className="text-3xl font-bold mt-10">Keypoints : </h1>    
        <ol className="ml-10 mt-4 list-decimal">
          {keywords.map((elem , index)=>(
            <li key={index} className="text-xl font-bold text-gray-700">{ elem}</li>
          ))}
        </ol> 
        
        <h1 className="text-3xl font-bold mt-10">Keywords : </h1>    
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
