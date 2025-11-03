import React from 'react'

const App = () => {
  return (
    <div>
      <h1>Welcome to React</h1>
      <h2>Hiii</h2>
    </div>

    // We can not write multiple elements inside one function it will throw error
    // <h1>Hello</h1>

    // to wrap the multiple Elements into a single function 
    // without creating multiple divs we use react fragments
    // i.e  <> </>
  )
}

export default App

