import React from "react";

const WelcomeMessage = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-327 lg:w-full"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-primary-blue text-4xl leading-54 font-bold"
  }, "Welcome", props.createdJustNow === true ? " Back" : "", ", ", props.userName), /*#__PURE__*/React.createElement("p", {
    className: "text-primary-blue text-opacity-80 text-sm leading-4 font-normal"
  }, "Learn to code with our wide range of coding courses. Try examples, solve challenges & strengthen your skills."));
};

export default WelcomeMessage;