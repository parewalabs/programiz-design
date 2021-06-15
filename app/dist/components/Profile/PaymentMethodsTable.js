import React from "react";
import Buttons from "../Buttons/Index";

const PaymentMethodsTable = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-825 h-auto rounded-md border-2"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full my-4 border-collapse "
  }, /*#__PURE__*/React.createElement("thead", {
    className: "border-b-1"
  }, /*#__PURE__*/React.createElement("tr", {
    className: "text-sm text-primary-blue border-b-1 text-left border-b "
  }, /*#__PURE__*/React.createElement("th", {
    className: "font-normal py-2 pl-6"
  }, "Payment Method"), /*#__PURE__*/React.createElement("th", {
    className: "font-normal py-2"
  }, "Expiration Date"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, props.methods.map(method => {
    return /*#__PURE__*/React.createElement("tr", {
      className: "text-base text-primary-blue",
      key: method.id
    }, /*#__PURE__*/React.createElement("td", {
      className: "pl-6 pt-4"
    }, method.paymentMethod), /*#__PURE__*/React.createElement("td", {
      className: "pt-6"
    }, method.expirationDate), /*#__PURE__*/React.createElement("td", {
      className: "pt-6"
    }, /*#__PURE__*/React.createElement(Buttons, {
      className: "text-link py-1.5 px-4 border border-main"
    }, "Remove")));
  }))));
};

export default PaymentMethodsTable;