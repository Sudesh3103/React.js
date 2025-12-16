import React, { useState } from 'react'
import Timefetch from './Timefetch';
import AdvanceUseState from './AdvanceUseState';
import Destructuring from './Destructuring';
import BatchUpdate from './BatchUpdate';

const App = () => {


  const [count, setCount] = useState(0);

  return (
    <>
    <div>
      <AdvanceUseState /> 
      <hr />

      <Timefetch />
      <hr /> 

      <h2>Counter using React Hooks - useState</h2>
      <button onClick={() => setCount(count+1)}>+</button>
      <input type="text" placeholder={count}  />
      <button onClick={() => count>0 && setCount(count-1)}>-</button>
      <button onClick={() => setCount(count+5)}>Jump by 5</button>
      <hr />

      <Destructuring />
      <hr />

      <BatchUpdate />
    </div>

    </>
  )
}

export default App
