import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logoHeader from '../../../../../public/assets/header.png'
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {updateSearchTerm} from '../../../../lib/redux/slices/SearchSlice'
import { courses } from '../../../../api/service';




function Header() {

  let navigate = useNavigate();

  let handleLogout = () => {
    //đưa ra trang chủ
    window.location.href = "/";
    localStorage.clear(); // xóa toàn bộ localStorage
  }
  let renderNav = () => {
    // if (info) {
    //   return (
    //     <div className='mr-20'>
    //       <NavLink to="/profile" className='mr-10 text-red-500 font-semibold'>{info.hoten}</NavLink>
    //       <button onClick={handleLogout} type="submit" className="bg-blue-400 hover:bg-blue-70"></button>
    //     </div>
    //   )
    // }

    return (
      <div className="flex space-x-4">
        <div className='mt-1'>
          <NavLink to='/' className="cursor-pointer hover:text-gray-300 font-bold">Home</NavLink>
        </div>
        <div className='mt-1'>
          <NavLink to="/danhmuc" className="cursor-pointer hover:text-gray-300 mx-4 font-bold">Category</NavLink>
        </div>
            <div className='ml-4'>
                <button onClick={()=> {
                navigate("/login");
                }} className="hover:text-gray-300 border border-gray px-3 py-1 rounded-md bg-gray-400 mr-4 font-semibold">
              Login
              </button>
              <button onClick={() => {
              navigate("/register");
          }} className="hover:text-gray-300 border border-gray px-3 py-1 rounded-md bg-gray-400 font-semibold">
              Register
          </button>
        </div>
            
      </div>
    )
  }
  const [ scrollY, setScrollY] = useState(0);
  const handleScrollY = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setScrollY(scrollY)
  }
  useEffect (() =>{
    handleScrollY();
    window.addEventListener("scroll", handleScrollY);
    return() => {
      window.removeEventListener('scroll', handleScrollY);
    }
  }, [])
  const Navigation = styled.div`
  position : fixed;
  width: 100%;
  height: 80px;
  transition: all .5s;
`
const dispatch = useDispatch();
const inputRef = useRef(null);

const handleSubmit = async (event) => {
  event.preventDefault();
   navigate({ pathname: '/search' });
}

const handleInputChange = (event) => {
  const searchTerm = event.target.value;
  dispatch(updateSearchTerm(searchTerm))
}


  return (
    <Navigation className="bg-white text-black py-4 h-24 z-20" style={scrollY < 50 ? {backgroundColor: '#fff'} : {backgroundColor: 'rgba(1, 1, 1, 0.6)'}}>
      <div className="container mx-auto flex justify-between items-center">
        <div className='flex items-center'>
          <img src={logoHeader} alt="Logo" className='h-10 mr-3'/>
           <div
            onClick={() => {
              navigate("/")
            }}
            className="text-2xl font-bold cursor-pointer hover:text-gray-300">UDEMY</div>
        </div>
        <div>
        <form
          onSubmit={handleSubmit}
          className="relative mx-auto text-gray-600 lg:block hidden flex-1"
        >
          <input
          ref={inputRef}
            className="border-2 w-[500px] border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
            type="search"
            placeholder="search.... "
            onChange ={handleInputChange}
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-5">
            <svg
              className="text-gray-600 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style={{ enableBackground: "new 0 0 56.966 56.966" }}
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </form>
        </div>
        <nav className='space-x-5'>
            {renderNav()}
        </nav>
      </div>
    </Navigation>
  );
}

export default Header;
  