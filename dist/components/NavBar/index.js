import React, { useState, useEffect } from "react";
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

  const escFunction = event => {
    if (event.keyCode === 27) {
      setMenuDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "md:w-327 lg:w-full relative z-10 h-70 border flex items-center bg-white"
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
    className: `py-5 mx-8 lg:block hover:border-b-2 hover:border-active hidden inline cursor-pointer ${page === "dashboard" ? "border-b-2 border-active" : ""}`
  }, /*#__PURE__*/React.createElement("a", {
    href: "/"
  }, /*#__PURE__*/React.createElement(Icons, {
    iconName: "dashboard",
    alt: "dashboard",
    className: "inline"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-base text-primary-blue pl-2 inline"
  }, "Dashboard"))), /*#__PURE__*/React.createElement("div", {
    className: `py-5 mr-8 lg:block hover:border-b-2 hover:border-active hidden inline cursor-pointer ${page === "courses" ? "border-b-2 border-active" : ""}`,
    onClick: () => toggleMenuDropdown(),
    tabIndex: "0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-base text-primary-blue inline"
  }, "Courses"), /*#__PURE__*/React.createElement(Icons, {
    iconName: "downarrow",
    alt: "Courses",
    className: "inline"
  })), /*#__PURE__*/React.createElement("div", {
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
    username: props.fullName,
    profilePic: props.profilePic,
    size: "w-9 h-9",
    className: "ml-2 cursor-pointer"
  }))))), menuDropdown && /*#__PURE__*/React.createElement("button", {
    tabIndex: "-1",
    onClick: () => setMenuDropdown(false),
    className: "fixed inset-0 w-full h-full bg-black opacity-80 cursor-default"
  }), /*#__PURE__*/React.createElement("div", {
    className: `absolute ml-40 bg-white ${menuDropdown ? "block" : "hidden"}`
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