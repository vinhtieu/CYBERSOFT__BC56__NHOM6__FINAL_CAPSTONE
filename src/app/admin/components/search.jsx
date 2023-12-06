import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userService } from "../../../api/service";
import { setList, setSearchKey } from "../../../lib/redux/slices/userSlice";
import store from "../../../lib/redux/store";
import {
  setPage,
  setPageSize,
  setTotalItem,
} from "../../../lib/redux/slices/paginationSlice";

export default function Search() {
  const searchKeyword = useSelector((state) => state.user.searchKey);
  const dispatch = useDispatch();
  return (
    <div
      className="flex items-center max-w-md  bg-white rounded-lg border border-[#cccccc]"
      x-data="{ search: '' }">
      <div className="w-full">
        <input
          type="search"
          className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none "
          placeholder="search"
          x-model="search"
          onChange={(e) => {
            dispatch(setSearchKey(e.target.value));
          }}
        />
      </div>
      <div>
        <button
          onClick={() => {
            userService
              .getUsers(searchKeyword)
              .then((res) => {
                store.dispatch(setPage(res.data.currenPage));
                store.dispatch(setPageSize(res.data.count));
                store.dispatch(setTotalItem(res.data.totalCount));
                store.dispatch(setList(res.data.items));
              })
              .catch((err) => {
                console.log(err);
              });
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
