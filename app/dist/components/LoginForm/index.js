import React, { useState } from "react";
import Buttons from "../Buttons/Index";

const LoginForm = props => {
  const [details, setDetails] = useState({
    email: "",
    password: ""
  });

  const submitHandler = e => {
    e.preventDefault();
    props.loginUser(details);
  };

  return /*#__PURE__*/React.createElement("form", {
    className: "w-327 lg:w-445",
    onSubmit: submitHandler
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm text-caption text-opacity-80 mb-2",
    htmlFor: "UserEmail"
  }, "Email Address"), /*#__PURE__*/React.createElement("input", {
    className: "border rounded w-full py-3 px-4 text-base text-primary-blue focus:outline-none focus:ring-2 focus:ring-main",
    id: "UserEmail",
    type: "text",
    placeholder: "Email Address",
    onChange: e => setDetails({ ...details,
      email: e.target.value
    }),
    value: details.email,
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm text-caption text-opacity-80 mb-2",
    htmlFor: "userName"
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    className: "border rounded w-full py-3 px-4 text-base text-primary-blue focus:outline-none focus:ring-2 focus:ring-main",
    id: "userName",
    type: "password",
    placeholder: "Password",
    onChange: e => setDetails({ ...details,
      password: e.target.value
    }),
    value: details.password,
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement(Buttons, {
    otherClass: "saveChange bg-main text-white text-base px-4 py-3",
    type: "submit"
  }, "Login")));
};

export default LoginForm;