import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>

      <form className='flex justify-between items-start  p-10 '>
        <div className='flex gap-4 w-1/2 items-start flex-col'>
           <input type="text" placeholder='Enter notes heading' className='w-full px-5 py-2 border-2 rounded '/>
           <input type="text" placeholder='Write Details' className='w-full h-32 px-5 py-2 border-2 rounded '/>
           <button className='bg-white w-full text-black px-5 py-2 rounded'>Add Notes</button>
        </div>
        <img src="" alt="" />
      </form>
      
    </div>
  )
}

export default App
