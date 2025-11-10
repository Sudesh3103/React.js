
import {Bookmark} from 'lucide-react'
// lucide-react is a package that provides React components for Lucide icons.

const Card = () => {
  return (
    <>
    <div className="parent">
      <div className='card'>
        <div>
          <div className='top'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFkkQhwA-14yQus_rij6VonTP5UT7IrorBkg&s" alt="" />
            <button>Save  <Bookmark size={10} /> </button>
          </div>
        </div>
        

        <div className='center'> 
          <h3>Amazon <span>5 days ago</span> </h3>
          <h2>Senior Ui/Ux Designer</h2>
          <div className='tag'>
            <h4>Part Time</h4>
            <h4>Full Time</h4>
          </div>
        </div>

       
       
        <div className='bottom'>
          
          <div>
              <h3>$120/hr</h3>
              <p>Pune, India</p>
          </div>
          
            <button>Apply Now</button>
          
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Card
