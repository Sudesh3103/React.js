import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-full flex flex-nowrap overflow-x-auto gap-10 w-3/3 p-6'>
      {props.users.map(function(elem) {
        return <RightCard img={elem.img} user={elem} />
      })}
        

        
    </div>
  )
}

export default RightContent
