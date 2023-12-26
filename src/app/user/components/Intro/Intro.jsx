import React from 'react'

 function Intro() {

    return (
        <div className='h-full bg-gray-100 flex justify-center items-center'>
          <div className='max-w-screen-lg w-full p-6'>
            <h1 className='text-2xl md:text-3xl lg:text-3xl font-bold text-center mb-8'>School Achievements</h1>
            <p className='text-lg md:text-xl lg:text-2xl text-center mb-12'>Here you can review some statistics about our Education Center</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='flex flex-col items-center bg-white p-8 rounded-xl shadow-md'>
                <div className='text-5xl text-yellow-600 mb-4'>
                  <i className="fa-solid fa-graduation-cap" />
                </div>
                <p className='text-lg font-semibold text-yellow-400 hover:text-yellow-500 mb-4'>3890 Students offline</p>
                <p className='text-sm text-center'>Lecturer with 15 years of experience</p>
              </div>
              <div className='flex flex-col items-center bg-white p-8 rounded-xl shadow-md'>
                <div className='text-5xl text-yellow-600 mb-4'>
                  <i className="fa-solid fa-video" />
                </div>
                <p className='text-lg font-semibold text-yellow-400 hover:text-yellow-500 mb-4'>5014 Teaching videos</p>
                <p className='text-sm text-center'>Includes courses and videos</p>
              </div>
              <div className='flex flex-col items-center bg-white p-8 rounded-xl shadow-md'>
                <div className='text-5xl text-yellow-600 mb-4'>
                  <i className="fa-solid fa-handshake" />
                </div>
                <p className='text-lg font-semibold text-yellow-400 hover:text-yellow-500 mb-4'>Over 200 partners</p>
                <p className='text-sm text-center'>Abroad and domestically</p>
              </div>
            </div>
          </div>
        </div>
      )
      
      
}
export default Intro;