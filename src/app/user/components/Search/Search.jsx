import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { courses } from '../../../../api/service';
import {updateSearchResults, setSuggestions} from '../../../../lib/redux/slices/SearchSlice'
import { NavLink } from 'react-router-dom';

export default function Search() {
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const searchResults = useSelector((state) => state.search.searchResults)
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSearchResults = async () => {
      try{
        const response = await courses.searchCourse(searchTerm);
        dispatch(updateSearchResults(response.data))
      }catch (error){
        console.error('Error fetching search results:', error)
      }
    };
    if(searchTerm) {
      fetchSearchResults();
    }else {
      dispatch(updateSearchResults([]));
    }
  }, [searchTerm, dispatch])
  return (
    <div className='mt-10 pt-20 container'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {searchResults.map((course) => (
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
