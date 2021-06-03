import React from "react";

const Buttons = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement("button", {
    className: "text-base disabled:opacity-50 font-semibold rounded " + props.otherClass,
    disabled: props.disabled
  }, props.children));
};

export default Buttons;