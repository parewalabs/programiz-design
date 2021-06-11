import React from "react";
import { useState } from "react";
import Icons from "../Icons/index";
import "./CourseIndex.css";

const CourseIndex = () => {
  const [isActive, setActive] = useState("");
  const [downarrow, setDownarrow] = useState("");
  const [uparrow, setUparrow] = useState("hidden");

  const toggleClass = () => {
    setActive(isActive === "" ? " active" : "");
    setDownarrow(downarrow === "" ? "hidden" : "");
    setUparrow(uparrow === "hidden" ? "" : "hidden");
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "accordion"
  }, /*#__PURE__*/React.createElement("div", {
    className: `contentBx w-730 border border-seperator rounded ${isActive}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "label px-6 py-2 cursor-pointer",
    onClick: toggleClass
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-primary-blue text-xl leading-30 font-medium inline"
  }, "Introduction"), /*#__PURE__*/React.createElement(Icons, {
    iconName: "downarrow",
    alt: "downarrow",
    className: `float-right inline pt-1 ${downarrow}`
  }), /*#__PURE__*/React.createElement(Icons, {
    iconName: "uparrow",
    alt: "uparrow",
    className: `float-right inline pt-1 ${uparrow}`
  })), /*#__PURE__*/React.createElement("div", {
    className: "border-t border-separate content"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "StepProgress"
  }, /*#__PURE__*/React.createElement("li", {
    className: "StepProgress-item is-done"
  }, "Post a contest"), /*#__PURE__*/React.createElement("li", {
    className: "StepProgress-item is-done"
  }, "Award an entry"), /*#__PURE__*/React.createElement("li", {
    className: "StepProgress-item current"
  }, "Post a contest"), /*#__PURE__*/React.createElement("li", {
    className: "StepProgress-item"
  }, "Handover"), /*#__PURE__*/React.createElement("li", {
    className: "StepProgress-item"
  }, "Provide feedback")))));
};

export default CourseIndex;