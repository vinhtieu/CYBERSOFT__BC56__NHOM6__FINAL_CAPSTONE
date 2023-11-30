import React from "react";
import { Sidebar } from "../components";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="flex flex-row">
      <Sidebar></Sidebar>
      <div className="flex-1 bg-[#f3f4f6] h-screen overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
