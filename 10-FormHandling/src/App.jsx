import React from 'react'

const App = () => {

  //Form submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  }



  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <input type="text" placeholder='Enter your name' name="" id="" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
