import React from "react";
import completed from "../../images/completed.png";
import Buttons from "../Buttons/Index";

const CompletedPopup = props => {
  const [showModal, setShowModal] = React.useState(false);

  const popupToggle = () => {
    setShowModal(!showModal);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Buttons, {
    otherClass: "text-white bg-main py-3 px-4",
    customClickEvent: () => popupToggle()
  }, /*#__PURE__*/React.createElement("span", {
    className: "justify-center flex"
  }, "Finish")), showModal ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center items-center pt-2 flex fixed inset-0 z-10 outline-none focus:outline-none bg-black bg-opacity-50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:w-705 w-327 h:705 border border-seperator bg-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full relative text-center"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl text-primary-blue font font-semibold absolute pt-8 left-2/4 -ml-20"
  }, "Successfully", /*#__PURE__*/React.createElement("br", null), "Completed ", props.type), /*#__PURE__*/React.createElement("img", {
    src: completed,
    className: "",
    alt: "completed successfull"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center pt-10"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-base text-primary-blue "
  }, "Up Next:")), /*#__PURE__*/React.createElement("h2", {
    className: "text-xl text-primary-blue font font-semibold flex justify-center pt-2"
  }, props.next), /*#__PURE__*/React.createElement("div", {
    className: "pt-4 flex justify-center "
  }, /*#__PURE__*/React.createElement(Buttons, {
    otherClass: "bg-main text-white py-3 px-20",
    customClickEvent: () => popupToggle()
  }, "Start the ", props.nextType)), /*#__PURE__*/React.createElement("a", {
    href: "/course",
    className: "py-4 flex justify-center text-link text-xs font-normal"
  }, "Go back to the Course Index"))))) : null);
};

export default CompletedPopup;