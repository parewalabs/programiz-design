import React from "react";
import { useState } from "react";
import Icons from "../Icons/index";
import "./SidebarCourseIndex.css";
import CircleProgress from "../CourseIndex/CircleProgress";

const SidebarCourseIndex = props => {
  const [isActive, setActive] = useState(false);
  const [downarrow, setDownarrow] = useState("");
  const [uparrow, setUparrow] = useState("hidden");

  const toggleClass = () => {
    setActive(!isActive);
    setDownarrow(downarrow === "" ? "hidden" : "");
    setUparrow(uparrow === "hidden" ? "" : "hidden");
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "sidebarAccordion w-72 h-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: `contentBx border-t border-seperator ${isActive === true ? "active" : ""}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `label h-12 px-6 cursor-pointer flex justify-between ${isActive === true ? "bg-primary-blue bg-opacity-20 text-primary-blue" : ""}`,
    onClick: toggleClass
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-primary-blue text-lg leading-7 font-medium truncate overflow-hidden flex items-center",
    title: props.course.title
  }, props.course.title), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end pl-2"
  }, /*#__PURE__*/React.createElement(Icons, {
    iconName: "downarrow",
    alt: "downarrow",
    className: `${downarrow}`
  }), /*#__PURE__*/React.createElement(Icons, {
    iconName: "uparrow",
    alt: "uparrow",
    className: `${uparrow}`
  }))), /*#__PURE__*/React.createElement("div", {
    className: "border-t border-separate content"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "StepProgress"
  }, props.course && props.course.lessons.map(lesson => {
    return /*#__PURE__*/React.createElement("li", {
      className: `StepProgress-item is-done hover:text-main cursor-pointer text-primary-blue mb-4 flex items-center ${lesson.progress === true ? "font-bold" : ""}`,
      key: lesson.id,
      onClick: props.customClickEvent
    }, /*#__PURE__*/React.createElement(CircleProgress, {
      percentage: 33
    }), /*#__PURE__*/React.createElement("a", {
      href: `/lesson/${lesson.id}/details`,
      className: "truncate ml-2",
      title: lesson.title
    }, lesson.title));
  }), props.course.quiz && /*#__PURE__*/React.createElement("li", {
    className: `StepProgress-item is-done hover:text-main cursor-pointer text-primary-blue mb-4 flex items-center `,
    key: props.course.quiz.id,
    onClick: props.customClickEvent
  }, /*#__PURE__*/React.createElement(CircleProgress, {
    percentage: 0
  }), /*#__PURE__*/React.createElement("a", {
    href: `/quiz/${props.course.quiz.id}`,
    className: "truncate ml-2",
    title: props.course.quiz.title
  }, props.course.quiz.title))))));
};

export default SidebarCourseIndex;