import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoHeader from '../../../../../public/assets/header.png'


function Header() {

  let navigate = useNavigate();

  let handleLogout = () => {
    //đưa ra trang chủ
    window.location.href = "/";
    localStorage.clear(); // xóa toàn bộ localStorage
  }
  
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isHomeOpen, setIsHomeOpen] = useState(false);

  const handleCoursesClick = () => {
    setIsCoursesOpen(!isCoursesOpen);
  };

  const handleHomeClick = () => {
    setIsHomeOpen(!isHomeOpen);
  };

  const closeMenus = () => {
    setIsCoursesOpen(false);
    setIsHomeOpen(false);
  };
  let renderNav = () => {
    // if (info) {
    //   return (
    //     <div className='mr-20'>
    //       <span className='mr-10 text-red-500 font-semibold'></span>
    //       <button onClick={handleLogout} type="submit" className="bg-blue-400 hover:bg-blue-70"></button>
    //     </div>
    //   )
    // }

    return (
      <div className="flex space-x-4">
        <div 
          className="relative mr-5"
            onMouseEnter={handleCoursesClick}
            onMouseLeave={closeMenus}
            onClick={handleCoursesClick}
            >
        <div className="cursor-pointer hover:text-gray-300">Home</div>
        {/* Dropdown */}
        {isCoursesOpen && (
        <div className="absolute bg-gray-800 text-white py-2 mt-2 z-10">
        <div onClick={closeMenus} className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">
          Home 1
        </div>
        <div onClick={closeMenus} className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">
          Home 2
        </div>
        <div onClick={closeMenus} className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">
          Home 3
        </div>
        <div onClick={closeMenus} className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">
          Home 4
          </div>
          </div>
            )}
          </div>
          <div
          className="relative  mr-5 "
            onMouseEnter={handleHomeClick}
            onMouseLeave={closeMenus}
            onClick={handleHomeClick}
            >
        <div className="cursor-pointer hover:text-gray-300 mx-4">Courses</div>
              {/* Dropdown */}
              {isHomeOpen && (
                <div className="absolute bg-gray-800 text-white py-2 mt-2 z-10">
                  <div onClick={closeMenus} className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">
                    Courses List
                  </div>
                  <div onClick={closeMenus} className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">
                    Courses Single
                  </div>
                  <div onClick={closeMenus} className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">
                    Intructors
                  </div>
                  <div onClick={closeMenus} className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">
                    Intructor Single
                  </div>
                </div>
              )}
            </div>
            <div className="hover:text-gray-300  mr-5">About</div>
            <div className='ml-4'>
                <button onClick={()=> {
                navigate("/login");
                }} className="hover:text-gray-300 border border-gray px-3 py-1 rounded-md bg-gray-400 mr-4">
              Login
              </button>
              <button onClick={() => {
              navigate("/register");
          }} className="hover:text-gray-300 border border-gray px-3 py-1 rounded-md bg-gray-400">
              Register
          </button>
        </div>
            
      </div>
    )
  }
  return (
    <header className="bg-white text-black py-4 h-24">
      <div className="container mx-auto flex justify-between items-center">
        <div className='flex items-center'>
          <img src={logoHeader} alt="Logo" className='h-10 mr-3'/>
           <div
            onClick={() => {
              navigate("/")
            }}
            className="text-2xl font-bold cursor-pointer">UDEMY</div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-black"
          />
          <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-4 rounded ml-2'> Search</button>
        </div>
        <nav className='p-x-5'>
            {renderNav()}
        </nav>
      </div>
    </header>
  );
}

export default Header;