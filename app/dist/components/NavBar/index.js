import React, { useState } from "react";
import logoWeb from "../../images/logoWeb.svg";
import logoMobile from "../../images/logoMobile.svg";
import Icons from "../Icons/index.js";
import Avatar from "../Avatar/Index";
import Search from "../Search/Index";
import MenuDropdown from "../MenuDropdown/Index";

const NavBar = props => {
  const [menuDropdown, setMenuDropdown] = useState(false);

  const toggleMenuDropdown = () => {
    setMenuDropdown(!menuDropdown);
  };

  const page = localStorage.getItem("page");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
    className: "md:w-327 lg:w-full h-70 border flex items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full relative flex items-center lg:px-40 p-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/"
  }, /*#__PURE__*/React.createElement("img", {
    src: logoWeb,
    alt: "Programiz Web",
    className: "hidden lg:block cursor-pointer"
  }), /*#__PURE__*/React.createElement("img", {
    src: logoMobile,
    alt: "Programiz Web",
    className: "block lg:hidden cursor-pointer"
  })), /*#__PURE__*/React.createElement("div", {
    className: `py-5 mr-8 lg:block hover:border-b-2 hover:border-active hidden inline cursor-pointer ${page === "dashboard" ? "border-b-2 border-active" : ""}`
  }, /*#__PURE__*/React.createElement(Icons, {
    iconName: "dashboard",
    alt: "dashboard",
    className: "inline"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-base text-primary-blue pl-2 inline"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/"
  }, "Dashboard"))), /*#__PURE__*/React.createElement("div", {
    className: `py-5 mr-8 lg:block hover:border-b-2 hover:border-active hidden inline cursor-pointer ${page === "courses" ? "border-b-2 border-active" : ""}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-base text-primary-blue inline",
    onClick: () => toggleMenuDropdown()
  }, "Courses"), /*#__PURE__*/React.createElement(Icons, {
    iconName: "downarrow",
    alt: "Courses",
    className: "inline"
  })), /*#__PURE__*/React.createElement("div", {
    className: `py-5 mr-8 lg:block hover:border-b-2 hover:border-active hidden inline cursor-pointer ${page === "compiler" ? "border-b-2 border-active" : ""}`
  }, /*#__PURE__*/React.createElement("a", {
    href: "/compiler"
  }, "Compiler")), /*#__PURE__*/React.createElement("div", {
    className: "absolute lg:right-40 right-2 flex items-center "
  }, /*#__PURE__*/React.createElement(Search, {
    className: "hidden lg:flex"
  }), /*#__PURE__*/React.createElement(Icons, {
    iconName: "searchIcon",
    className: "flex lg:hidden cursor-pointer"
  }), /*#__PURE__*/React.createElement("a", {
    href: "/bookmark"
  }, /*#__PURE__*/React.createElement(Icons, {
    iconName: "bookmark",
    alt: "Bookmark",
    className: "ml-2 cursor-pointer"
  })), /*#__PURE__*/React.createElement("a", {
    href: "/profile",
    title: "profile"
  }, /*#__PURE__*/React.createElement(Avatar, {
    score: "10",
    username: props.fullName,
    profilePic: props.profilePic,
    otherClass: "ml-2 cursor-pointer"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: `absolute z-1 flex ml-40 bg-white flex ${menuDropdown === true ? "block" : "hidden"}`
  }, /*#__PURE__*/React.createElement(MenuDropdown, {
    languages: [{
      id: "1",
      name: "Python",
      code: "python",
      link: "/python"
    }, {
      id: "2",
      name: "C Programming",
      code: "c"
    }, {
      id: "3",
      name: "C++ Programming",
      code: "cpp"
    }]
  })));
};

export default NavBar;