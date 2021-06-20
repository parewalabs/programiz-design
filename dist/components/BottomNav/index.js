import React from "react";
import Icons from "../Icons";
import ellipseActive from "../../icons/ellipseActive.svg";

const BottomNav = () => {
  const page = localStorage.getItem("page");
  return /*#__PURE__*/React.createElement("div", {
    className: "w-full h-16 border-t block lg:hidden bg-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-14 flex pt-2 pb-1"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icons, {
    iconName: "dashboard",
    alt: "dashboard",
    className: page === "dashboard" ? "hidden" : "block"
  }), /*#__PURE__*/React.createElement(Icons, {
    iconName: "dashboardActive",
    alt: "dashboardActive",
    className: page === "dashboard" ? "block" : "hidden"
  }), /*#__PURE__*/React.createElement("span", {
    className: `text-base ${page === "dashboard" ? "text-link" : ""}`
  }, "Dashboard"), /*#__PURE__*/React.createElement("img", {
    src: ellipseActive,
    alt: "active",
    className: page === "dashboard" ? "block" : "hidden"
  }))), /*#__PURE__*/React.createElement("a", {
    href: "/courses"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center justify-center px-7"
  }, /*#__PURE__*/React.createElement(Icons, {
    iconName: "course",
    alt: "course",
    className: page === "course" ? "hidden" : "block"
  }), /*#__PURE__*/React.createElement(Icons, {
    iconName: "courseActive",
    alt: "courseActive",
    className: page === "course" ? "block" : "hidden"
  }), /*#__PURE__*/React.createElement("span", {
    className: `text-base ${page === "course" ? "text-link" : "text-primary-blue"}`
  }, "Courses"), /*#__PURE__*/React.createElement("img", {
    src: ellipseActive,
    alt: "tags",
    className: page === "course" ? "block" : "hidden"
  })))));
};

export default BottomNav;