import React, { useEffect } from "react";
import ReactModal from "react-modal";
import { Toaster } from "react-hot-toast";
import { Table } from "../../components";
import { useDispatch, useSelector } from "react-redux";

import {
  XCircleIcon,
  ExclamationTriangleIcon,
  PencilSquareIcon,
  Cog8ToothIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";
import { Card, Tabs } from "antd";
import { Button } from "../../components";

import Meta from "antd/es/card/Meta";
import {
  handleCloseModal,
  handleDeleteUser,
  handleGetUsers,
  handleUserInputs,
  handleUpdateUser,
} from "./helpers";
import "./style.css";
import { STATUS } from "../../../../lib/constants/constants";

export default function DesktopLayout() {
  // user
  const userList = useSelector((state) => state.user.list);
  const searchKey = useSelector((state) => state.user.searchKey);
  //status
  const userTableStatus = useSelector((state) => state.status.userTable);
  // edit modal
  const userInfo = useSelector((state) => state.userEditModal.info);
  const userCourses = useSelector((state) => state.userEditModal.courses);
  const editUserInfo = useSelector((state) => state.userEditModal.editedData);
  const editModalOpen = useSelector((state) => state.userEditModal.isOpen);
  // delete modal
  const deleteTarget = useSelector((state) => state.userDeleteModal.deleteUser);
  const deleteModalOpen = useSelector((state) => state.userDeleteModal.isOpen);
  // pagination
  const currentPage = useSelector((state) => state.pagination.page);
  // add modal
  const addModalOpen = useSelector((state) => state.userAddModal.isOpen);
  const dispatch = useDispatch();

  const tableHeader = ["Name", "Account", "Email", "Type", "Telephone"];

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

  const tabs = [
    {
      key: "1",
      label: "Info",
      forceRender: true,
      children: (
        <form className="">
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
              placeholder={userInfo?.hoTen}
              onChange={(e) => {
                console.log({ hoTen: e.target.value });
                handleUserInputs({ hoTen: e.target.value });
              }}
              className="col-span-2 block w-full p-2 text-gray-900 placeholder:text-black sm:text-base sm:leading-6 border-b-2 border-[#cccccc]  focus:border-b-black focus-visible:outline-none"
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
              placeholder={userInfo?.taiKhoan}
              onChange={(e) => {
                handleUserInputs({ taiKhoan: e.target.value });
              }}
              className="col-span-2 block w-full p-2 text-gray-900 placeholder:text-black  sm:text-base sm:leading-6 border-b-2 border-[#cccccc]  focus:border-b-black focus-visible:outline-none"
            />
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-base font-medium leading-6 text-gray-900">
              Password
            </dt>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              placeholder={userInfo?.matKhau}
              onChange={(e) => {
                handleUserInputs({ matKhau: e.target.value });
              }}
              className="col-span-2 block w-full p-2 text-gray-900 placeholder:text-black  sm:text-base sm:leading-6 border-b-2 border-[#cccccc]  focus:border-b-black focus-visible:outline-none"
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
              placeholder={userInfo?.email}
              onChange={(e) => {
                handleUserInputs({ email: e.target.value });
              }}
              className="col-span-2 block w-full p-2 text-gray-900 placeholder:text-black  sm:text-base sm:leading-6 border-b-2 border-[#cccccc]  focus:border-b-black focus-visible:outline-none"
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
              placeholder={userInfo?.soDt}
              onChange={(e) => {
                handleUserInputs({ soDT: e.target.value });
              }}
              className="col-span-2 block w-full p-2 text-gray-900 placeholder:text-black  sm:text-base sm:leading-6 border-b-2 border-[#cccccc]  focus:border-b-black focus-visible:outline-none"
            />
          </div>
          {/* </dl> */}
        </form>
      ),
    },
    {
      key: "2",
      label: "Courses",
      forceRender: true,
      children: !editModalOpen ? (
        <span></span>
      ) : (
        <div className="flex flex-row flex-wrap w-full h-full overflow-auto">
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
            <figure className="w-full h-full mb-0">
              <img
                // key={course.m5aKhoaHoc}
                className="w-[95%] h-full object-contain mx-auto"
                src="https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png"
                alt=""
              />
            </figure>
          )}
        </div>
      ),
    },
  ];

  useEffect(() => {
    const userList = JSON.parse(sessionStorage.getItem("userList"));
    const queryParams = new URLSearchParams(window.location.search);
    const savedPage = +queryParams.get("page");

    if (userTableStatus === STATUS.SEARCHING) {
      handleGetUsers(1, searchKey);
    } else if (userList && userList.currentPage === savedPage) {
      handleGetUsers(savedPage);
    } else {
      handleGetUsers(currentPage);
    }
  }, [currentPage, userTableStatus]);

  return (
    <>
      <Table header={tableHeader} body={userList}></Table>

      {/* //Edit Form */}
      <ReactModal
        isOpen={editModalOpen}
        onRequestClose={handleCloseModal}
        className="absolute top-1/2 left-1/2 right-auto bottom-auto overflow-auto
        w-[80vw] min-[940px]:w-[50vw] min-[1200px]:w-[40vw] min-[1670px]:w-[30vw]
        h-[80vh] min-[666px]:h-[75vh] min-[940px]:h-[62vh]  -mr-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-[4px] p-5 border border-[#cccccc]"
        ariaHideApp={false}
        contentLabel="User Edit Modal">
        <div className="flex flex-col h-full">
          <div className="flex flex-row items-center justify-between mb-4">
            <h2 className="inline-block text-3xl font-semibold text-gray-900">
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
            items={tabs}
            rootClassName="flex-1 flex-col"
          />
          <div className="flex flex-row items-center justify-end gap-4 pt-6 pb-3 m-0 mt-auto">
            <Button onClickEvent={handleCloseModal} className="">
              Cancel
            </Button>

            <Button
              onClickEvent={() => {
                handleUpdateUser(userInfo, editUserInfo);
              }}
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
        className=""
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
        <div className="inset-x-0 p-4 bg-white rounded-lg md:max-w-md">
          <div className="items-center md:flex">
            <div className="flex items-center justify-center flex-shrink-0 w-20 h-20 mx-auto border border-gray-300 rounded-full">
              <ExclamationTriangleIcon className="w-10 h-10 text-red-500" />
            </div>
            <div className="mt-4 text-center md:mt-0 md:ml-6 md:text-left">
              <p className="text-lg font-bold">Delete your account</p>
              <p className="mt-1 text-base text-gray-700">
                You will lose all of your data by deleting your account. This
                action cannot be undone.
              </p>
            </div>
          </div>
          <div className="mt-4 space-x-2 text-center md:text-right md:flex md:justify-end">
            <Button
              onClickEvent={() => {
                handleDeleteUser(deleteTarget);
              }}
              className="text-black bg-white">
              Delete Account
            </Button>
            <Button
              onClickEvent={handleCloseModal}
              className="text-white bg-black">
              Cancel
            </Button>
          </div>
        </div>
      </ReactModal>

      {/* Add Modal */}
      <ReactModal
        isOpen={addModalOpen}
        onRequestClose={handleCloseModal}
        style={modalStyle}
        contentLabel="Example Modal"
        ariaHideApp={false}>
        <div className="flex flex-row items-center justify-between mb-4">
          <h2 className="inline-block text-3xl font-semibold text-gray-900">
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
            <div className="mt-6 ">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-base font-medium leading-6 text-gray-900">
                  Full name
                </dt>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="col-span-2 block w-full p-2 text-gray-900 placeholder:text-black  sm:text-base sm:leading-6 border-b-2 border-[#cccccc]  focus:border-b-black focus-visible:outline-none"
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
                  className="col-span-2 block w-full p-2 text-gray-900 placeholder:text-black  sm:text-base sm:leading-6 border-b-2 border-[#cccccc]  focus:border-b-black focus-visible:outline-none"
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
                  className="col-span-2 block w-full p-2 text-gray-900 placeholder:text-black  sm:text-base sm:leading-6 border-b-2 border-[#cccccc]  focus:border-b-black focus-visible:outline-none"
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
                  className="col-span-2 block w-full p-2 text-gray-900 placeholder:text-black  sm:text-base sm:leading-6 border-b-2 border-[#cccccc]  focus:border-b-black focus-visible:outline-none"
                />
              </div>

            </div>
            <div className="flex flex-row items-center justify-end gap-4 pt-6 pb-3 m-0">
              <Button
                onClickEvent={handleCloseModal}
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
      <Toaster
        toastOptions={{ duration: 1200, style: { minWidth: "250px" } }}
      />
    </>
  );
}
