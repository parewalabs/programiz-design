import React from "react";
import Icons from "../Icons";

const Search = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: `w-308 h-12 flex border rounded ${props.className}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-auto flex justify-end items-center text-primary p-2"
  }, /*#__PURE__*/React.createElement(Icons, {
    iconName: "searchIcon",
    alt: "Search"
  })), /*#__PURE__*/React.createElement("input", {
    className: "w-full p-2 text-base focus:outline-none",
    type: "text",
    placeholder: "Search for courses, examples..."
  }));
};

export default Search;