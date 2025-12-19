import React from 'react'

const App = () => {
  return (
    <div>
      <input type="text" placeholder='enter your name' onChange={()=>{
        console.log('writing...')
      }} />
      <button>Submit</button>
    </div>
  )
}

export default App
