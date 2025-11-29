import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 overflow-hidden relative rounded-4xl'>
      <img className='h-full w-full object-cover opacity-90 ' src={props.img} alt="" />
      <RightCardContent />
      
    </div>
  )
}

export default RightCard
