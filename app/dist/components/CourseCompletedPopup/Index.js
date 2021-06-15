import React from "react";
import completed from "../../images/completed.png";
import certificate from "../../images/certificate.png";
import Buttons from "../Buttons/Index";

const CourseCompletedPopup = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-705 h-1145 border border-seperator rounded"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full relative text-center"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl text-primary-blue font font-semibold absolute pt-8 left-2/4 -ml-20"
  }, "Successfully", /*#__PURE__*/React.createElement("br", null), "Completed Course"), /*#__PURE__*/React.createElement("img", {
    src: completed,
    alt: "Completed Successfully"
  })), /*#__PURE__*/React.createElement("div", {
    className: "px-24"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "pt-16 flex justify-center text-xl font-semibold text-primary-blue"
  }, "Your Course Certificate"), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 border-4 border-compiler-base rounded shadow-certificate"
  }, /*#__PURE__*/React.createElement("img", {
    src: certificate,
    alt: "certificate"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pt-4 flex justify-center "
  }, /*#__PURE__*/React.createElement(Buttons, {
    otherClass: "text-link py-3 px-6 border border-main"
  }, "Download Course Certificate")), /*#__PURE__*/React.createElement("hr", {
    className: "flex justify-center border border-seperator mt-10"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center pt-10"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-base text-primary-blue "
  }, "Up Next:")), /*#__PURE__*/React.createElement("h2", {
    className: "text-xl text-primary-blue font font-semibold flex justify-center pt-2"
  }, props.next), /*#__PURE__*/React.createElement("div", {
    className: "pt-4 flex justify-center "
  }, /*#__PURE__*/React.createElement(Buttons, {
    otherClass: "bg-main text-white py-3 px-16"
  }, "Browse More Courses")), /*#__PURE__*/React.createElement("span", {
    className: "pt-4 flex justify-center text-link text-xs font-normal"
  }, "Go back to the Course Index")));
};

export default CourseCompletedPopup;