import React from "react";
import "./Navbar.scss";

import { BiMenuAltRight } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineShoppingCart, MdShoppingCartCheckout } from "react-icons/md";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";

import logo from "../../assets/logo.png";
import Searchbar from "./searchbar";
import { languages } from "../../DummyData";
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
          {" | "}
          <select
            style={{
              backgroundColor: "inherit",
              color: "white",
              outline: "2px white",
            }}
            id=""
          >
            {languages.map((lan) => (
              <option
                style={{ backgroundColor: "#26901b", outline: "none" }}
                value={lan.value}
                selected="selected"
              >
                {lan.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="navbarr_section2 d-flex justify-content-between align-items-center w-100">
        <div className=" d-flex gap-9 align-items-center ">
          <img style={{ width: "auto", height: 45 }} src={logo} alt="" />
          <div className="">Assibi</div>
        </div>
        <Searchbar />
        <div className="navbar-icons">
          <AiOutlineHeart size={24} />
          <MdOutlineShoppingCart size={24} />
          <AiOutlineUser size={24} />
        </div>
      </div>
      <div className="navbarr_section3 w-100 d-flex justify-content-between ">
        <div>
          <Dropdown icon=" Categories" name={<BiMenuAltRight />} />
        </div>
        <div>
          <Dropdown icon={<RiArrowDropDownLine size={28} />} name="Home" />
          <Dropdown icon={<RiArrowDropDownLine size={28} />} name="Shop" />
          <Dropdown icon={<RiArrowDropDownLine size={28} />} name="Pages" />
          <Dropdown name="Brand" />
          <Dropdown name="Flash Sale" />
        </div>
      </div>
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

const Dropdown = ({ name, icon }) => {
  return (
    <div className="assibi-dropdown--hoverable">
      <button class="dropbtn">
        {name} {icon}
      </button>

      {icon && (
        <div class="dropdown-content">
          <a href="#">Link 1</a>
        </div>
      )}
    </div>
  );
};
