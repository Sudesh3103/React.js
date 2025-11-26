import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1content = (props) => {
  return (
    <div className='py-10 flex justify-between gap-10  px-18'>
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1content
