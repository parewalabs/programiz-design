import React from "react";
import refer from "../../icons/refer.svg";
import Buttons from "../Buttons/Index";

const OfferCard = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-327 lg:w-350 h-200 rounded border-2 text-primary-blue focus:ring-2 hover:border-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pt-6 px-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "float-left pr-4"
  }, /*#__PURE__*/React.createElement("img", {
    src: refer,
    alt: "refer and get pro"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pl-4 py-1"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl font-semibold"
  }, "Refer & Get PRO!!!"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm"
  }, "For every friend you invite, get 5 days of PRO for free."))), /*#__PURE__*/React.createElement("div", {
    className: "pt-5 px-4"
  }, /*#__PURE__*/React.createElement(Buttons, {
    otherClass: "w-full bg-shades20 text-link py-3"
  }, "Start Inviting")));
};

export default OfferCard;