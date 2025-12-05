import React, { useState } from 'react'
import Timefetch from './Timefetch';

const App = () => {


  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count+1)}>+</button>
      <input type="text" placeholder={count}  />
      <button onClick={() => count>0 && setCount(count-1)}>-</button>

      <Timefetch />
    </div>
  )
}

export default App
