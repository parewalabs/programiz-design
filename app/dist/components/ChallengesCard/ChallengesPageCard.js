import React from "react";
import shape from "../../images/Shape.png";
import Buttons from "../Buttons/Index";

const ChallengesPageCard = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "lg:w-730 w-327  h-210 rounded border-2 text-primary-blue focus:ring-2 hover:border-main relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pt-8 pl-8 absolute"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-base text-primary-blue"
  }, props.challengeTaken === true ? "Resume your last challenge:" : "Start first challenge:"), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-semibold text-primary-blue"
  }, props.challengeName), /*#__PURE__*/React.createElement(Buttons, {
    otherClass: "bg-main text-white py-3 px-12 mt-4",
    customClickEvent: props.customClickEvent
  }, "Start")), /*#__PURE__*/React.createElement("img", {
    src: shape,
    className: "absolute top-8 right-4",
    alt: "design shape"
  }));
};

export default ChallengesPageCard;