import React from "react";
import { useSelector } from "react-redux";
import "./Sidebar.css";
const Sidebar = (props) => {
  const { name } = useSelector((state) => state.user.userData);
  return (
    <div className="sidebar">
      <ul className="sidebarLists">
        <li className="sidebarlist">Home</li>
        <li className="sidebarlist">About</li>
        <li className="sidebarlist">Login</li>
        <li className="sidebarlist">Rgister</li>
        <li className="sidebarlist">Hello {name}</li>
      </ul>
    </div>
  );
};

export default Sidebar;
