import "../../index.css";
import React from "react";
import ellipse from "../../icons/ellipse.svg";
import Icons from "../Icons/index";

const ChallengesCard = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-160 h-200 rounded border-2 text-primary-blue focus:ring-2 hover:border-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-4 mt-4"
  }, props.challengePoints && /*#__PURE__*/React.createElement("div", {
    className: " h-5 w-37 border border-seperator rounded-xl flex items-center justify-center float-right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "align-middle text-sm font-bold text-warning"
  }, "+", props.challengePoints)), /*#__PURE__*/React.createElement("div", {
    className: "h-14 relative flex"
  }, props.newChallange ? /*#__PURE__*/React.createElement(Icons, {
    iconName: "newTag",
    alt: "New Challenge",
    className: "absolute left-3 -top-1"
  }) : "", /*#__PURE__*/React.createElement(Icons, {
    iconName: "challengesIcon",
    alt: "challengesIcon"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl mt-8 truncate",
    title: props.challengeName
  }, props.challengeName), props.tags && /*#__PURE__*/React.createElement("div", {
    className: "pt-2"
  }, props.tags.map((tag, index) => {
    return /*#__PURE__*/React.createElement("li", {
      className: "text-sm text-caption text-opacity-60 inline",
      key: index
    }, /*#__PURE__*/React.createElement("img", {
      src: ellipse,
      alt: "",
      className: index === 0 ? "hidden inline" : "inline"
    }), " ", tag, " ");
  }))));
};

export default ChallengesCard;