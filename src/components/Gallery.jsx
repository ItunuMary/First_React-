import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
        <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://media.istockphoto.com/id/1456239830/photo/mother-and-daughters-walk-down-the-beach.jpg?b=1&s=170667a&w=0&k=20&c=eOB0SSuXdUw8d5loJjjqoAbqj57cNdmn6__hodWWIt8=" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://media.istockphoto.com/id/1404531424/photo/aerial-view-of-container-ship.jpg?b=1&s=170667a&w=0&k=20&c=15fhOvT2kqu7z8LbByIPDcvWA96p7LL_JdTN72KfcoI=" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://media.istockphoto.com/id/1452098664/photo/3d-illustration-of-piece-of-aquarium-or-ocean-with-landscape-island-paradise-isolated-travel.jpg?b=1&s=170667a&w=0&k=20&c=HsGew9zz_7zSJ-zYZkx8KE2ATGCIblZHVIU0H5enkpY=" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Gallery