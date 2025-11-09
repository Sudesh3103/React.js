import React from 'react'

const User = (props) => {
  return (
    <div>
      <div style={{color: 'white', padding: '10px', borderRadius: '5px' }}>
       {props.name}
      </div>
    </div>
  )
}

export default User
