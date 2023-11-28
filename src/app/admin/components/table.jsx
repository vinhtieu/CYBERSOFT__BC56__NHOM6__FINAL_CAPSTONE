import React from "react";
import {
  openUserDeleteModal,
  setDeleteUser,
} from "../../../lib/redux/slices/userDeleteModalSlice";
import {
  openUserEditModal,
  setEditUser,
} from "../../../lib/redux/slices/userEditModalSlice";
import { useDispatch } from "react-redux";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";

export default function Table({ header, body }) {
  const dispatch = useDispatch();
  const renderTableHeader = (data) => {
    return data.map((title, index) => {
      return (
        <th key={index} className="pb-3 text-left min-w-[175px] text-lg">
          {title}
        </th>
      );
    });
  };

  const renderTableBody = (data) => {
    return data.map((user, index) => {
      return (
        <tr
          key={index}
          className="transition-all border-b border-dashed last:border-b-0 group">
          <td className="p-3 pl-0">
            <div className="flex items-center">
              <div className="relative inline-block shrink-0 rounded-2xl me-3">
                <img
                  src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-47-new.jpg"
                  className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                  alt
                />
              </div>
              <div className="flex flex-col justify-start">
                <a
                  href="!~"
                  className="mb-1 font-base transition-colors duration-200 ease-in-out text-lg/normal text-[#8f8f90] group-hover:text-black group-hover:font-semibold  hover:text-primary">
                  {user.hoTen}
                </a>
              </div>
            </div>
          </td>
          <td className="p-3 pl-0 text-left">
            <span className="font-base text-[#8f8f90] group-hover:text-black group-hover:font-semibold   text-md/normal">
              {user.taiKhoan}
            </span>
          </td>
          <td className="p-3 pl-0 text-left">
            <span className="inline-flex items-center py-1 mr-auto font-base text-center align-baseline rounded-lg text-base/none text-[#8f8f90] group-hover:text-black group-hover:font-semibold  bg-success-light">
              {user.email}
            </span>
          </td>
          <td className="p-3 pl-0 text-left">
            <span className="text-center align-baseline inline-flex  py-3 mr-auto items-center font-base text-[.95rem] leading-none text-[#8f8f90] group-hover:text-black group-hover:font-semibold  bg-success-light rounded-lg">
              {user.soDt}
            </span>
          </td>
          <td className="p-3 space-x-8 text-left">
            <button
              onClick={() => {
                dispatch(openUserDeleteModal());
                dispatch(setDeleteUser(user));
              }}
              className="ml-auto relative  bg-light-dark hover:text-primary inline-block h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
              <figure className="flex items-center justify-center w-full h-full p-0 m-0 leading-none shrink-0">
                <TrashIcon className="text-red-500" />
              </figure>
            </button>
            <button
              onClick={() => {
                dispatch(openUserEditModal());
                dispatch(setEditUser(user));
              }}
              className="ml-auto relative  bg-light-dark hover:text-primary inline-block h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
              <figure className="flex items-center justify-center w-full h-full p-0 m-0 leading-none shrink-0">
                <PencilSquareIcon className="text-blue-500" />
              </figure>
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <div className="w-full max-w-full px-3 mx-auto">
        <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
          <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
            {/* card header */}
            <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
              <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                <span className="mr-3 text-3xl font-base text-dark">
                  User Management
                </span>
              </h3>
            </div>
            {/* end card header */}
            {/* card body  */}
            <div className="flex-auto block py-8 pt-6 px-9">
              <div className="overflow-x-auto">
                <table className="w-full my-0 align-middle text-dark border-neutral-200">
                  <thead className="align-bottom">
                    <tr className="font-base text-left text-[0.95rem] text-secondary-dark">
                      {renderTableHeader(header)}
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="text-left">{renderTableBody(body)}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
