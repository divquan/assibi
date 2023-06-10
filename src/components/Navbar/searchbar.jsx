import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const searchbar = () => {
  return (
    <div className="navbarr_search">
      <input
        type="text"
        className="border-0 rounded-start "
        placeholder="I am searching for ..."
      />
      <select className="border-0 " id="">
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
      <div className="navbarr_search_icon rounded-end">
        <AiOutlineSearch size={30} />
      </div>
    </div>
  );
};

export default searchbar;
