import React from 'react'

const Skills = () => {
  return (
    <>
      <div className="bg-gray-300 p-5 width-[100%] border rounded-2xl mt-10">
          <h2 className="text-2xl font-bold">Skills</h2>
          <form className="mt-3">
            <div className="flex justify-around items-center text-xl font-bold w-[100%]  flex-wrap">
              <div className=" w-full">
                <span className="text-xl">Comma-Saparated : </span>
                <input
                  type="text"
                  className="bg-white p-2  pl-5 pr-5 rounded-xl outline-none ml-5 w-[80%]"
                  placeholder='Enter your skills here ....'
                />
              </div> 
            </div>
          </form>
        </div>
    </>
  )
}

export default Skills;