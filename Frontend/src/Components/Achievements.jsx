import React, { useEffect, useState } from "react";

const Achievement = () => {


  const [arr, setArr] = useState([]);
  const [add, setAdd] = useState(true);
  const [addPoint, setAddPoint] = useState("");
  const [edit, setEdit] = useState(false);
  const [editpoint, setEditPoint] = useState("");
  const [index, setIndex] = useState(-1);

  console.log(arr.length);

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
    console.log("index is is in best form : ", index);
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

    console.log(finalarr);

  }

  useEffect(()=>{

  } , [arr]);

  useEffect(() => {
    setEditPoint(arr[index]);
  }, [index, add , edit]);


  return (
    <>
      <div className="bg-gray-300 p-5 width-[100%] border rounded-2xl mt-10">
          <h2 className="text-2xl font-bold">Achievements (Optional)</h2>
          <form className="mt-3">
            <div className="flex justify-around items-center text-xl font-bold w-[100%]  flex-wrap">
              <div className=" w-full mt-5">
                <h1 className="block">Describe Your Achievements : </h1>
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
                  <button onClick={handleAddBtn} className="border-2 mr-10 pt-2 pb-2 pl-10 pr-10 mt-5 rounded-xl cursor-pointer">Add+1</button>
                ) : (
                  <div>
                    <input
                      type="text"
                      className="border rounded-lg mt-3 mr-5 pt-2 pb-2 pl-3 pr-10 outline-none"
                      onChange={handleAddPointChange}
                    />
                    <button className="border-3 pl-7 pr-7 pt-2 pb-2 rounded-lg " onClick={handleSavePoint}>
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

export default Achievement;