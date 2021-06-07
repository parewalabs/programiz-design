import React from "react";
import logoWeb from "../../images/logoWeb.svg";
import logoMobile from "../../images/logoMobile.svg";
import Icons from "../Icons/index.js";
import Avatar from "../Avatar/Index";
import Search from "../Search/Index";

const NavBar = () => {
  return /*#__PURE__*/React.createElement("nav", {
    className: "w-327 lg:w-full h-70 border flex items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full relative flex items-center lg:px-8 p-2"
  }, /*#__PURE__*/React.createElement("img", {
    src: logoWeb,
    alt: "Programiz Web",
    className: "hidden lg:block cursor-pointer" //  onCLick={() => }

  }), /*#__PURE__*/React.createElement("img", {
    src: logoMobile,
    alt: "Programiz Web",
    className: "block lg:hidden  cursor-pointer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "py-5 mr-8 hover:border-b-2 hover:border-active ml-8 lg:block hidden inline cursor-pointer"
  }, /*#__PURE__*/React.createElement(Icons, {
    iconName: "dashboard",
    alt: "dashboard",
    className: "inline"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-base text-primary-blue pl-2 inline"
  }, "Dashboard")), /*#__PURE__*/React.createElement("div", {
    className: "py-5 mr-8 lg:block hover:border-b-2 hover:border-active hidden inline cursor-pointer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-base text-primary-blue inline"
  }, "Courses"), /*#__PURE__*/React.createElement(Icons, {
    iconName: "downarrow",
    alt: "Courses",
    className: "inline"
  })), /*#__PURE__*/React.createElement("div", {
    className: "py-5 mr-8 lg:block hover:border-b-2 hover:border-active hidden inline cursor-pointer"
  }, "Compiler"), /*#__PURE__*/React.createElement("div", {
    className: "absolute lg:right-8 right-2 flex items-center pr-0"
  }, /*#__PURE__*/React.createElement(Search, {
    className: "hidden lg:flex"
  }), /*#__PURE__*/React.createElement(Icons, {
    iconName: "searchIcon",
    className: "flex lg:hidden cursor-pointer"
  }), /*#__PURE__*/React.createElement(Icons, {
    iconName: "bookmark",
    alt: "Bookmark",
    className: "ml-2  cursor-pointer"
  }), /*#__PURE__*/React.createElement(Avatar, {
    score: "10",
    username: "Albert",
    profilePic: "",
    otherClass: "ml-2 cursor-pointer"
  }))));
};

export default NavBar;