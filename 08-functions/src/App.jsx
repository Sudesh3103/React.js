import React from 'react'

const App = () => {

  // function btnclick(){
  //   console.log("Button Clicked");
  // }

  // function mouseEnter(){
  //   console.log('Mouse Entered');
  // }

  function usertyping(elem){
    console.log(elem.target.value);
  }

  return (
    
      // <button onMouseEnter={mouseEnter} onDoubleClick={btnclick}>Click Here</button>
      <input  onChange={usertyping}  type="text" placeholder='Enter your Name' />
    
  )
}

export default App
