import React, { useEffect } from "react";
import { Sidebar, Overlay, Navbar } from "../components";
import { Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { MODE } from "../../../lib/constants/constants";
import { setMode } from "../../../lib/redux/slices/sidebarSlice";

export default function DesktopLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMode(MODE.DESKTOP));
  });
  return (
    <div className="relative">
      <div className={`flex flex-row`}>
        <Sidebar></Sidebar>
        <div className="flex-1 bg-[#f3f4f6] h-screen overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
