import React from "react";
import Icons from "../Icons";

const LanguageCategoryCard = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-160 h-200 rounded border-2 text-primary-blue focus:ring-2 hover:border-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-5 mt-6"
  }, /*#__PURE__*/React.createElement(Icons, {
    iconName: props.languageCode,
    alt: props.language,
    className: "inline"
  }), /*#__PURE__*/React.createElement("h5", {
    className: "font-normal text-base mt-7 uppercase font-semibold text-primary-blue"
  }, props.language, " Programming"), /*#__PURE__*/React.createElement("span", {
    onClick: props.customClickEvent,
    className: "text-link mt-6 text-sm pt-4 cursor-pointer"
  }, "View", " ", /*#__PURE__*/React.createElement(Icons, {
    iconName: "rightarrow",
    alt: "rightarrow",
    className: "inline"
  }))));
};

export default LanguageCategoryCard;