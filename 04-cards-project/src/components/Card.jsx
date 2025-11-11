
import {Bookmark} from 'lucide-react'
// lucide-react is a package that provides React components for Lucide icons.

const Card = (props) => {

  console.log(props.company);
  return (
    <>
    <div className="parent">
      <div className='card'>
        <div>
          <div className='top'>
            <img src={props.logo} alt="" />
            <button>Save  <Bookmark size={10} /> </button>
          </div>
        </div>
        

        <div className='center'> 
          <h3>{props.company} <span>{props.date}</span> </h3>
          <h2>{props.jobTitle}</h2>
          <div className='tag'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>

       
       
        <div className='bottom'>
          
          <div>
              <h3>{props.pay}</h3>
              <p>{props.location}</p>
          </div>
          
            <button>Apply Now</button>
          
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Card
