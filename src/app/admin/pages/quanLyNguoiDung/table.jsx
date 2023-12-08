import React from "react";
import {
  openUserDeleteModal,
  setDeleteUser,
} from "../../../../lib/redux/slices/userDeleteModalSlice";
import {
  openUserEditModal,
  setCourses,
  setInfo,
} from "../../../../lib/redux/slices/userEditModalSlice";
import { useDispatch, useSelector } from "react-redux";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { Pagination } from "antd";
import Button from "../../components/button";
import SearchBar from "../../components/searchBar";
import {
  setPage,
  updateURL,
} from "../../../../lib/redux/slices/paginationSlice";
import { userService } from "../../../../api/service";
import { MODE, STATUS } from "../../../../lib/constants/constants";

export default function Table({ header, body }) {
  const userTableData = useSelector((state) => state.status.userTableData);
  const sidebarMode = useSelector((state) => state.sidebar.mode);
  const currentPage = useSelector((state) => state.pagination.page);
  const totalItem = useSelector((state) => state.pagination.total);
  const dispatch = useDispatch();

  const handleGetUserDetailByPhoneNumber = (data) => {
    userService
      .getUserDetail(`${data}`)
      .then((res) => {
        dispatch(setInfo(res.data[0]));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGetCourseByUser = (acc) => {
    userService
      .getCoursesByUser({
        taiKhoan: acc,
      })
      .then((res) => {
        dispatch(setCourses(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderTableHeader = (data) => {
    return data.map((title, index) => {
      return index === 0 ? (
        <th
          key={index}
          className="p-3 text-left min-w-[250px] text-lg leading-6">
          {title}
        </th>
      ) : (
        <th key={index} className="p-3 pl-0 text-left min-w-[150px] text-lg">
          {title}
        </th>
      );
    });
  };

  const renderTableBody = (data) => {
    if (data.length > 0) {
      return data.map((user, index) => {
        return (
          <tr
            key={index}
            className="transition-all border-b border-dashed last:border-b-0 group text-left  hover:bg-[#f5f5f5]">
            <td className="p-3 w-[calc(100%/5)]">
              <div className="flex items-center">
                <div className="relative inline-block shrink-0 rounded-2xl me-3">
                  <img
                    src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-47-new.jpg"
                    className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <span className="mb-1  transition-all  ease-in-out  text-[#8f8f90]  group-hover:text-black text-base">
                    {user?.hoTen.length < 15
                      ? user?.hoTen
                      : user?.hoTen.slice(0, 14) + "..."}
                  </span>
                </div>
              </div>
            </td>
            <td className="p-3 w-[calc(100%/5)]  pl-0 ">
              <span className=" text-[#8f8f90] group-hover:text-black transition-all text-base">
                {user?.taiKhoan}
              </span>
            </td>
            <td className="p-3 w-[calc(100%/5)]  pl-0 ">
              <span className="inline-flex items-center py-1 mr-auto  text-center align-baseline rounded-lg text-base text-[#8f8f90]  group-hover:text-black transition-all">
                {user?.email}
              </span>
            </td>
            <td className="p-3 w-[calc(100%/5)]  pl-0 text-left ">
              <span className="inline-flex items-center p-2 py-3 mr-auto text-base leading-none text-center text-green-500 align-baseline border border-green-500 rounded-lg">
                {user?.tenLoaiNguoiDung}
              </span>
            </td>
            <td className="p-3 w-[calc(100%/5)]  pl-0 text-left ">
              <span className="text-center text-base align-baseline inline-flex  py-3 mr-auto items-center   leading-none text-[#8f8f90] group-hover:text-black transition-all rounded-lg">
                {user?.soDT?.length < 10
                  ? user?.soDT
                  : user?.soDT?.slice(0, 14) + "..."}
              </span>
            </td>
            <td className="p-3 space-x-4 text-left min-w-[150px]">
              <Button
                onClickEvent={() => {
                  dispatch(openUserDeleteModal());
                  dispatch(setDeleteUser(user));
                }}
                className="!h-[40px] !w-[40px] !p-1.5 !mt-0 !border-0 !inline-block">
                <TrashIcon className="text-red-500" />
              </Button>
              <Button
                onClickEvent={() => {
                  dispatch(openUserEditModal());
                  handleGetUserDetailByPhoneNumber(user?.soDT);
                  handleGetCourseByUser(user?.taiKhoan);
                }}
                className="!h-[40px] !w-[40px] !p-1.5 !mt-0 !border-0  !inline-block">
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
    <div
      className="relative flex flex-col break-words min-w-0 bg-clip-border
                  max-[389.98px]:px-2 max-[389.98px]:py-8
                  max-[767.98px]:px-8 max-[767.98px]:py-6
                  px-8 py-8 rounded-[.95rem] max-w-full bg-white m-5 overflow-hidden ">
      <div
        className={` flex flex-wrap  p-0 max-[767.98px]:mb-6 mb-4 items-center
         min-[1100px]:flex-row
        flex-col justify-between gap-4
        `}>
        <h3
          className={` ml-0 font-medium min-[1100px]:pl-3  max-[389.98px]:text-xl text-3xl block`}>
          User Management
        </h3>
        <SearchBar></SearchBar>
      </div>
      {/* table Container */}
      <div className="mb-4 overflow-x-auto">
        <table className="max-w-[100%] w-full my-0 align-middle  border-neutral-200">
          <thead className="align-bottom">
            <tr className="text-left ">
              {renderTableHeader(header)}
              <th></th>
            </tr>
          </thead>
          <tbody className="text-left">{renderTableBody(body)}</tbody>
        </table>
      </div>
      {/* table Container */}
      <div
        className={`p-3 flex flex-row items-center  max-[939.98px]:justify-center justify-between`}>
        <span className="text-base max-[939.98px]:hidden">{`Total ${totalItem} items`}</span>
        <Pagination
          simple={sidebarMode === MODE.MOBILE ? true : false}
          disabled={userTableData === STATUS.PENDING ? true : false}
          total={totalItem}
          current={currentPage}
          pageSize={10}
          showSizeChanger={false}
          defaultPageSize={10}
          defaultCurrent={1}
          rootClassName="text-lg"
          onChange={(page) => {
            dispatch(setPage(page));
            dispatch(updateURL());
          }}
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
//     <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium ">
//       <span className="mr-3 text-3xl ">
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
//   <div className="flex w-full py-8 pt-6 overflow-auto px-9">
//     {/* <div className="flex-1 overflow-x-scroll"> */}
//     <table className="w-full my-0 align-middle border-neutral-200">
//       <thead className="align-bottom">
//         <tr className=" text-left text-[0.95rem] text-secondary-dark">
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
