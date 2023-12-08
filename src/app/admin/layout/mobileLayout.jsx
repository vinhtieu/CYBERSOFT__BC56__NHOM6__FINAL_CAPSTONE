import React, { useEffect } from "react";
import { Sidebar, Overlay, Navbar } from "../components";
import { Outlet } from "react-router";
import { useDispatch } from "react-redux";
import { MODE } from "../../../lib/constants/constants";
import { setMode } from "../../../lib/redux/slices/sidebarSlice";

export default function MobileLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMode(MODE.MOBILE));
  });
  return (
    <div className="relative">
      <div className={`flex flex-col h-screen`}>
        <Sidebar></Sidebar>
        <Navbar></Navbar>
        <div className="flex-1 bg-[#f3f4f6] h-screen overflow-auto">
          <Outlet />
        </div>
      </div>
      <Overlay></Overlay>
    </div>
  );
}