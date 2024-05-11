import React from "react";
import "./Sidebar.css";
import { HiHome } from "react-icons/hi2";
import { IoSettingsSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { VscSettings } from "react-icons/vsc";
import { HiOutlineLogout } from "react-icons/hi";

export const Sidebar = () => {
  return (
    <>
      <aside className="sidebar">
        <h2>Omron</h2>
        <ul>
          <li>
            <HiHome />
            <a href="#">Dashboard</a>
          </li>
          <li>
            <IoSettingsSharp />
            <a href="#">Profile</a>
          </li>
          <li>
            <CgProfile />
            <a href="#">Account Setting</a>
          </li>
          <li>
            <VscSettings />
            <a href="#">App Setting</a>
          </li>
          <li>
            <HiOutlineLogout />
            <a href="#">Logout</a>
          </li>
        </ul>
      </aside>
    </>
  );
};
