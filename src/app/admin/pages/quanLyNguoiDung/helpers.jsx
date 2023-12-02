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
} from "../../../../lib/redux/slices/userEditModalSlice";
import { closeUserDeleteModal } from "../../../../lib/redux/slices/userDeleteModalSlice";
import toast from "react-hot-toast";
// import { usestore.dispatch } from "react-redux";
import store from "../../../../lib/redux/store";
// const store.dispatch = usestore.dispatch();

export const handleCloseModal = (e) => {
  store.dispatch(closeUserEditModal());
  store.dispatch(closeUserDeleteModal());
  store.dispatch(closeUserAddModal());
};

export const handleUpdateUser = () => {
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

export const handleDeleteUser = (user) => {
  console.log(user);
  const myPromise = userService.deleteUser(user?.taiKhoan);
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

export const handleGetUsers = (page = 1, pageSize = 10) => {
  console.log("hi");
  userService
    .getUsers(page, pageSize)
    .then((res) => {
      console.log(res);
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

export const handleGetCoursesByUser = (acc) => {
  const payload = {
    taiKhoan: acc,
  };

  userService
    .getCoursesByUser(payload)
    .then((res) => {
      console.log(res.data);
      store.dispatch(setCourses(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const handleMenuClick = (e) => {
  items.forEach((item) => {
    if (item.key === e.key) {
      console.log(item.label);
    }
  });
};
