import React from 'react'

 function Intro() {
  return (
    <div className='h-96'>
        <div style={{
        width: '70%',
        margin: '0 auto'
    }}>
        <div className='pt-10'>
             <div>
                <h1 className='text-2xl text-center mb-3 font-bold'>Scholl Achievements</h1>
                <p className='text-xl text-center font-semibold'>Here you can review some statistics about our Education Center</p>
            </div>
            <div className='flex justify-between items-center'>
            <div className='flex justify-center items-center mt-20'>
                <div className='text-5xl mr-3 text-yellow-600'>
                    <i className="fa-solid fa-graduation-cap" />
                </div>
                <div>
                    <p className='text-md font-semibold text-yellow-400 hover:text-yellow-500 mb-2'>3890 Student ofline</p>
                    <p>
                        Lecturer with 15 years of experience
                    </p>
                </div>
            </div>
            <div className='flex justify-center items-center mt-20'>
                <div className='text-5xl mr-3 text-yellow-600'>
                    <i className="fa-solid fa-video" />
                </div>
                <div>
                    <p className='text-md font-semibold text-yellow-400 hover:text-yellow-500 mb-2'> 5014 teaching videos</p>
                    <p>Includes course and videos</p>
                </div>
            </div>
            <div className='flex justify-center items-center  mt-20'>
                <div  className='text-5xl mr-3 text-yellow-600'>
                    <i className="fa-solid fa-handshake" />
                </div>
                <div>
                    <p className='text-md font-semibold text-yellow-400 hover:text-yellow-500 mb-2'>Over 200 partners</p>
                    <p>Abroad and domestically</p>
                </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    
  )
}
export default Intro;