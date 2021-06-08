import React from "react";

const PopularExamplesCard = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-255 h-132 rounded border-2 text-primary-blue focus:ring-2 hover:border-2 hover:border-tertiary relative cursor-pointer",
    onClick: props.customClickEvent
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-main p-0.5 rounded-t-md absolute w-full -top-0.5"
  }), /*#__PURE__*/React.createElement("div", {
    className: "px-6 pt-6"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-lg text-primary-blue"
  }, props.name)));
};

export default PopularExamplesCard;