import React from "react";
import Icons from "../Icons";

const AllLanguagesCard = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-160 h-200 rounded border-2 text-primary-blue focus:ring-2 hover:border-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-5 mt-20"
  }, /*#__PURE__*/React.createElement("span", {
    href: "#",
    className: "text-link mt-6 text-lg font-bold pt-4"
  }, "View all Languages", " "), /*#__PURE__*/React.createElement(Icons, {
    iconName: "rightarrow",
    alt: "right arrow",
    className: "inline w-6 "
  })));
};

export default AllLanguagesCard;