import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const searchbar = () => {
  return (
    <div className="navbarr_search">
      <input type="text" placeholder="I am searching for ..." />
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
      <div className="navbarr_search_icon">
        <AiOutlineSearch size={30} />
      </div>
    </div>
  );
};

export default searchbar;
