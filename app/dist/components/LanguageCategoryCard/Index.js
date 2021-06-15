import React from "react";
import Icons from "../Icons";

const LanguageCategoryCard = params => {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-160 h-200 rounded border-2 text-primary-blue focus:ring-2 hover:border-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-5 mt-6"
  }, /*#__PURE__*/React.createElement(Icons, {
    iconName: params.languageCode,
    alt: params.language,
    className: "inline"
  }), /*#__PURE__*/React.createElement("h5", {
    className: "font-normal text-base mt-7 uppercase font-semibold text-primary-blue"
  }, params.language, " Programming"), /*#__PURE__*/React.createElement("span", {
    href: "#",
    className: "text-link mt-6 text-sm pt-4"
  }, "View", " ", /*#__PURE__*/React.createElement(Icons, {
    iconName: "rightarrow",
    alt: "rightarrow",
    className: "inline"
  }))));
};

export default LanguageCategoryCard;