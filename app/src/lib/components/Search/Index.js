import React from "react";
import Icons from "../Icons";

const Search = (props) => {
  return (
    <div className={`w-308 h-12 flex border rounded ${props.className}`}>
      <span className="w-auto flex justify-end items-center text-primary p-2">
        <Icons iconName="searchIcon" alt="Search" />
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
