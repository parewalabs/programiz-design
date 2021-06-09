import React from "react";
import Buttons from "../Buttons/Index";

const LoginForm = props => {
  return /*#__PURE__*/React.createElement("form", {
    className: "w-445 lg:mx-32",
    onSubmit: props.handleSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm text-caption text-opacity-80 mb-2",
    htmlFor: "UserEmail"
  }, "Email Address"), /*#__PURE__*/React.createElement("input", {
    className: "border rounded w-full py-3 px-4 text-base text-primary-blue focus:outline-none focus:ring-2 focus:ring-main",
    id: "UserEmail",
    type: "text",
    placeholder: "Email Address"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm text-caption text-opacity-80 mb-2",
    htmlFor: "userName"
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    className: "border rounded w-full py-3 px-4 text-base text-primary-blue focus:outline-none focus:ring-2 focus:ring-main",
    id: "userName",
    type: "password",
    placeholder: "Password"
  })), /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement(Buttons, {
    otherClass: "saveChange bg-main text-white text-base px-4 py-3",
    type: "submit"
  }, "Login")));
};

export default LoginForm;