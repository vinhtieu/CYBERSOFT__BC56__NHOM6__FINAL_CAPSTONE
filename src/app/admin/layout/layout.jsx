import React from "react";
import { Sidebar } from "../components";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <Sidebar></Sidebar>
      <Outlet />
    </div>
  );
}
