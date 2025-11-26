import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 overflow-hidden relative bg-amber-500 rounded-4xl'>
      <img className='h-full w-full object-cover opacitiy-50' src={props.img} alt="" />
      <RightCardContent />
    </div>
  )
}

export default RightCard
