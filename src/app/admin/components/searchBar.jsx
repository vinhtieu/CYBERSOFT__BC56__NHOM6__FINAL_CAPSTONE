import React from "react";
import { useDispatch } from "react-redux";
import { setUserTableStatus } from "../../../lib/redux/slices/statusSlice";
import { STATUS } from "../../../lib/constants/constants";

export default function SearchBar() {
  const dispatch = useDispatch();
  return (
    <div
      className={`flex items-center :mb-1 w-[95%] min-[777px]:w-[80%] min-[1100px]:mb-0 min-[1100px]:max-w-[350px] bg-white rounded-lg border border-[#cccccc]`}
      x-data="{ search: '' }">
      <div className="w-full">
        <input
          type="search"
          className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none "
          placeholder="search"
          x-model="search"
          onChange={(e) => {
            const key = e.target.value;
            if (key) {
              dispatch(setSearchKey(key));
            } else {
              dispatch(setUserTableStatus(STATUS.STAND_BY));
            }
          }}
        />
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(setUserTableStatus(STATUS.SEARCHING));
          }}
          type="submit"
          className="flex items-center  justify-center w-12 h-12 text-[#cccccc] rounded-r-lg">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
