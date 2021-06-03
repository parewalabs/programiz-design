import React from "react";
import path from "../../images/paths.png";
import Buttons from "../Buttons/Index";

const ExampleSuggestionCard = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-730 h-210 rounded border-2 text-primary-blue relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pt-8 pl-8"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-base text-primary-blue"
  }, "Example Suggestion:"), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl text-primary-blue font-semibold"
  }, props.name), /*#__PURE__*/React.createElement("div", {
    className: "pt-4 flex "
  }, /*#__PURE__*/React.createElement(Buttons, {
    otherClass: "bg-main text-white py-3 px-12"
  }, "Start"))), /*#__PURE__*/React.createElement("img", {
    src: path,
    alt: "design",
    className: "absolute -top-0.5 -right-0.5"
  }));
};

export default ExampleSuggestionCard;