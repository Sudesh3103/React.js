import React from 'react'
import { useState } from 'react'

const BatchUpdate = () => {

    const [data, setData] = useState(0);

    const handleClick = () => {
        setData(prev => (prev + 1));//Batch update using previous state
        setData(prev => (prev + 1));//Batch update using previous state
        setData(prev => (prev + 1));//Batch update using previous state
    }
  return (
    <div>
      <h2>{data}</h2>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default BatchUpdate
