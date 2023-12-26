import React from 'react'
import banner from '../../../../../public/assets/banner.png'
 function Banner() {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div className='bg-red-50 h-3/4-screen pb-20 pt-40'>
<<<<<<< login-register
       <div className='container grid grid-cols-2  items-center justify-center'>
        <div className='mt-20'>
          <h2 className='text-3xl mb-3 font-semibold' >Learn From Anywhere</h2>
          <p className='text-lg mb-3 font-medium'>Technology is brining a massive wave of evolution on learning things on different ways.</p>
          <div>
            <button className='rounded-lg bg-red-500 mr-4 p-4 hover:bg-orange-300'>Get Started</button>
            <button className='rounded-lg bg-yellow-300 p-4 ml-5 hover:bg-red-300'>View Courses</button>
          </div>
        </div>
        <div className='mt-20' style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
          <img src={banner} alt="png" className={`transition-transform duration-500 ${isHovered ? 'animate-bounce' : 'animate-none'}` }
          onMouseEnter={() => 
            setIsHovered(false)
          }
          onMouseLeave={() => 
            setIsHovered(true)
          }
          />
        </div>

       </div>
    </div>
=======
    <div className='container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 grid grid-cols-1 sm:grid-cols-2 items-center justify-center'>
      <div className='mt-10 sm:mt-20'>
        <h2 className='text-3xl sm:text-4xl mb-3 font-semibold'>Learn From Anywhere</h2>
        <p className='text-lg sm:text-xl mb-3 font-medium'>Technology is bringing a massive wave of evolution on learning things in different ways.</p>
        <div className='flex flex-col sm:flex-row'>
          <button className='rounded-lg bg-red-500 mr-4 p-3 sm:p-4 mb-3 sm:mb-0 hover:bg-orange-300'>Get Started</button>
          <button className='rounded-lg bg-yellow-300 p-3 sm:p-4 hover:bg-red-300'>View Courses</button>
        </div>
      </div>
      <div className='mt-10 sm:mt-20'>
        <img
          src={banner}
          alt="png"
          className={`transition-transform duration-500 ${isHovered ? 'animate-bounce' : 'animate-none'}`}
          onMouseEnter={() => setIsHovered(false)}
          onMouseLeave={() => setIsHovered(true)}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
    </div>
  </div>
  

>>>>>>> HomePage
  )
}
export default Banner;
