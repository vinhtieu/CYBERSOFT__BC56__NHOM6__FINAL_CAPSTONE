import React from 'react';

const FooterDesktop = () => {
  return (
    <footer class="bg-gray-800 text-white py-8 mt-8">
  <div class="container mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 ml-2 lg:grid-cols-4 gap-8">
      <div class="mb-8 sm:mb-0 sm:col-span-1 justify-center lg:col-span-auto">
        <h2 class="text-xl font-semibold mb-4 cursor-pointer">Contact</h2>
        <p class='text-sm hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Địa chỉ: Your Address</p>
        <p class='text-sm my-2 hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Số điện thoại: Your Phone Number</p>
        <p class='text-sm hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Email: udemy@gmail.com</p>
      </div>

      <div class="mb-8 sm:mb-0 sm:col-span-1 justify-center ml-2 lg:col-span-auto">
        <h2 class="text-xl font-semibold mb-4">Company</h2>
        <p class='text-sm hover:text-gray-300 transition-colors duration-300 cursor-pointer'>About Us</p>
        <p class='text-sm my-2 hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Blog Contact</p>
        <p class='text-sm hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Become a Teacher</p>
      </div>

      <div class="mb-8 sm:mb-0 sm:col-span-1 justify-center ml-2 lg:col-span-auto">
        <h2 class="text-xl font-semibold mb-4 cursor-pointer">Programs</h2>
        <p class='text-sm hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Program 1</p>
        <p class='text-sm my-2 hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Program 2</p>
        <p class='text-sm hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Program 3</p>
        <p class='text-sm mt-2 hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Program 4</p>
      </div>

      <div class="sm:col-span-1 justify-center ml-2 lg:col-span-auto">
        <h2 class="text-xl font-semibold mb-4 cursor-pointer">Newsletters</h2>
        <p class='text-sm my-3 hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Your download should start automatically, if not Click here. Should I give up, huh?.</p>
        <input
          type="email"
          placeholder="Email Address"
          class="px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mt-2 text-black text-sm"
        />
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mt-4 text-sm">
          Subscribe
        </button>
      </div>
    </div>

    <div class="text-center mt-6">
      <p class='text-sm hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Copyright Edumy © 2019. All Rights Reserved.</p>
    </div>
  </div>
</footer>
  );
};

export default FooterDesktop;