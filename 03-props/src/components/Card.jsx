import React from 'react'

const Card = (props) => {

    console.log(props.user);
    console.log(props.age);
  return (
    <div>
      <div className='card'>
        <img src="https://images.unsplash.com/photo-1761939433931-4305ebba3ec9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=875" alt="" />
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, molestias.</p>
        <button className='card-button'>View Profile </button>
      </div>
    </div>
  )
}

export default Card
