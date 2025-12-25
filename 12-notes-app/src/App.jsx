import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <form className='flex justify-between flex-col gap-5 p-10 '>
        <input type="text" placeholder='Enter notes heading' className='w-1/2 px-5 py-2 border-2 rounded '/>
        <input type="text" placeholder='Write Details' className='w-1/2 h-32 px-5 py-2 border-2 rounded '/>
        <button className='bg-white w-full outline-none text-black px-5 py-2 rounded'>Add Notes</button>
      </form>
    </div>
  )
}

export default App
