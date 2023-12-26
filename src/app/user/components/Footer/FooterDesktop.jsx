import React from 'react';

const FooterDesktop = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 h-96 mt-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4 cursor-pointer">Contact</h2>
            <p className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Địa chỉ: Your Address</p>
            <p className='my-3 hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Số điện thoại: Your Phone Number</p>
            <p className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Email: Your Email</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Company</h2>
            <p className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>About Us</p>
            <p className='my-3 hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Blog Contact</p>
            <p className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Become a Teacher</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4 cursor-pointer">Programs</h2>
            <p className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Program 1</p>
            <p className='my-3 hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Program 2</p>
            <p className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Program 3</p>
            <p className='mt-3 hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Program 4</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4 cursor-pointer">Newsletters</h2>
            <p className='my-4 hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Your download should start automatically, if not Click here. Should I give up, huh?.</p>
            <input
              type="email"
              placeholder="Email Address"
              className="px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mt-2 text-black"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mt-4">
              Subscribe
            </button>
          </div>
        </div>
        <div >
          <p className='text-center hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Copyright Edumy © 2019. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterDesktop;