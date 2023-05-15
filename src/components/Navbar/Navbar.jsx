import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar">
        <Link to="/" className="navbar_logo">
          <img src={logo} alt="logo" />
          <span>assibi</span>
        </Link>
        <div className="navbar_search">
          <input type="text" placeholder="search" />
          <select className="" id="">
            <option value="0" selected="selected">
              All Categories
            </option>
            <option className="" value="">
              Baby &amp; Child
            </option>
            <option className="" value="">
              &nbsp;&nbsp;&nbsp;Bouncers
            </option>
            <option className="" value="">
              &nbsp;&nbsp;&nbsp;Nursery
            </option>
            <option className="" value="">
              Pushchairs
            </option>
          </select>
          <div className="navbar_search_icon">
            <AiOutlineSearch size={30} />
          </div>
        </div>

        <div className="navbar_icons">
          <AiOutlineShoppingCart
            size={36}
            className="assibi_icon"
            onClick={() => navigate("/cart")}
          />
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
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
