import React from "react";
import { useSelector } from "react-redux";
import "./Header.css";
const Header = (props) => {
  const { name } = useSelector((state) => state.user.userData);
  return (
    <div className="header">
      <h3 className="headerTitle">Tarek Code</h3>
      <p className="headerDesc">Hello {name}</p>
    </div>
  );
};

export default Header;
