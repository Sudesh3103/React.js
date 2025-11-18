import React from 'react'

const App = () => {
  return (
    <div className=' h-screen w-full bg-gray-900' >
      <h1 className='text-3xl text-white font-bold'>This is Tailwind CSS </h1>
      <div className='flex justify-around text-white'>
        <div>
          <h2>Logo</h2>
        </div>
        <div className='mt-3xl'>
          <span className='text-1xl p-3'>Home</span>
          <span className='text-1xl p-3'>About</span>
          <span className='text-1xl p-3'>Projects</span>
          <span className='text-1xl p-3'>Contact</span>
        </div>
      </div>
    </div>
  )
}

export default App
