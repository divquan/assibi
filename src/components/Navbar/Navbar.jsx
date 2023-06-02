import React from "react";
import "./Navbar.scss";
import { SlLocationPin } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineShoppingCart, MdShoppingCartCheckout } from "react-icons/md";
import logo from "../../assets/logo.png";
import Searchbar from "./searchbar";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="navbarr">
      <div className="navbarr_section1 d-flex justify-content-between w-100 ">
        <div className="d-flex gap-2">
          <Tag name="8049 High Ridge St. Saint Joseph" Svg={SlLocationPin} />|
          <Tag name="Hotline: 970 978-6290" Svg={BsTelephone} />
        </div>
        <div className="d-flex gap-2">
          <a href="/#">
            <Tag name="Checkout" Svg={MdShoppingCartCheckout} />
          </a>

          <select className="" id="">
            <option value="0" selected="selected">
              🇬🇧 English
            </option>
            <option className="" value="">
              🇫🇷France
            </option>
            <option className="" value="">
              🇨🇳China
            </option>
          </select>
        </div>
      </div>
      <div className="navbarr_section2 d-flex justify-content-between align-items-center w-100">
        <div className=" d-flex gap-2 align-items-center">
          <img style={{ width: "auto", height: 45 }} src={logo} alt="" />
          <div className="help-box">Need help?</div>
        </div>
        <Searchbar />
        <div className="navbar-icons">
          <AiOutlineHeart size={24} />
          <MdOutlineShoppingCart size={24} />
          <AiOutlineUser size={24} />
        </div>
      </div>
      <div className="navbarr_section3"></div>
      <div />
    </div>
  );
};

export default Navbar;

const Tag = ({ Svg, name }) => {
  return (
    <div className="tag">
      <Svg />
      <span>{name}</span>
    </div>
  );
};
