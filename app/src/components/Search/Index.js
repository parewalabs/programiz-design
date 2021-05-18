import React from "react";
import searchIcon from "../../icons/searchIcon.svg";

const Search = () => {
  return (
    <div className="w-308 h-12 flex border rounded">
      <span className="w-auto flex justify-end items-center text-primary p-2">
        <img src={searchIcon} alt="Search" />
      </span>
      <input
        className="w-full p-2 text-base focus:outline-none"
        type="text"
        placeholder="Search for courses, examples..."
      />
    </div>
  );
};

export default Search;
