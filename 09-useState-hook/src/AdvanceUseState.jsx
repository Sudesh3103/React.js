import React, { useState } from 'react'

const AdvanceUseState = () => {

    const [num, setnum] = useState(5);
    const [name, setname] = useState({user:"Sudesh", age:24});

    const btnClicked = () =>{
        console.log(num); // Async function
        setnum(num+5);
        console.log(num); // It will print old value due to async nature of setState.
        // If in UI it will show 15 but in console it will print 10 because i.e before value

       //  setnum(num); // Setting same value will not cause re-render
    }

  return (
    <div>
      <h2>{num}</h2>
      <button onClick={btnClicked}>Click</button>

      <h1>{name.user}, {name.age}</h1>
      
    </div>
  )
}

export default AdvanceUseState
