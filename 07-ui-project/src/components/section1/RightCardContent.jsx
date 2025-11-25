import React from 'react'

const RightCardContent = () => {
  return (
    <div className='absolute top-0 left-0 h-full w-full bg-transparent p-4 flex flex-col justify-between'>
        <h2 className='bg-white text-2xl font-bold rounded-full h-12 w-12 flex justify-center items-center '>1</h2>
        <div>
            <p className='text-white text-lg leading-normal mb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam quibusdam autem adipisci omnis accusantium.</p>
            <div className='flex justify-between'>
              <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full text-lg '>Satisfied</button>
              <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full text-lg' ><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
        
    </div>
  )
}

export default RightCardContent
