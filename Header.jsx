import React from "react";
import { FaUserCircle } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Debug Finder</div>
      <div className="profile">
        <FaUserCircle size={30} />
        <span>Admin</span>
      </div>
    </header>
  );
};

export default Header;
