import React from 'react'

const App = () => {
  return (
    <div className=' h-screen w-full bg-gray-900' >
      <h1 className='text-3xl text-white font-bold'>This is Tailwind CSS </h1>
      <div className='flex justify-around text-white'>
        <div>
          <h2>Logo</h2>
        </div>
        <div className='mt-5xl'>
          <span className='text-1xl p-3'>Home</span>
          <span className='text-1xl p-3'>About</span>
          <span className='text-1xl p-3'>Projects</span>
          <span className='text-1xl p-3'>Contact</span>
        </div>

        <div class="flex flex-row">
         <div class="basis-64">01</div>
         <div class="basis-64">02</div>
  <div class="basis-128">03</div>
</div>
      </div>
    </div>
  )
}

export default App
