import React from 'react'

const App = () => {

  function btnclick(){
    console.log("Button Clicked");
  }

  function mouseEnter(){
    console.log('Mouse Entered');
  }
  return (
    
      <button onMouseEnter={mouseEnter} onDoubleClick={btnclick}>Click Here</button>
    
  )
}

export default App
