import React from 'react'
import {Bookmark} from 'lucide-react'

const App = () => {
  return (
    <div className="parent">
      <div className='card'>
        <div className='top'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFkkQhwA-14yQus_rij6VonTP5UT7IrorBkg&s" alt="" />
          <button>Save  <Bookmark /> </button>
        </div>

        <div className='center'> 
          <h3>Amazon <span>5 days ago</span> </h3>
          <h2>Senior Ui/Ux Designer</h2>
          <div className='role'>
            <h4>Part Time</h4>
            <h4>Full Time</h4>
          </div>
        </div>

       
        <hr className='line'/>
        <div className='bottom'>
          
          <div>
              <h3>$120/hr</h3>
              <p>Pune, India</p>
          </div>
          <div>
            <button>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
