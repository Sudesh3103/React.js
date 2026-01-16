import React from "react";

const App = () => {
  const submitHandler =(e) =>{
    e.preventDefault();
    console.log("form submitted");
  }

  return (
    <div className="h-screen bg-black text-white">
      <form onSubmit={(e) => submitHandler(e)} className="flex gap-4 flex-col justify-between items-start  p-10 ">
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
    </div>
  );
};


export default App;
