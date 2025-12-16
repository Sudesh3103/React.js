import React from 'react'
import { useState } from'react'

const Destructuring = () => {

  const [num, setNum] = useState({user:"Sudesh", age:24});

  const btnclickeed = () =>{
    const newNum = {...num};
    newNum.user = "Shubham";
    newNum.age = 26;
    setNum(newNum);
  }

  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnclickeed}>Click</button>
    </div>
  )
}

export default Destructuring
