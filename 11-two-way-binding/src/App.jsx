import React from 'react'

const App = () => {
  return (
    <div>
      <input type="text" placeholder='enter your name' onChange={(e)=>{
        console.log(e.target.value)
      }} />
      <button>Submit</button>
    </div>
  )
}

export default App
