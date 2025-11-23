import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1content = () => {
  return (
    <div className='py-10 flex justify-between gap-10 items-center px-18'>
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default Page1content
