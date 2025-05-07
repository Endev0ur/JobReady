
import React, { useEffect, useState } from "react";

const ProjectDetails = ({uniq , projects , setProjects , name}) => {

  
  const [arr, setArr] = useState([]);
  const [add, setAdd] = useState(true);
  const [addPoint, setAddPoint] = useState("");
  const [edit, setEdit] = useState(false);
  const [editpoint, setEditPoint] = useState("");
  const [index, setIndex] = useState(-1);

  // console.log(arr.length);

  const handleAddBtn = () => {
    setAdd(!add);
  };

  const handleAddPointChange = (e) => {
    setAddPoint(e.target.value);
    console.log(addPoint);
  };

  const handleSavePoint = (e) => {
    e.preventDefault();
    if (addPoint !== "") {
      arr.push(addPoint);
      setAdd(!add);
      setAddPoint("");
    }
  };

  const handleEdit = (e) => {
    console.log("edit pr click karte hi chala");
    e.preventDefault();
    // setIndex(e.target.parentElement.id);
    console.log(e.target.parentElement);
    console.log(e.target.parentElement.id);
    let ind = e.target.parentElement.id;
    // console.log("index is : ", ind);
    setEdit(!edit);
    setIndex(ind);
    // console.log("ind is  , ", index);
  };

  const handleEditChange = (e) => {
    e.preventDefault();
    // setEditPoint(arr[index]);
    setEditPoint(e.target.value);
    console.log("edit change will be : => ", editpoint);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const newArr = [...arr];
    newArr[index] = editpoint;
    setArr(newArr);
    setEdit(!edit);
    setIndex(-1);
    setEditPoint("");
    console.log(arr);
    // console.log("index is is in best form : ", index);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setEdit(!edit);
    setIndex(-1);
    let newArr = [...arr];
    setArr(newArr);
  };

  const handleDelete = (e) => {
    e.preventDefault();

    let delArr = [...arr];
    const indi = e.target.parentElement.id;

    const finalarr = delArr.filter((elem , indexi) => {
      return indexi!=indi;
    })

    setArr(finalarr);

    // console.log(finalarr);

  }

  const handleDeleteProject = (e) => {
    console.log("project id is : " , e.target.parentElement.id);
    const index = e.target.parentElement.id;
    const arrX = [...projects];
    

    console.log(finalarr);
    // console.log(arr);
    setProjects(finalarr);
  }

  useEffect(()=>{

  } , [arr]);

  useEffect(() => {
    setEditPoint(arr[index]);
  }, [index, add , edit]);


  return (
    <>
    {/* Project Details */}

      <div className="bg-gray-300 p-5 width-[100%] border rounded-2xl mt-10" id={uniq} name={name}>
          <h2 className="text-2xl font-bold ">Project Details : </h2>
          {/* <button className="border p-2 rounded-lg ml-3" onClick={handleDeleteProject}>Delete This Project</button> */}
          <form className="mt-3">
            <div className="flex justify-around items-center text-xl font-bold w-[100%]  flex-wrap">
              <div className=" w-full">
                <span className="text-xl">Name of the Project : </span>
                <input
                  type="text"
                  className="bg-white p-2  pl-5 pr-5 rounded-xl outline-none ml-5 w-[75%]"
                />
              </div>

              <textarea
                name=""
                id=""
                className="w-[100%] mt-6 bg-gray-500 h-[100px] resize-none p-5 rounded-xl"
                placeholder="Write Something about project "
              ></textarea>

              <div className=" w-full mt-5">
                <span className="text-xl">Tech Stack Used : </span>
                <input
                  type="text"
                  className="bg-white p-2  pl-5 pr-5 rounded-xl outline-none ml-5 w-[75%]"
                  placeholder="Write Tech stack you used in comma saparated ( , ) fashion"
                />
              </div>

              <div className="h-[50px] w-[100%] ml-3 mt-5 flex items-center justify-start">
                <h1>Links : </h1>
                <a href="" target="_blank" className="underline ml-10">Deployment</a>
                <a href="" target="_blank" className="underline ml-10">
                  Github
                </a>
              </div>

              <div className=" w-full mt-5">
                <h1 className="block">Brifely About Project (pointwize) : </h1>
                <ol className="list-decimal ml-5 mr-3">
                  {arr.map((elem, ind) => (
                    <div>
                      {index != ind ? (
                        <li kye={ind} id={ind}>
                          <input
                            type="text"
                            className="mr-10 p-2 ml-5 mt-5 rounded-xl w-[70%] border-2 border-black text-gray-200 bg-gray-700"
                            value={elem}
                          />
                          <button
                            className=" cursor-pointer border-2 border-black bg-lime-500 text-gray-800 p-1 pl-7 pr-7 rounded-xl"
                            onClick={handleEdit}
                          >
                            Edit
                          </button>
                          <button className="cursor-pointer ml-2 border-2 border-black bg-red-500 text-gray-800 p-1 pl-7 pr-7 rounded-xl" onClick={handleDelete}>
                            Delete
                          </button>
                        </li>
                      ) : (
                        <li key={ind} id={ind}>
                          <input
                            type="text"
                            className="mr-10 p-2 ml-5 mt-5 rounded-xl w-[70%] border-2 border-black text-gray-200 bg-gray-700"
                            onChange={handleEditChange}
                            value={editpoint}
                          />
                          <button
                            className="cursor-pointer border-2 border-black bg-green-500 text-gray-800 p-1 pl-7 pr-7 rounded-xl mr-2"
                            onClick={handleUpdate}
                          >
                            Update
                          </button>
                          <button
                            className="cursor-pointer border-2 border-black bg-red-500 text-gray-800 p-1 pl-7 pr-7 rounded-xl ml-2"
                            onClick={handleCancel}
                          >
                            Cancel
                          </button>
                        </li>
                      )}
                    </div>
                  ))}
                </ol>
                {add ? (
                  <button onClick={handleAddBtn} className="border-2 mr-10 pt-2 pb-2 pl-10 pr-10 mt-5 rounded-xl cursor-pointer">Add</button>
                ) : (
                  <div>
                    <input
                      type="text"
                      className="border rounded-lg mt-3 mr-5 pt-2 pb-2 pl-3 pr-3 outline-none"
                      placeholder="Enter the point"
                      onChange={handleAddPointChange}
                    />
                    <button className="border-3 pl-7 pr-7 pt-2 pb-2 rounded-lg cursor-pointer" onClick={handleSavePoint}>
                      Save
                    </button>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
    </>
  )
}

export default ProjectDetails