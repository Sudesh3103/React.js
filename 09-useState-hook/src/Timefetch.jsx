import React from 'react'   
import { useState, useEffect } from'react'

const Timefetch = () => {

    const [currentDateTime, setCurrentDateTime] = useState({
        date : new Date().toLocaleString(),
        time : new Date().toLocaleTimeString()
    })

    useEffect(() => {
      const interval = setInterval (() => {
        const now = new Date();
        setCurrentDateTime({
            date : now.toLocaleDateString(),
            time : now.toLocaleTimeString()
        })
      },1000)
    
      return () => clearInterval(interval)
    }, [])
    



  return (
    <div>
      <h1>Welcome to Timefetch using UseState and useEffect</h1>
      <h2>Date : {currentDateTime.date}</h2>
      <h2>Time : {currentDateTime.time}</h2>
      
    </div>
  )
}

export default Timefetch
