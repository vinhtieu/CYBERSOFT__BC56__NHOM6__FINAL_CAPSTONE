import React, { useEffect } from "react";
import { setList } from "../../../lib/redux/slices/userSlice";
import { Table } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { userService } from "../../../api/service";

export default function QuanLyNguoiDung() {
  const userList = useSelector((state) => state.user.list);
  const dispatch = useDispatch();

  const tableHeader = ["Name", "Account", "Email", "Telephone"];

  useEffect(() => {
    const data = sessionStorage.getItem("userList");
    if (data && data.length > 0) {
      const parseData = JSON.parse(data);
      dispatch(setList(parseData));
    } else {
      userService
        .getUsers()
        .then((res) => {
          console.log(res.data);
          dispatch(setList(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <>
      <Table header={tableHeader} body={userList}></Table>
    </>
  );
}
