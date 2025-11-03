import React from "react";
import Card from "./components/Card"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
    <Navbar />

    <div className="card">
      class is a keyword in react so we use className instead of class
      <h1 >Welcome to React</h1>
      <h2>Hiii</h2>
    </div>

    {Card()}

    <div>
      <Card />
    </div>
    </>
  )
}

export default App
