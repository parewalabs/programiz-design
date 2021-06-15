import React from "react";
import Icons from "../Icons/index";
import SidebarCourseIndex from "./SidebarCourseIndex";

const SidebarToc = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-72 bg-sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-6 pt-6"
  }, /*#__PURE__*/React.createElement(Icons, {
    iconName: "burgerMenu",
    alt: "Menu",
    className: "float-right"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "text-primary-blue text-22 leading-30 font-semibold pt-14"
  }, props.courseTitle), /*#__PURE__*/React.createElement("p", {
    className: "text-primary-blue text-sm font-normal pt-2"
  }, props.complete, " Complete"), /*#__PURE__*/React.createElement("div", {
    className: "relative pt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden h-1 flex rounded bg-primary-blue bg-opacity-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded bg-main w-1/4",
    style: {
      width: props.complete
    }
  }))), /*#__PURE__*/React.createElement("p", {
    className: "text-primary-blue text-sm font-normal pt-8 items-start pb-2"
  }, "Course Index")), /*#__PURE__*/React.createElement(SidebarCourseIndex, {
    course: props.course
  }), /*#__PURE__*/React.createElement(SidebarCourseIndex, {
    course: props.course
  }), /*#__PURE__*/React.createElement(SidebarCourseIndex, {
    course: props.course
  }), /*#__PURE__*/React.createElement(SidebarCourseIndex, {
    course: props.course
  }));
};

export default SidebarToc;