import React from "react";

const Avatar = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: `relative flex ${props.className}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `rounded-full overflow-hidden bg-blue-400 ${props.size}`
  }, props.profilePic !== "" && /*#__PURE__*/React.createElement("img", {
    src: props.profilePic,
    alt: props.username,
    className: "h-full w-full object-cover"
  })));
};

export default Avatar;