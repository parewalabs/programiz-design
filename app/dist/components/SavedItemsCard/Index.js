import React from "react";
import vector from "../../images/Vector.png";

const SavedItemsCard = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-255 h-132 rounded border-2 text-primary-blue focus:ring-2 hover:border-tertiary relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-6 pt-6"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm"
  }, props.type), /*#__PURE__*/React.createElement("h4", {
    className: "text-lg text-primary-blue"
  }, props.name)), /*#__PURE__*/React.createElement("img", {
    src: vector,
    className: "absolute -top-0 -right-2",
    alt: "examples"
  }));
};

export default SavedItemsCard;