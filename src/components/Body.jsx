import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="flex flex-row">
      <SideBar />
      <Outlet/>
    </div>
  );
};

export default Body;
