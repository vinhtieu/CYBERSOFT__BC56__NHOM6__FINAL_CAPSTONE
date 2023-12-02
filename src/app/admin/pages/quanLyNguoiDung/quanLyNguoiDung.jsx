// import { useMediaQuery } from "react-responsive";
// import BigDesktopLayout from "./bigDesktopLayout";
// import DesktopLayout from "./desktopLayout";

// const BigDesktop = ({ children }) => {
//   const isBigDesktop = useMediaQuery({ minWidth: 1670 });
//   return isBigDesktop ? children : null;
// };
// const Desktop = ({ children }) => {
//   const isDesktop = useMediaQuery({ minWidth: 1280, maxWidth: 1669.98 });
//   return isDesktop ? children : null;
// };

// const TabletLandscape = ({ children }) => {
//   const isTabletLandscape = useMediaQuery({ minWidth: 940, maxWidth: 1279.98 });
//   return isTabletLandscape ? children : null;
// };

// const TabletPortrait = ({ children }) => {
//   const isTabletPortrait = useMediaQuery({ minWidth: 666, maxWidth: 939.98 });
//   return isTabletPortrait ? children : null;
// };

// const Mobile = ({ children }) => {
//   const isMobile = useMediaQuery({ maxWidth: 665.98 });
//   return isMobile ? children : null;
// };

// export default function QuanLyNguoiDung() {
//   return (
//     <>
//       {/* <BigDesktop>
//         <BigDesktopLayout></BigDesktopLayout>
//       </BigDesktop>
//       <Desktop>
//         <DesktopLayout></DesktopLayout>
//       </Desktop> */}
//     </>
//   );
// }

import React, { useEffect } from "react";
import ReactModal from "react-modal";
import { Toaster } from "react-hot-toast";
import { Table } from "../../components";
import { useDispatch, useSelector } from "react-redux";

import {
  XCircleIcon,
  ChevronDownIcon,
  ExclamationTriangleIcon,
  PencilSquareIcon,
  Cog8ToothIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";
import { Card, Dropdown, Tabs, Typography } from "antd";
import { Button } from "../../components";

import Meta from "antd/es/card/Meta";
import {
  handleCloseModal,
  handleDeleteUser,
  handleGetUsers,
  handleGetCoursesByUser,
  handleMenuClick,
} from "./helpers";

export default function QuanLyNguoiDung() {
  const userList = useSelector((state) => state.user.list);
  const userInfo = useSelector((state) => state.userEditModal.info);
  const userCourses = useSelector((state) => state.userEditModal.courses);
  const deleteTarget = useSelector((state) => state.userDeleteModal.deleteUser);
  const currentPage = useSelector((state) => state.pagination.page);
  const currentPageSize = useSelector((state) => state.pagination.pageSize);
  const editModalOpen = useSelector((state) => state.userEditModal.isOpen);
  const deleteModalOpen = useSelector((state) => state.userDeleteModal.isOpen);
  const addModalOpen = useSelector((state) => state.userAddModal.isOpen);

  const tableHeader = [
    "Name",
    "Account",
    "Email",
    "Loại Người Dùng",
    "Telephone",
  ];

  const modalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "30vw",
      minWidth: "30vw",
      maxWidth: "80vw",
      height: "62vh",
      minHeight: "40vh",
      maxHeight: "80vh",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const items = [
    {
      label: "1st menu item",
      key: "1",
      // icon: <UserOutlined />,
    },
    {
      label: "2nd menu item",
      key: "2",
      // icon: <UserOutlined />,
    },
    {
      label: "3rd menu item",
      key: "3",
      // icon: <UserOutlined />,
      danger: true,
    },
    {
      label: "4rd menu item",
      key: "4",
      // icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];

  const profileCatagories = [
    {
      key: "1",
      label: "Info",
      children: (
        <form>
          <div className="flex-1">
            {/* <dl className="divide-y divide-gray-100"> */}
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-base font-medium leading-6 text-gray-900">
                Full name
              </dt>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder={userInfo.hoTen}
                className="col-span-2 block w-full p-2 text-gray-900 placeholder:text-black sm:text-base sm:leading-6 border-b-2 border-b-slate-300  focus:border-b-black focus-visible:outline-none"
              />
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-base font-medium leading-6 text-gray-900">
                Username
              </dt>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder={userInfo.taiKhoan}
                className="col-span-2 block w-full p-2 text-gray-900 placeholder:text-black  sm:text-base sm:leading-6 border-b-2 border-b-slate-300  focus:border-b-black focus-visible:outline-none"
              />
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-base font-medium leading-6 text-gray-900">
                Email address
              </dt>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder={userInfo.email}
                className="col-span-2 block w-full p-2 text-gray-900 placeholder:text-black  sm:text-base sm:leading-6 border-b-2 border-b-slate-300  focus:border-b-black focus-visible:outline-none"
              />
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-base font-medium leading-6 text-gray-900">
                Phone Number
              </dt>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder={userInfo.soDt}
                className="col-span-2 block w-full p-2 text-gray-900 placeholder:text-black  sm:text-base sm:leading-6 border-b-2 border-b-slate-300  focus:border-b-black focus-visible:outline-none"
              />
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <h3 className="text-base font-medium leading-6 text-gray-900 text-">
                Position
              </h3>
              <Dropdown
                menu={{
                  items,
                  onClick: handleMenuClick,
                  selectable: true,
                  defaultSelectedKeys: ["3"],
                }}>
                <Typography.Link>
                  <div className="flex flex-row gap-2 items-center border rounded-md px-3 py-2 w-fit">
                    Selectable
                    <ChevronDownIcon className="w-5 h-5" />
                  </div>
                </Typography.Link>
              </Dropdown>
            </div>
            {/* </dl> */}
          </div>
        </form>
      ),
    },
    {
      key: "2",
      label: "Courses",
      children: !editModalOpen ? (
        <span></span>
      ) : (
        <div className="flex flex-row flex-wrap overflow-auto">
          {userCourses.length > 0 ? (
            userCourses.map((course) => {
              console.log(course);
              return (
                <section key={course.maKhoaHoc} className="w-1/2 p-2">
                  <Card
                    rootClassName="w-full"
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                    actions={[
                      <PencilSquareIcon
                        className="w-6 h-6 mx-auto"
                        key="setting"
                      />,
                      <Cog8ToothIcon className="w-6 h-6 mx-auto" key="edit" />,
                      <EllipsisHorizontalIcon
                        className="w-6 h-6 mx-auto"
                        key="ellipsis"
                      />,
                    ]}>
                    <Meta
                      // avatar={
                      //   <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                      // }
                      title={course.tenKhoaHoc}
                      // description={}
                    />
                  </Card>
                </section>
              );
            })
          ) : (
            <img
              // key={course.maKhoaHoc}
              className="flex-1"
              src="https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png"
              alt=""
            />
          )}
        </div>
      ),
    },
  ];

  const onChange = (key) => {
    if (key === "2") {
      handleGetCoursesByUser(userInfo.taiKhoan);
    }
  };

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("userList"));
    const queryParams = new URLSearchParams(window.location.search);
    const savedPage = +queryParams.get("page");
    const savedPageSize = +queryParams.get("pageSize");
    if (
      data &&
      data.currentPage === savedPage &&
      data.count === savedPageSize
    ) {
      handleGetUsers(savedPage, savedPageSize);
    } else {
      handleGetUsers(currentPage, currentPageSize);
    }
  }, [currentPage, currentPageSize]);

  return (
    <>
      <Table header={tableHeader} body={userList}></Table>

      {/* //Edit Form */}
      <ReactModal
        isOpen={editModalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={handleCloseModal}
        style={modalStyle}
        ariaHideApp={false}
        contentLabel="User Edit Modal">
        <div className="flex flex-col h-full">
          <div className="flex flex-row items-center justify-between mb-4">
            <h2 className="inline-block font-semibold text-3xl text-gray-900">
              Profile
            </h2>
            <Button
              onClickEvent={handleCloseModal}
              className="!w-12 !h-12 !p-2 !border-0">
              <XCircleIcon></XCircleIcon>
            </Button>
          </div>
          <Tabs
            defaultActiveKey="1"
            items={profileCatagories}
            onChange={onChange}
            rootClassName=""
          />
          <div className="flex flex-row justify-end items-center pt-6 pb-3 gap-4 m-0 mt-auto">
            <Button onClickEvent={handleCloseModal} className="">
              Cancel
            </Button>

            <Button
              onClickEvent={handleCloseModal}
              className="!bg-black !text-white">
              Save
            </Button>
          </div>
        </div>
      </ReactModal>

      {/* //Delete Form */}
      <ReactModal
        isOpen={deleteModalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={handleCloseModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            padding: "0",
            maxWidth: "28rem",
            maxHeight: "20vh",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
        contentLabel="Example Modal"
        ariaHideApp={false}>
        <div className="bg-white rounded-lg md:max-w-md p-4 inset-x-0">
          <div className="md:flex items-center">
            <div className="rounded-full border border-gray-300 flex items-center justify-center w-20 h-20 flex-shrink-0 mx-auto">
              <ExclamationTriangleIcon className="w-10 h-10 text-red-500" />
            </div>
            <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
              <p className="font-bold text-lg">Delete your account</p>
              <p className="text-base text-gray-700 mt-1">
                You will lose all of your data by deleting your account. This
                action cannot be undone.
              </p>
            </div>
          </div>
          <div className="text-center md:text-right mt-4 md:flex md:justify-end space-x-2">
            <Button
              onClickEvent={() => {
                handleDeleteUser(deleteTarget);
              }}
              className="bg-white text-black">
              Delete Account
            </Button>
            <Button
              onClickEvent={handleCloseModal}
              className="bg-black text-white">
              Cancel
            </Button>
          </div>
        </div>
      </ReactModal>

      {/* Add Modal */}
      <ReactModal
        isOpen={addModalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={handleCloseModal}
        style={modalStyle}
        contentLabel="Example Modal"
        ariaHideApp={false}>
        <div className="flex flex-row items-center justify-between mb-4">
          <h2 className="inline-block font-semibold text-3xl text-gray-900">
            New User
          </h2>
          <Button
            onClickEvent={handleCloseModal}
            className="!w-12 !h-12 !p-2 !border-0">
            <XCircleIcon></XCircleIcon>
          </Button>
        </div>
        <form>
          <div>
            <div className="mt-6  ">
              {/* <dl className="divide-y divide-gray-100"> */}
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-base font-medium leading-6 text-gray-900">
                  Full name
                </dt>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="col-span-2 block w-full p-2 text-gray-900 placeholder:text-black  sm:text-base sm:leading-6 border-b-2 border-b-slate-300  focus:border-b-black focus-visible:outline-none"
                />
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-base font-medium leading-6 text-gray-900">
                  Username
                </dt>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="col-span-2 block w-full p-2 text-gray-900 placeholder:text-black  sm:text-base sm:leading-6 border-b-2 border-b-slate-300  focus:border-b-black focus-visible:outline-none"
                />
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-base font-medium leading-6 text-gray-900">
                  Email address
                </dt>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="col-span-2 block w-full p-2 text-gray-900 placeholder:text-black  sm:text-base sm:leading-6 border-b-2 border-b-slate-300  focus:border-b-black focus-visible:outline-none"
                />
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-base font-medium leading-6 text-gray-900">
                  Phone Number
                </dt>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="col-span-2 block w-full p-2 text-gray-900 placeholder:text-black  sm:text-base sm:leading-6 border-b-2 border-b-slate-300  focus:border-b-black focus-visible:outline-none"
                />
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <h3 className="text-base font-medium leading-6 text-gray-900 text-">
                  Position
                </h3>
                <Dropdown
                  menu={{
                    items,
                    onClick: handleMenuClick,
                    selectable: true,
                    defaultSelectedKeys: ["3"],
                  }}>
                  <Typography.Link>
                    <div className="flex flex-row gap-2 items-center border rounded-md px-3 py-2 w-fit">
                      Selectable
                      <ChevronDownIcon className="w-5 h-5" />
                    </div>
                  </Typography.Link>
                </Dropdown>
              </div>
              {/* </dl> */}
            </div>
            <div className="flex flex-row justify-end items-center pt-6 pb-3 gap-4 m-0">
              <Button
                // onClickEvent={handleCloseModal}
                className="">
                Cancel
              </Button>
              <Button
                // onClickEvent={handleCloseModal}
                className="!bg-black !text-white">
                Add
              </Button>
            </div>
          </div>
        </form>
      </ReactModal>
      <Toaster />
    </>
  );
}
