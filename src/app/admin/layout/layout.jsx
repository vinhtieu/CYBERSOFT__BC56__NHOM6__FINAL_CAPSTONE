import React, { useEffect } from "react";
import { Sidebar, Overlay, Navbar } from "../components";
import { Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { MODE } from "../../../lib/constants/constants";
import { setMode } from "../../../lib/redux/slices/sidebarSlice";

export default function Layout() {
  const sidebarMode = useSelector((state) => state.sidebar.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 776.98 && sidebarMode === MODE.DESKTOP) {
        dispatch(setMode(MODE.MOBILE));
      } else if (window.innerWidth > 777 && sidebarMode === MODE.MOBILE) {
        dispatch(setMode(MODE.DESKTOP));
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <div className="relative">
      <div
        className={`flex ${
          sidebarMode === MODE.MOBILE ? "flex-col" : "flex-row"
        } `}>
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
