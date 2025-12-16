import React from 'react'
import { useState } from'react'

const Destructuring = () => {

  const [num, setNum] = useState({user:"Sudesh", age:24});
  const [number, setNumber] = useState([10,20,30,40]); 

  //For object destructuring
  const btnclickeed = () =>{
    const newNum = {...num};
    newNum.user = "Shubham";
    newNum.age = 26;
    setNum(newNum);
  }

  //For array destructuring
  const handleClick = () => {
    const newNumber = [...number];
    newNumber.push(50);
    setNumber(newNumber);
  }

  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnclickeed}>Click</button>

      <h2>{number}</h2>
      <button onClick={handleClick}>Add 50</button>
    </div>
  )
}

export default Destructuring
