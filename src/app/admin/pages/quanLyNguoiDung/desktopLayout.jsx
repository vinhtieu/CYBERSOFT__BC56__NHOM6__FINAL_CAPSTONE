import React, { useEffect } from "react";
import ReactModal from "react-modal";
import toast, { Toaster } from "react-hot-toast";
import { setList } from "../../../../lib/redux/slices/userSlice";
import { Table } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { userService } from "../../../../api/service";
import { closeUserEditModal } from "../../../../lib/redux/slices/userEditModalSlice";
import { closeUserDeleteModal } from "../../../../lib/redux/slices/userDeleteModalSlice";
import {
  XCircleIcon,
  ChevronDownIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import { Dropdown, Typography } from "antd";
import { Button } from "../../components";
import { closeUserAddModal } from "../../../../lib/redux/slices/userAddModalSlice";

export default function DesktopLayout() {
  const userList = useSelector((state) => state.user.list);
  const editTarget = useSelector((state) => state.userEditModal.editUser);
  const deleteTarget = useSelector((state) => state.userDeleteModal.deleteUser);
  const editModalOpen = useSelector((state) => state.userEditModal.isOpen);
  const deleteModalOpen = useSelector((state) => state.userDeleteModal.isOpen);
  const addModalOpen = useSelector((state) => state.userAddModal.isOpen);
  const dispatch = useDispatch();

  const tableHeader = ["Name", "Account", "Email", "Telephone"];
  const modalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "30vw",
      maxHeight: "80vh",
      maxWidth: "60vw",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const deleteModalStyle = {
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

  function closeModal(e) {
    dispatch(closeUserEditModal());
    dispatch(closeUserDeleteModal());
    dispatch(closeUserAddModal());
  }

  const handleUpdateUser = () => {
    const myPromise = userService.updateUser(editTarget);
    toast.promise(
      myPromise,
      {
        loading: "Loading",
        success: (data) => `Delete Successfully`,
        error: (err) => `This just happened: ${err.toString()}`,
      },
      {
        style: {
          minWidth: "250px",
        },
        success: {
          duration: 5000,
          icon: "🔥",
        },
      }
    );
  };

  const handleDeleteUser = () => {
    console.log(deleteTarget);
    const myPromise = userService.deleteUser(deleteTarget.taiKhoan);
    toast.promise(
      myPromise,
      {
        loading: "Loading",
        success: (data) => handleGetUsers(),
        error: (err) => `This just happened: ${err.toString()}`,
      },
      {
        style: {
          minWidth: "250px",
        },
        success: {
          duration: 5000,
          icon: "🔥",
        },
      }
    );
  };

  const handleGetUsers = () => {
    userService
      .getUsers()
      .then((res) => {
        sessionStorage.setItem("userList", JSON.stringify(res.data));
        dispatch(setList(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleMenuClick = (e) => {
    items.forEach((item) => {
      if (item.key === e.key) {
        console.log(item.label);
      }
    });
  };

  useEffect(() => {
    const data = sessionStorage.getItem("userList");
    if (data && data.length > 0) {
      const parseData = JSON.parse(data);
      dispatch(setList(parseData));
    } else {
      handleGetUsers();
    }

    // handleGetUsers();
  }, []);

  return (
    <>
      <Table header={tableHeader} body={userList}></Table>
      <ReactModal
        isOpen={editModalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={modalStyle}
        ariaHideApp={false}
        contentLabel="User Edit Modal">
        <div className="flex flex-row items-center justify-between mb-4">
          <h2 className="inline-block font-semibold text-3xl text-gray-900">
            Profile
          </h2>
          <Button
            onClickEvent={closeModal}
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
                  placeholder={editTarget.hoTen}
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
                  placeholder={editTarget.taiKhoan}
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
                  placeholder={editTarget.email}
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
                  placeholder={editTarget.soDt}
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
              {/* <button
                onClick={(e) => {
                  e.preventDefault();
                  closeModal();
                }}
                className="leading-10 px-6 border border-slate-300 rounded-md font-semibold text-sm">
                Cancel
              </button> */}

              {/* <button className="leading-10 px-6 rounded-md bg-black text-white font-semibold text-sm">
                Save
              </button> */}
              <Button onClickEvent={closeModal} className="">
                Cancel
              </Button>

              <Button
                onClickEvent={closeModal}
                className="!bg-black !text-white">
                Save
              </Button>
            </div>
          </div>
        </form>
      </ReactModal>
      <ReactModal
        isOpen={deleteModalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={deleteModalStyle}
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
              onClickEvent={handleDeleteUser}
              className="bg-white text-black">
              Delete Account
            </Button>
            <Button onClickEvent={closeModal} className="bg-black text-white">
              Cancel
            </Button>
          </div>
        </div>
      </ReactModal>
      <ReactModal
        isOpen={addModalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={modalStyle}
        contentLabel="Example Modal"
        ariaHideApp={false}>
        <div className="flex flex-row items-center justify-between mb-4">
          <h2 className="inline-block font-semibold text-3xl text-gray-900">
            New User
          </h2>
          <Button
            onClickEvent={closeModal}
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
              <Button onClickEvent={closeModal} className="">
                Cancel
              </Button>
              <Button
                onClickEvent={closeModal}
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
