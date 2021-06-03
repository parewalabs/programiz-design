import React from "react";
import { useState } from "react";
import avatar from "../../images/avatar1.png";
import Buttons from "../Buttons/Index";

const EdtiProfilePopup = () => {
  const [disabledButton, setDisabledButton] = useState(true);
  return /*#__PURE__*/React.createElement("div", {
    className: "w-730 h-705 rounded-md border-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: "avatar",
    className: "h-28 w-28 rounded-full mt-10 "
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center mt-2"
  }, /*#__PURE__*/React.createElement(Buttons, {
    otherClass: "text-link py-1.5 px-4 border border-main"
  }, "Change Photo")), /*#__PURE__*/React.createElement("div", {
    className: "pt-6 px-44"
  }, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm text-caption text-opacity-80 mb-2",
    htmlFor: "userName"
  }, "Full Name"), /*#__PURE__*/React.createElement("input", {
    className: "border rounded w-full py-3 px-4 text-base text-primary-blue",
    id: "userName",
    type: "text",
    placeholder: "Full Name",
    defaultValue: "Bishal Mishra",
    onChange: () => setDisabledButton(false)
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm text-caption text-opacity-80 mb-2",
    htmlFor: "UserEmail"
  }, "Email Address"), /*#__PURE__*/React.createElement("input", {
    className: "border rounded w-full py-3 px-4 text-base text-primary-blue",
    id: "UserEmail",
    type: "text",
    placeholder: "Email Address",
    defaultValue: "bishal@idealaya.com.np",
    onChange: () => setDisabledButton(false)
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Buttons, {
    otherClass: "saveChange bg-main text-white text-base px-4 py-3",
    disabled: disabledButton,
    type: "button"
  }, "Save Changes")))));
};

export default EdtiProfilePopup;