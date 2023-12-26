import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setList } from '../../../../lib/redux/slices/courseSlice'
import { courses } from '../../../../api/service';
import { NavLink, Link } from 'react-router-dom';

export default function ListCourses() {

  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(8); // Số lượng khóa học trên mỗi trang
  const [maKhoaHoc, setMaKhoaHoc] = useState();


  const dispatch = useDispatch();
  const courseList = useSelector((state) => state.course.list);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await
          courses.getListCourse();
        dispatch(setList(response.data));
      } catch (error) {
        console.log('error')
      }
    };
    fetchData();
  }, [dispatch])

  // Logic phân trang
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courseList.slice(indexOfFirstCourse, indexOfLastCourse);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:3,
    slidesToScroll:1,
  }

  let renderList = () => {
    return (
      <div className='container'>
        <h1 className='text-4xl font-semibold mb-10 shadow-lg text-center'>Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentCourses.map((course) => (
        <div key={course.maKhoaHoc} className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105 m-2 p-2">
          <img src={course?.hinhAnh} alt={course.tenKhoaHoc} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{course.tenKhoaHoc}</h3>
            <NavLink className="h-10 w-ful rounded block leading-10
            text-center mt-2 bg-red-600 text-white"
            to={`detail/${course?.maKhoaHoc}`}
            style ={{
              color:'black',
              backgroundColor:'red'
            }}
            >
              View Course
            </NavLink>
          </div>
           
        </div>
      ))}
    </div>
    </div>
    )
  }
  return (
    <div className='pt-10 bg-red-50 pb-8'>
      {renderList()}
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: Math.ceil(courseList.length / coursesPerPage) }, (_, i) => i + 1).map(
          (number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-3 py-1 rounded-full focus:outline-none ${
                currentPage === number ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {number}
            </button>
          )
        )}
      </div>
      <Link to="/danhmuc">
        <button className="block mx-auto mt-4 bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
          View All Courses
        </button>
      </Link>
    </div>
  )
}
