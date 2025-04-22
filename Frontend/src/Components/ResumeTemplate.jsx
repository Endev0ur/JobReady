import React, { useRef } from "react";
import html2pdf from "html2pdf.js";

const ResumeTemplate = () => {
  const resumeRef = useRef();

  const handleDownloadPDF = () => {
    const element = resumeRef.current;

    // Wait for the DOM to settle with latest updates
    setTimeout(() => {
      const opt = {
        margin: [10, 10, 10, 10], // Apply margins
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 3, // Increase scale for better resolution
          useCORS: true,
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
        },
      };

      // Log to check if the PDF generation is triggered
      console.log("Starting PDF creation...");

      // Ensure this is working correctly
      html2pdf()
        .set(opt)
        .from(element)
        .save()
        .then(() => {
          console.log("PDF downloaded successfully!");
        })
        .catch((error) => {
          console.error("Error while generating PDF: ", error);
        });
    }, 500); // 500ms delay ensures the latest DOM is ready
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center flex-col">
      <button
        onClick={handleDownloadPDF}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
      >
        Download as PDF
      </button>

      <div
        ref={resumeRef}
        className="pt-2 p-3 max-w-[230mm] border w-full mx-auto overflow-hidden flex justify-center items-center flex-col"
      >
        <h1 className="text-[30px] font-bold">JOHN DOEx</h1>
        <p className="font-bold text-lg">
          244-A Nyay Khand-3 Indirapuram Ghaziabad
        </p>
        <div className="mt-1">
          <a href="" className="mr-30  text-lg font-bold underline">
            Linkedin
          </a>
          <a href="" className="mr-30 text-lg font-bold underline">
            Github
          </a>
          <a href="" className="mr-30 text-lg font-bold underline">
            email
          </a>
          <a href="" className="mt-30 text-lg font-bold underline">
            Phone
          </a>
        </div>

        <hr className="w-full mt-3" />
        <div className="w-full flex justify-start flex-col">
          <h2 className="text-2xl font-bold">Experience : </h2>

          {/* belowe text can be copied for another company */}
          <div className="ml-6 mt-2 flex justify-between flex-col">
            <div className="w-full flex justify-between">
              <p className="font-bold">ABC Compnay</p>
              <p>startdate-enddate</p>
            </div>
            <div className="w-full flex justify-between">
              <p className="">Software Engineer</p>
              <p>city , state</p>
            </div>

            <div className="ml-10 mt-1">
              <ul className="list-disc">
                <li>
                  Hello kaise hain aap tabahi macha de kya warna rage mode one
                  is the Lorem ipsum dolor sit amet.
                </li>
                <li>
                  badia hain Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Non, tempora?
                </li>
                <li>
                  aap kaise hain Lorem ipsum dolor sit amet consectetur
                  adipisicing.
                </li>
                <li>ham bahut badiya hain Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>

          <div className="ml-6 mt-2 flex justify-between flex-col">
            <div className="w-full flex justify-between">
              <p className="font-bold">ABC Compnay</p>
              <p>startdate-enddate</p>
            </div>
            <div className="w-full flex justify-between">
              <p className="">Software Engineer</p>
              <p>city , state</p>
            </div>

            <div className="ml-10 mt-1">
              <ul className="list-disc">
                <li>
                  Hello kaise hain aap tabahi macha de kya warna rage mode one
                  is the Lorem ipsum dolor sit amet.
                </li>
                <li>
                  badia hain Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Non, tempora?
                </li>
                <li>
                  aap kaise hain Lorem ipsum dolor sit amet consectetur
                  adipisicing.
                </li>
                <li>ham bahut badiya hain Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* project section start here */}
        <hr className="w-full mt-3 mb-1" />

        <div className="w-full flex justify-start flex-col">
          <h2 className="text-2xl font-bold">Experience : </h2>

          {/* belowe text can be copied for another company */}
          <div className="ml-6 mt-2 flex justify-between flex-col">
            <div className="w-full flex justify-between">
              <p className="font-bold text-lg">Job Ready</p>
              <p>January 2021</p>
            </div>
            <div className="w-full flex ">
              <p className="">
                Javascript , Reactjs , Nodejs , MongoDb , GeminiApi
              </p>
            </div>

            <div className="ml-10 mt-1">
              <ul className="list-disc">
                <li>
                  Hello kaise hain aap tabahi macha de kya warna rage mode one
                  is the Lorem ipsum dolor sit amet.
                </li>
                <li>
                  badia hain Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Non, tempora?
                </li>
                <li>
                  aap kaise hain Lorem ipsum dolor sit amet consectetur
                  adipisicing.
                </li>
                <li>ham bahut badiya hain Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* skills section */}
        <hr className="w-full mt-3 mb-1" />

        <div className="w-full flex justify-start flex-col">
          <h2 className="text-2xl font-bold">Skills : </h2>

          <div className="ml-6 mt-2 flex justify-between flex-col">
            <div className="w-full flex justify-start items-center">
              <p className="font-bold text-xl">Technical Skills : </p>
              <p className="text-md ml-4 font-bold">
                HTML , CSS , Javascript , ReactJs , C++ , MongoDb , SQL , NodeJs
              </p>
            </div>

            <div className="w-full flex justify-start items-center">
              <p className="font-bold text-xl">Soft Skills : </p>
              <p className="text-md ml-4 font-bold">
                Team Player , Communication SKills , Fast Learner
              </p>
            </div>
          </div>
        </div>

        {/* education */}
        <hr className="w-full mt-3 mb-1" />

        <div className="w-full flex justify-start flex-col mb-10">
          <h2 className="text-2xl font-bold">Education : </h2>

          {/* belowe text can be copied for another company */}
          <div className="ml-6 mt-2 flex justify-between flex-col">
            <div className="w-full flex justify-between">
              <p className="font-bold text-xl">GGSIPU</p>
              <p>Nov 2022 - June 2026</p>
            </div>

            <div className="w-full flex justify-between">
              <p className="">Bachelor of Technology</p>
              <p>Cumulative GPA : 8.5</p>
            </div>
          </div>
        </div>

        {/* achievements  */}
        {/* <hr className="w-full mt-1 mb-1" /> */}

        {/* <div className="w-full flex justify-start flex-col">
          <h2 className="text-2xl font-bold">Achievements : </h2>
          <div className="ml-10 mt-2">
            <ul className="list-disc">
              <li>
                Hello kaise hain aap tabahi macha de kya warna rage mode one is
                the Lorem ipsum dolor sit amet.
              </li>
              <li>
                badia hain Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Non, tempora?
              </li>
              <li>
                aap kaise hain Lorem ipsum dolor sit amet consectetur
                adipisicing.
              </li>
              <li>ham bahut badiya hain Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ResumeTemplate;
