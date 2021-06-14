import React from "react";
import completed from "../../images/completed.png";
import Buttons from "../Buttons/Index";

const CompletedPopup = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "lg:w-705 w-327 h-autp border border-seperator bg-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full relative text-center"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl text-primary-blue font font-semibold absolute pt-8 left-2/4 -ml-20"
  }, "Successfully", /*#__PURE__*/React.createElement("br", null), "Completed ", props.type === "challenge" ? "Challenge" : "Lesson"), /*#__PURE__*/React.createElement("img", {
    src: completed,
    className: "",
    alt: "completed successfull"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: props.type !== "challenge" ? "hidden" : ""
  }, /*#__PURE__*/React.createElement("p", {
    className: "flex justify-center text-base text-primary-blue pt-10 pb-8"
  }, "We added ", props.score, " points to your leaderboard"), /*#__PURE__*/React.createElement("hr", {
    className: "flex justify-center border border-seperator bg-seperator mx-20"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center pt-10"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-base text-primary-blue "
  }, "Up Next:")), /*#__PURE__*/React.createElement("h2", {
    className: "text-xl text-primary-blue font font-semibold flex justify-center pt-2"
  }, props.next), /*#__PURE__*/React.createElement("div", {
    className: "pt-4 flex justify-center "
  }, /*#__PURE__*/React.createElement(Buttons, {
    otherClass: "bg-main text-white py-3 px-20"
  }, "Start the ", props.type === "challenge" ? "Challenge" : "Quiz")), /*#__PURE__*/React.createElement("span", {
    className: "pt-4 pb-40 flex justify-center text-link text-xs font-normal"
  }, "Go back to the", " ", props.type === "challenge" ? "Challenge" : "Course Index")));
};

export default CompletedPopup;