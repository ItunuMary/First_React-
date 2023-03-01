import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
      <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" alt="" />
      <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
        <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
        <h2 className='text-4xl py-4 italics'>With Weekaway</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, cupiditate fugit?
           Itaque culpa voluptatem veniam quisquam ab fugiat dolor corporis, repudiandae nam eligendi
            ullam unde consectetur perferendis distinctio, reiciendis fuga!</p>
      </div>
      </div>
    </div>
  )
}

export default Hero