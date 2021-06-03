import React from "react";
import avatar from "../../images/avatar.png";

const Avatar = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "relative flex"
  }, /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: props.username,
    className: "w-9 rounded-full"
  }), /*#__PURE__*/React.createElement("div", {
    className: " h-5 w-37 bg-white border border-seperator rounded-xl flex items-center justify-center absolute left-0 -bottom-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "align-middle text-sm font-bold text-warning"
  }, props.score)));
};

export default Avatar;