import React from "react";
import certificateSmall from "../../images/certificateSmall.png";
import artwork from "../../images/artwork.png";
import Buttons from "../Buttons/Index";

const CourseProgressCard = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-327 lg:w-730 h-auto border-2 border-separate rounded focus:ring-2 hover:border-secondary relative bg-white",
    style: {
      backgroundImage: `url(${artwork})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "90% 0px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pt-10 pl-10"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl font-bold text-primary-blue"
  }, props.complete === "0%" ? "Take your first step today!" : "Good to see you back!"), /*#__PURE__*/React.createElement("div", {
    className: "float-right pr-8"
  }, /*#__PURE__*/React.createElement("img", {
    src: certificateSmall,
    alt: "cerificate"
  })), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-primary-blue pt-4"
  }, props.complete, " Complete"), /*#__PURE__*/React.createElement("div", {
    className: "relative pt-2 pr-28"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden h-1 flex rounded bg-primary-blue bg-opacity-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded bg-main w-1/4",
    style: {
      width: props.complete
    }
  }))), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-primary-blue pt-4 truncate"
  }, props.message), /*#__PURE__*/React.createElement("div", {
    className: "pt-4 pb-10"
  }, /*#__PURE__*/React.createElement(Buttons, {
    otherClass: "bg-main text-white py-3 px-4",
    customClickEvent: props.customClickEvent
  }, props.complete === "0%" ? "Start" : "Continue", " Learning"))));
};

export default CourseProgressCard;