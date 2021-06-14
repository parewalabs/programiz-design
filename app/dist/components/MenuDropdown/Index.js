import React from "react";
import Icons from "../Icons/index";

const setCurrentLanguage = lang => {
  localStorage.setItem("currentLanguage", lang);
};

const MenuDropdown = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-327 lg:w-825 h-auto border rounded text-primary-blue bg-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "py-10 px-10"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xl text-primary-blue font-normal"
  }, "Choose your learning path"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-flow-row lg:grid-cols-3 grid-cols-1 gap-6 pt-4"
  }, props.languages.map(language => {
    return /*#__PURE__*/React.createElement("a", {
      href: "/courses",
      key: language.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "border border-seperator rounded cursor-pointer",
      onClick: () => setCurrentLanguage(language.code)
    }, /*#__PURE__*/React.createElement("div", {
      className: "py-4 pl-6"
    }, /*#__PURE__*/React.createElement("span", {
      className: "inline-block align-middle"
    }, /*#__PURE__*/React.createElement(Icons, {
      iconName: language.code,
      alt: language.name,
      className: "float-left"
    })), /*#__PURE__*/React.createElement("span", {
      className: "text-base text-primary-blue pl-2"
    }, language.name))));
  }))));
};

export default MenuDropdown;