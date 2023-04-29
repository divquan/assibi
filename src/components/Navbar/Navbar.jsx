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
  AiOutlineUser,
} from "react-icons/ai";
import UserProfile from "./UserProfile";

const Navbar = () => {
  const location = useLocation().pathname;
  const [toggle, setToggle] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="navbar_container-main">
      <div className="navbar_links">
        <Link
          to="/about-us"
          className={location === "/about-us" ? "link_active" : undefined}
        >
          About Us
        </Link>
        <Link
          to="/sell"
          className={location === "/sell" ? "link_active" : undefined}
        >
          Sell
        </Link>
        <Link
          to="/rent-out"
          className={location === "/rent-out" ? "link_active" : undefined}
        >
          Rent Out
        </Link>

        <div className="search-field">
          {showSearch && <input type="text" />}
          <AiOutlineSearch
            size={28}
            onClick={() => setShowSearch((init) => !init)}
          />
        </div>
      </div>

      <Link to="/" className="navbar_logo">
        <img src={logo} alt="logo" />
        <span>assibi</span>
      </Link>

      <Link to="cart" className="navbar_icons">
        <AiOutlineShoppingCart size={28} />

        {/*conditionally render sign in link*/}
        {true ? (
          <UserProfile />
        ) : (
          <Link
            to="/register"
            className={location === "/register" && "link_active"}
          >
            Sign Up
          </Link>
        )}
      </Link>
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
        </div>
      )}
    </div>
  );
};

export default Navbar;
