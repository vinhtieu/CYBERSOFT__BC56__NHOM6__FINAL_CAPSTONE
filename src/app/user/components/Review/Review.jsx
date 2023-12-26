import React from 'react';

export default function Review() {
  return (
    <div className='h-200'>
      <div className='w-11/12 mx-auto'>
        <div className='mt-4 text-2xl font-bold'>
            <h1>What People Say</h1>
        </div>
        <div className='flex justify-between items-center p-10'>
          <div>
            <div className='bg-slate-300 rounded-lg p-4 py-8 overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105'>
               <div className='text-2xl text-red-300'>
                    <i class="fa-solid fa-quote-left"></i>
                </div> 
              <p className='text-white'>
                It was really fun getting to know the team during the project.
                They were all helpful in answering my questions and made me feel completely at ease.
                The design ended up being twice as good as I could have ever envisioned!
              </p>
            </div>
            <div className='text-center mt-4'>
              <img src='' alt='Profile' className='rounded-full w-16 h-16 mx-auto' />
              <h3 className='my-4'>Jack Graham</h3>
              <p className='text-red-400'>Co founder, Coffee Inc</p>
            </div>
          </div>
          <div className='mx-4'>
            <div className='bg-slate-300 rounded-lg p-4 py-8 overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105'>
                <div className='text-2xl text-red-300'>
                    <i class="fa-solid fa-quote-left"></i>
                </div> 
              <p className='text-white'>
                It was really fun getting to know the team during the project.
                They were all helpful in answering my questions and made me feel completely at ease.
                The design ended up being twice as good as I could have ever envisioned!
              </p>
            </div>
            <div className='text-center mt-4'>
              <img src='' alt='Profile' className='rounded-full w-16 h-16 mx-auto' />
              <h3 className='my-4'>Aura Brooks</h3>
              <p className='text-red-400'>Graphic Designer, Owl Eyes</p>
            </div>
          </div>
          <div>
            <div className='bg-slate-300 rounded-lg p-4 py-8 overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105'>
                <div className='text-2xl text-red-300'>
                    <i class="fa-solid fa-quote-left"></i>
                </div> 
              <p className='text-white'>
                It was really fun getting to know the team during the project.
                They were all helpful in answering my questions and made me feel completely at ease.
                The design ended up being twice as good as I could have ever envisioned!
              </p>
            </div>
            <div className='text-center mt-4'>
              <img src='' alt='Profile' className='rounded-full w-16 h-16 mx-auto' />
              <h3 className='my-4'>Ali TUFAN</h3>
              <p className='text-red-400'>Client</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
