import { useState } from "react";
const App = () => {
  
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [task, setTask] = useState([]);

  const submitHandler =(e) =>{
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({title:title,details:details});
    setTask(copyTask);

    // console.log(copyTask);
    // console.log(title);
    // console.log(details);

    setTitle('');
    setDetails('');
  }


  return (
    <div className="h-screen lg:flex bg-black text-white">
      
      <form onSubmit={(e) => submitHandler(e)} className="flex  lg:w-1/2 gap-4 flex-col  items-start  p-10 ">
        <h3 className="text-3xl font-bold">Add Notes</h3>

        {/* Input For Heading  */}
          <input
            type="text"
            placeholder="Enter notes heading"
            className="w-full px-5 py-2 border-2 rounded "
            value={title}
            onChange={(e) =>{
              setTitle(e.target.value);
            }}
          />
          
          {/* Detailed input  */}
          <textarea
            type="text"
            placeholder="Write Details"
            className="w-full h-32 px-5 py-2 border-2 rounded "
            value={details}
            onChange={(e) =>{
              setDetails(e.target.value);
            }}
          />

          <button className="bg-white active:scale-110 w-full text-black px-5 py-2 rounded">
            Add Notes
          </button>
      </form>

      <div className=" bg-gray-900 lg:border-l-2 lg:w-1/2  p-10">
        <h1 className="text-xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-startgap-5 mt-5 h-full overflow-auto">
          {task.map(function (elem, idx) {
            return  <div key={idx} className="h-52 w-40 rounded-xl text-black p-4 bg-white">
              <h3>{elem.title}</h3>
              <p className="text-sm mt-2">{elem.details}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
