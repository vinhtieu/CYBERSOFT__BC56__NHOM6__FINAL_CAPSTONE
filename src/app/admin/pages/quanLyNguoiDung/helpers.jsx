import { closeUserAddModal } from "../../../../lib/redux/slices/userAddModalSlice";
import {
  setPage,
  setPageSize,
  setTotalItem,
} from "../../../../lib/redux/slices/paginationSlice";
import { setList } from "../../../../lib/redux/slices/userSlice";
import { userService } from "../../../../api/service";
import {
  closeUserEditModal,
  setCourses,
  setEditedData,
  setInfo,
} from "../../../../lib/redux/slices/userEditModalSlice";
import { closeUserDeleteModal } from "../../../../lib/redux/slices/userDeleteModalSlice";
import toast from "react-hot-toast";
import store from "../../../../lib/redux/store";

export const handleCloseModal = (e) => {
  store.dispatch(closeUserEditModal());
  store.dispatch(closeUserDeleteModal());
  store.dispatch(closeUserAddModal());
  store.dispatch(setInfo());
};

export const handleUpdateUser = (prevData, newData) => {
  const reducedData = newData.reduce((prevValue, currValue) => {
    for (const key in currValue) {
      if (currValue.hasOwnProperty(key)) {
        prevValue[key] = currValue[key];
      }
    }
    return prevValue;
  }, {});

  console.log("prevData: ", prevData);
  const user = {
    taiKhoan: reducedData.taiKhoan ? reducedData.taiKhoan : prevData.taiKhoan,
    matKhau: reducedData.matKhau ? reducedData.matKhau : prevData.matKhau,
    hoTen: reducedData.hoTen ? reducedData.hoTen : prevData.hoTen,
    soDT: reducedData.soDT ? reducedData.soDT : prevData.soDt,
    maLoaiNguoiDung: reducedData.maLoaiNguoiDung
      ? reducedData.maLoaiNguoiDung
      : prevData.maLoaiNguoiDung,
    maNhom: "GP01",
    email: reducedData.email ? reducedData.email : "",
  };

  console.log(user);

  const myPromise = userService.updateUser(user);
  toast.promise(myPromise, {
    loading: "Loading ...",
    success: (data) => {
      handleGetUsers();
      return `Save Successfully`;
    },
    error: (err) => `This just happened: ${err.toString()}`,
  });
};

export const handleDeleteUser = (user) => {
  const toastId = toast.loading("Loading...");
  userService
    .deleteUser(user?.taiKhoan)
    .then(() => {
      handleGetUsers();
      toast.success("Delete successfully!", {
        id: toastId,
      });
    })
    .catch((err) => {
      toast.error(`${err.response.data}`, {
        id: toastId,
      });
    })
    .finally(() => {
      setTimeout(() => {
        handleCloseModal();
      }, 1500);
    });
};

export const handleGetUsers = (page = 1, pageSize = 10) => {
  console.count("handleGetUsers");
  userService
    .getUsers(page, pageSize)
    .then((res) => {
      store.dispatch(setPage(page));
      store.dispatch(setPageSize(pageSize));
      store.dispatch(setTotalItem(res.data.totalCount));
      sessionStorage.setItem("userList", JSON.stringify(res.data));
      store.dispatch(setList(res.data.items));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const handleUserInputs = (data) => {
  store.dispatch(setEditedData(data));
};

export const handleMenuClick = (e) => {
  items.forEach((item) => {
    if (item.key === e.key) {
      console.log(item.label);
    }
  });
};
