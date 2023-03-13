import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineBell,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

const Navbar = () => {
  const location = useLocation().pathname;
  const [toggle, setToggle] = useState(false);

  return (
    <div className="navbar_container-main">
      <Link to="/" className="navbar_logo">
        <img src={logo} alt="logo" />
        <span>assibi</span>
      </Link>
      <div className="navbar_links">
        <Link to="/sell" className={location === "/sell" && "link_active"}>
          Sell
        </Link>
        <Link
          to="/rent-out"
          className={location === "/rent-out" && "link_active"}
        >
          Rent Out
        </Link>
        <Link
          to="/about-us"
          className={location === "/about-us" && "link_active"}
        >
          About US
        </Link>
        <Link
          to="/register"
          className={location === "/register" && "link_active"}
        >
          Sign Up
        </Link>
      </div>
      <div className="navbar_icons">
        <AiOutlineShoppingCart size={28} />
        <AiOutlineBell size={28} />
        <AiOutlineSearch size={28} />
      </div>
      <div
        className="navbar_mobile-menu_icon"
        onClick={() => setToggle((prev) => !prev)}
      >
        {toggle ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>
      {toggle && (
        <div className="navbar_mobile-menu">
          <Link
            onClick={() => {
              setToggle(false);
            }}
            to="/sell"
            className={location === "/sell" && "link_active"}
          >
            Sell
          </Link>
          <Link
            onClick={() => {
              setToggle(false);
            }}
            to="/rent-out"
            className={location === "/rent-out" && "link_active"}
          >
            Rent Out
          </Link>
          <Link
            onClick={() => {
              setToggle(false);
            }}
            to="/about-us"
            className={location === "/about-us" && "link_active"}
          >
            About US
          </Link>
          <Link
            onClick={() => {
              setToggle(false);
            }}
            to="/register"
            className={location === "/register" && "link_active"}
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
