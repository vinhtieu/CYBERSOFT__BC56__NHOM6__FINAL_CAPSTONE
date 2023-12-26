import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseDetail } from '../../../../lib/redux/slices/DetailSlice';
import moment from 'moment';
import { courses } from '../../../../api/service';

export default function DetailPage() {
  let {id} = useParams()
  // console.log("🚀 ~ file: DetailPage.jsx:8 ~ DetailPage ~ maKhoaHoc:", id)
  let maKhoaHoc = id;
  const dispatch = useDispatch();
  const courseDetail = useSelector((state) =>
    state.detail.courseDetail);
  const isLoading = useSelector((state) => state.detail.loading)  
  const error = useSelector((state) => state.detail.error);



  const handleRegister = async () => {
    try{
      const res = await courses.dangKyKhoaHoc(UserLogin, maKhoaHoc);
      console.log("🚀 ~ file: DetailPage.jsx:29 ~ handleRegister ~ res:", res)
    }catch (error){
      console.log('lỗi', error)
    }
  }

  useEffect(() => {
    dispatch(fetchCourseDetail(maKhoaHoc))
  },[dispatch, maKhoaHoc])
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <p>Error: {error}</p>
  }
  return (
    <div class="bg-red-50  pt-10 mt-20 ">
  <div class="container max-w-[1300px] w-full mx-auto px-6 py-12 min-h-[550px] flex flex-col justify-center items-center">
    <h1 class="text-center font-bold text-xl text-red-500 shadow-lg px-5">COURSES DETAIL</h1>
    <div class="flex mt-8">
      <img class="h-45 object-cover rounded-md shadow-lg w-1/2 mr-8 hover:scale-105 duration-300 ease-in-out border-2 border-white" src={courseDetail?.hinhAnh} alt="detail" />
      <div class="flex flex-col w-1/2">
        <div class="mb-4">
          <p class="text-lg font-semibold mb-2">Tên Khóa Học:</p>
          <p class="text-base leading-loose text-gray-700">{courseDetail?.tenKhoaHoc}</p>
        </div>
        <div class="mb-4">
          <p class="text-lg font-semibold mb-2">Mô Tả:</p>
          <p class="text-base leading-loose text-gray-700">{courseDetail?.moTa}</p>
        </div>
        <div class="mb-4">
          <p class="text-lg font-semibold mb-2">Lượt xem:</p>
          <p class="text-base leading-loose text-gray-700">{courseDetail?.luotXem}</p>
        </div>
        <div class="mb-4">
          <p class="text-lg font-semibold mb-2">Ngày Tạo:</p>
          <p class="text-base leading-loose text-gray-700">{moment(courseDetail?.ngayTao).format("DD-MM-YYYY")}</p>
        </div>
        <NavLink>
          <button 
          onClick={handleRegister}
          class="py-2 px-10 bg-red-400 rounded-md text-white hover:bg-red-500 shadow-lg">
          Register Now
        </button>
        </NavLink>
      </div>
    </div>
  </div>
</div>
  )
}
