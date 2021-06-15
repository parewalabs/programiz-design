import "../../index.css";
import React from "react";
import ellipse from "../../icons/ellipse.svg";
import Icons from "../Icons";

const MainChallengesCard = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-327 lg:w-350 h-200 rounded border-2 text-primary-blue focus:ring-2 hover:border-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-4 pt-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: " h-5 w-37 border border-seperator rounded-xl flex items-center justify-center float-right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "align-middle text-sm font-bold text-warning"
  }, "+", props.challengePoints)), /*#__PURE__*/React.createElement("div", {
    className: "h-14 relative flex"
  }, props.newChallange ? /*#__PURE__*/React.createElement(Icons, {
    iconName: "newTag",
    alt: "new tag",
    className: "absolute left-3 -top-1"
  }) : "", /*#__PURE__*/React.createElement(Icons, {
    iconName: "challengesIcon",
    alt: "challenge icon",
    className: ""
  })), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl pt-7"
  }, props.challengeName), /*#__PURE__*/React.createElement("div", {
    className: "pt-2"
  }, props.tags.map((tag, index) => {
    return /*#__PURE__*/React.createElement("li", {
      className: "text-sm text-caption text-opacity-60 inline",
      key: index
    }, /*#__PURE__*/React.createElement("img", {
      src: ellipse,
      alt: "separator",
      className: index === 0 ? "hidden inline" : "inline"
    }), " ", tag, " ");
  })), /*#__PURE__*/React.createElement("span", {
    href: "#",
    className: "text-link text-sm font-normal"
  }, "Start Challenge", " ", /*#__PURE__*/React.createElement(Icons, {
    iconName: "rightarrow",
    alt: "right arrow",
    className: "inline"
  }))));
};

export default MainChallengesCard;