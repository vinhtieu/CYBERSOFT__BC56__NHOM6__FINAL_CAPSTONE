import React from 'react'
import { useSelector } from 'react-redux';
import { Card } from 'antd';
import { courses } from '../../../../api/service';
import { NavLink } from 'react-router-dom';

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'


export default function Profile() {
     let UserProfile = useSelector((state) => state.user.userProfile);

     const handleCancelEnrollment = (data) => {
      courses.huyGhiDanh({data})
      .then((res) => {
        const updatedUserProfile = {
          ...UserProfile,
          chiTietKhoaHocGhiDanh: UserProfile.chiTietKhoaHocGhiDanh.filter(
            (course) => course.maKhoaHoc !== maKhoaHoc
          )}

          console.log(res);
       })
       .catch((err) => {
            console.log(err);
       });
     }

    return (

      <div className='bg-red-50'>
                  <div className="ThongTinCaNhan container py-20">
      {/* <p className="text-xl mb-10 font-bold">Profile</p> */}
      {/* <div className="text-lg font-semibold border-b pb-3 flex">

        <div>
          <img
            src="https://st.quantrimang.com/photos/image/2017/04/08/anh-dai-dien-FB-200.jpg"
            alt=""
            className="w-40"
          />
        </div>
        <div className="pl-5">
          <p>
            <span>Tài Khoản :{UserProfile.taiKhoan}</span>
            <span className="text-amber-500 mr-2"></span>
            <span className="text-blue-500 text-sm">
             
            </span>
          </p>
          <p>
            <span>Email: {UserProfile.email}</span>
            <span className="text-amber-500 mr-2"></span>
          </p>
          <p>
            <span>Họ tên: {UserProfile.hoTen}</span>
            <span className="text-amber-500 mr-2"></span>
          </p>
          <p>
            <span>Số điện thoại:  {UserProfile.soDT}</span>
            <span className="text-amber-500"></span>
          </p>
        </div>

      </div> */}
     
      <form>
        
        <div className="space-y-12 ">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you share.
            </p>
  
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Account
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">{UserProfile.taiKhoan}</span>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder=""
                    />
                  </div>
                </div>
  
                <div className="mt-2">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Name
                </label>
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">{UserProfile.hoTen}</span>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className='mt-2'>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  SoDT
                </label>
                  <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">{UserProfile.soDT}</span>
                  <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
  
  
              <div className="col-span-full">
                <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                  Photo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                  <button
                    type="button"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Change
                  </button>
                </div>
              </div>
  
              <div className="col-span-full">
                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                  Cover photo
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
  
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">{UserProfile.email}</span>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder=""
                    />
                  </div>
                </div>
  
          </div>
        </div>
  
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>

      <div>
        <span className=" font-semibold text-amber-500 text-[40px] my-5 mt-2">
          Course you have register for

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {UserProfile.chiTietKhoaHocGhiDanh.map((item,index) => { 
            return <Card
                      key={index}
                      value={item.maKhoaHoc}
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt="example" src={item.hinhAnh} className='h-48 object-cover' />}
                    >
                      {item.tenKhoaHoc}
                      <NavLink className="h-10 w-ful rounded block leading-10
            text-center mt-2 bg-red-600 text-white"
                       style ={{
                        color:'black',
                        backgroundColor:'red'
                       }}
                       >
                    Hủy ghi danh
                  </NavLink>           
             </Card>          
           })}
           </div>
        </span>
      </div>
    </div>

      </div>


    )
}