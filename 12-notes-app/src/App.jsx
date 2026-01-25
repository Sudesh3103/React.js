import React from "react";

const App = () => {
  const submitHandler =(e) =>{
    e.preventDefault();
    console.log("form submitted");
  }

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form onSubmit={(e) => submitHandler(e)} className="flex  lg:w-1/2 gap-4 flex-col  items-start  p-10 ">
          <input
            type="text"
            placeholder="Enter notes heading"
            className="w-full px-5 py-2 border-2 rounded "
          />
          <textarea
            type="text"
            placeholder="Write Details"
            className="w-full h-32 px-5 py-2 border-2 rounded "
          />
          <button className="bg-white w-full text-black px-5 py-2 rounded">
            Add Notes
          </button>
      </form>

      <div className="flex bg-gray-900 lg:w-1/2 flex-wrap p-10">
        <div className="h-32 w-32 rounded-2xl bg-white"></div>
      </div>
    </div>
  );
};



export default App;
