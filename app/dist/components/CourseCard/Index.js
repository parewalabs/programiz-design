import React from "react";
import ellipse from "../../icons/ellipse.svg";
import vector from "../../images/Vector2.png";
import Icons from "../Icons";

const CourseCard = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-327 lg:w-350 h-236 rounded border-2 text-primary-blue focus:ring-2 hover:border-secondary relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-5 mt-5"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-normal text-22 leading-30 font-semibold text-primary-blue"
  }, props.courseName), /*#__PURE__*/React.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/React.createElement(Icons, {
    iconName: "book",
    alt: "book",
    className: "inline"
  }), props.tags.map((tag, index) => {
    return /*#__PURE__*/React.createElement("li", {
      className: "text-sm text-caption inline text-opacity-60",
      key: index
    }, /*#__PURE__*/React.createElement("img", {
      src: ellipse,
      alt: "tags",
      className: index === 0 ? "hidden inline" : "inline"
    }), " ", tag, "  ");
  })), props.complete && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "pt-4 text-xs font-normal"
  }, props.complete, " Complete"), /*#__PURE__*/React.createElement("div", {
    className: "relative pt-2 pb-4 pr-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden h-1 flex rounded bg-primary-blue bg-opacity-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded bg-secondary w-1/4",
    style: {
      width: props.complete
    }
  })))), /*#__PURE__*/React.createElement("span", {
    href: "#",
    className: "text-link text-sm"
  }, "Continue Learning", " ", /*#__PURE__*/React.createElement(Icons, {
    iconName: "rightarrow",
    alt: "rightarrow",
    className: "inline"
  }))), /*#__PURE__*/React.createElement("img", {
    src: vector,
    alt: "profile Course",
    className: "absolute top-0 -right-0"
  }));
};

export default CourseCard;