import React from "react";
import {
  openUserDeleteModal,
  setDeleteUser,
} from "../../../lib/redux/slices/userDeleteModalSlice";
import {
  openUserEditModal,
  setInfo,
} from "../../../lib/redux/slices/userEditModalSlice";
import { openUserAddModal } from "../../../lib/redux/slices/userAddModalSlice";
import { useDispatch, useSelector } from "react-redux";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { Pagination } from "antd";
import Button from "./button";
import {
  setPage,
  setPageSize,
  updateURL,
} from "../../../lib/redux/slices/paginationSlice";

export default function Table({ header, body }) {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.pagination.page);
  const currentPageSize = useSelector((state) => state.pagination.pageSize);
  const totalItem = useSelector((state) => state.pagination.total);
  const renderTableHeader = (data) => {
    return data.map((title, index) => {
      return (
        <th key={index} className="pb-3 text-left min-w-[250px] text-lg">
          {title}
        </th>
      );
    });
  };

  const renderTableBody = (data) => {
    console.log(data);
    if (data.length > 0) {
      return data.map((user, index) => {
        return (
          <tr
            key={index}
            className="transition-all border-b border-dashed last:border-b-0 group text-left  ">
            <td className="p-3 pl-0 min-w-[250px]">
              <div className="flex items-center">
                <div className="relative inline-block shrink-0 rounded-2xl me-3">
                  <img
                    src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-47-new.jpg"
                    className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <a
                    href="!~"
                    className="mb-1 font-base transition-colors duration-200 ease-in-out text-lg/normal text-[#8f8f90] group-hover:text-black group-hover:font-semibold  hover:text-primary">
                    {user.hoTen.length < 15
                      ? user.hoTen
                      : user.hoTen.slice(0, 14) + "..."}
                  </a>
                </div>
              </div>
            </td>
            <td className="p-3 pl-0 min-w-[250px]">
              <span className="font-base text-[#8f8f90] group-hover:text-black group-hover:font-semibold   text-md/normal">
                {user.taiKhoan}
              </span>
            </td>
            <td className="p-3 pl-0 min-w-[250px]">
              <span className="inline-flex items-center py-1 mr-auto font-base text-center align-baseline rounded-lg text-base/none text-[#8f8f90] group-hover:text-black group-hover:font-semibold  bg-success-light">
                {user.email}
              </span>
            </td>
            <td className="p-3 pl-0 text-left ">
              {user.maLoaiNguoiDung === "HV" ? (
                <span className="text-center align-baseline inline-flex  py-3 mr-auto items-center font-base text-[.95rem] leading-none text-[#8f8f90] group-hover:text-black group-hover:font-semibold  bg-success-light rounded-lg">
                  {user.tenLoaiNguoiDung}
                </span>
              ) : (
                <span className="text-center align-baseline inline-flex  py-3 mr-auto items-center font-base text-[.95rem] leading-none text-[#8f8f90] group-hover:text-black group-hover:font-semibold  bg-success-light rounded-lg">
                  {user.tenLoaiNguoiDung}
                </span>
              )}
            </td>
            <td className="p-3 pl-0 text-left ">
              <span className="text-center align-baseline inline-flex  py-3 mr-auto items-center font-base text-[.95rem] leading-none text-[#8f8f90] group-hover:text-black group-hover:font-semibold  bg-success-light rounded-lg">
                {user.soDT}
              </span>
            </td>

            <td className="p-3 w-56 min-[1345px]:w-32 space-x-4 text-left min-w-[150px]">
              <Button
                onClickEvent={() => {
                  dispatch(openUserDeleteModal());
                  dispatch(setDeleteUser(user));
                }}
                className="!h-[40px] !w-[40px] !p-1.5 !mt-0 !border-0">
                <TrashIcon className="text-red-500" />
              </Button>
              <Button
                onClickEvent={() => {
                  dispatch(openUserEditModal());
                  dispatch(setInfo(user));
                }}
                className="!h-[40px] !w-[40px] !p-1.5 !mt-0 !border-0">
                <PencilSquareIcon className="text-blue-500" />
              </Button>
            </td>
          </tr>
        );
      });
    } else {
      return <></>;
    }
  };

  return (
    <div className="relative flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] max-w-full bg-white m-5 overflow-hidden ">
      <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
        <h3 className="m-2 ml-0 font-medium text-xl/tight text-dark">
          <span className="mr-3 text-3xl font-base text-dark">
            User Management
          </span>
        </h3>
        <Button
          onClickEvent={() => {
            dispatch(openUserAddModal());
          }}
          className="">
          Add User
        </Button>
      </div>
      {/* table Container */}
      <div className="py-8 pt-6 px-9 overflow-x-auto">
        <table className="max-w-[100%] w-full my-0 align-middle text-dark border-neutral-200">
          <thead className="align-bottom">
            <tr className="font-base text-left text-[0.95rem] text-secondary-dark">
              {renderTableHeader(header)}
              <th></th>
            </tr>
          </thead>
          <tbody className="text-left">{renderTableBody(body)}</tbody>
        </table>
      </div>
      {/* table Container */}
      <div className="p-5 px-9 flex justify-start">
        <Pagination
          total={totalItem}
          showTotal={(total) => `Total ${total} items`}
          current={currentPage}
          pageSize={currentPageSize}
          defaultPageSize={10}
          defaultCurrent={1}
          onChange={(page, pageSize) => {
            dispatch(setPage(page));
            dispatch(setPageSize(pageSize));
            dispatch(updateURL());
          }}
          size="medium"
          rootClassName="!ml-auto"
        />
      </div>
    </div>
  );
}

// // <div className="w-full max-w-full px-3 mx-auto">
// <div className="relative w-full flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
//   {/* <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30"> */}
//   {/* card header */}
//   <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
//     <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
//       <span className="mr-3 text-3xl font-base text-dark">
//         User Management
//       </span>
//     </h3>
//     <Button
//       onClickEvent={() => {
//         dispatch(openUserAddModal());
//       }}
//       className="">
//       Add User
//     </Button>
//   </div>
//   {/* end card header */}
//   {/* card body  */}
//   <div className="w-full overflow-auto py-8 pt-6 px-9 flex">
//     {/* <div className="flex-1 overflow-x-scroll"> */}
//     <table className="w-full my-0 align-middle text-dark border-neutral-200">
//       <thead className="align-bottom">
//         <tr className="font-base text-left text-[0.95rem] text-secondary-dark">
//           {renderTableHeader(header)}
//           <th></th>
//         </tr>
//       </thead>
//       <tbody className="text-left">{renderTableBody(body)}</tbody>
//     </table>
//   </div>
//   {/* </div> */}
// </div>
// // {/* </div> */}
// // </div>
