import React from "react";
import Icons from "../Icons";

const AllLanguagesCard = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-160 h-200 rounded border-2 text-primary-blue focus:ring-2 hover:border-main bg-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-5 mt-20 cursor-pointer"
  }, /*#__PURE__*/React.createElement("span", {
    onClick: props.customClickEvent,
    className: "text-link mt-6 text-lg font-bold pt-4"
  }, "View all Languages", " "), /*#__PURE__*/React.createElement(Icons, {
    iconName: "rightarrow",
    alt: "right arrow",
    className: "inline w-6 "
  })));
};

export default AllLanguagesCard;