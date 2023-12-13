import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fecthCategories, fecthCoursesByCategories } from '../../../../lib/redux/slices/DanhMucSlice';
import { NavLink } from 'react-router-dom';
const { TabPane } = Tabs;

export default function ListKhoaHoc() {
  const dispatch = useDispatch();
  const {categorise, coursesByCategory, loadingCategories, loadingCourses, errorCategories, errorCourses } =
    useSelector(state => state.data);

  useEffect(() => {
    dispatch(fecthCategories());
  }, [dispatch]);

  const handleTabChange = (category) => {

    dispatch(fecthCoursesByCategories(category));
  };

  if (errorCategories) {  
    return <div>Error loading categories: {errorCategories}</div>;
  }

  return (
    <div className='bg-red-50'>
      <div className='container'>
        <div className=''>
          <h1 className='font-bold text-3xl'>CATEGORY</h1>
        </div>
      <Tabs onChange={handleTabChange}>
        {categorise.map((category) => (
          <Tabs.TabPane tab={category.tenDanhMuc} key={category.maDanhMuc}>
            {loadingCourses ? (
              <div>Loading courses...</div>
            ) : errorCourses ? (
              <div>Error loading courses: {errorCourses}</div>
            ) : (
              <div className=' bg-red-50 pb-8'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grap-4'>
                {coursesByCategory[category.maDanhMuc]?.map((course) => (
                  <div key={course.maKhoaHoc} className='bg-white rounded-lg
                  shadow-md transition duration-300 ease-in-out transform hover:scale-105 m-2 p-2'>
                    <img src={course.hinhAnh} className='w-full h-48 oject-cover'/> 
                    <div className='p-4'>
                      <h3 className='text-lg font-semibold mb-2'>
                        {course.tenKhoaHoc}
                      </h3>
                      <NavLink className="h-10 w-full rounded block leading-10 text-center mt-2 bg-red-600 text-white"
                      style={{
                        color: "black",
                        backgroundColor:"red"
                      }}
                      >
                        View Course
                      </NavLink>
                    </div>
                  </div>
                ))}
              </div>
              </div>
            )}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
    </div>
  );
}
