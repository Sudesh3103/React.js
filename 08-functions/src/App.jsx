import React from 'react'

const App = () => {

  function btnclick(){
    console.log("Button Clicked");
  }

  function mouseEnter(){
    console.log('Mouse Entered');
  }

  function usertyping(elem){
    console.log(elem.target.value);
  }

  const pagesrolling = (elem) => {
    if(elem>0){
      console.log('Scrolling Up');
    }
    else{
      console.log('Scrolling Down');
    }
  }

  return (
    <>
     <button onMouseEnter={mouseEnter} onDoubleClick={btnclick}>Click Here</button>
     <input  onChange={usertyping}  type="text" placeholder='Enter your Name' />

     <div onWheel={(elem)=>{
        pagesrolling(elem.deltaY);
     }}>
      <div className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div>
     </div>
    
    </>
     
  )
}

export default App
