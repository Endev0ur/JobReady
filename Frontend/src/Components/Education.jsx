import React from 'react'

const Education = () => {
  return (
    <>
      <div className="bg-gray-300 p-5 width-[100%] border rounded-2xl">
          <h2 className="text-2xl font-bold">Education Qualification</h2>
          <form className="mt-3">
            <div className="flex justify-around items-center text-xl font-bold w-[100%]  flex-wrap">
              <div className=" w-full">
                <span className="text-xl">College : </span>
                <input
                  type="text"
                  className="bg-white p-2  pl-5 pr-5 rounded-xl outline-none ml-5 w-[90%]"
                />
              </div>

              <div className=" w-full mt-5 flex justify-around items-center">
                <div className="w-full">
                  <span className="text-xl">City : </span>
                  <input
                    type="text"
                    className="bg-white p-2 rounded-xl outline-none ml-1 w-[75%]"
                  />
                </div>
                <div className="w-full">
                  <span className="text-xl">Course : </span>
                  <input
                    type="text"
                    className="bg-white p-2 rounded-xl outline-none ml-1 w-[75%]"
                  />
                </div>

                <div className="w-full">
                  <span className="text-xl">Backlogs : </span>
                  <input
                    type="text"
                    className="bg-white p-2 rounded-xl outline-none ml-1 w-[60%]"
                  />
                </div>
              </div>

              <div className=" w-full mt-5 flex justify-around items-center">
                <div className="w-full">
                  <span className="text-xl">Current Sem CGPA : </span>
                  <input
                    type="text"
                    className="bg-white p-2 rounded-xl outline-none ml-1 w-[50%]"
                  />
                </div>
                <div className="w-full">
                  <span className="text-xl">Overal CGPA: </span>
                  <input
                    type="text"
                    className="bg-white p-2 rounded-xl outline-none ml-1 w-[50%]"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
    </>
  )
}

export default Education