import React from "react";
import Buttons from "../Buttons/Index";

const InvoicesTable = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-825 h-auto rounded-md border-2"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full my-4 border-collapse table-fixed overflow-hidden"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "border-b-1"
  }, /*#__PURE__*/React.createElement("tr", {
    className: "text-sm text-primary-blue border-b-1 text-left border-b"
  }, /*#__PURE__*/React.createElement("th", {
    className: "font-normal py-2 pl-6 w-3/4"
  }, "Description"), /*#__PURE__*/React.createElement("th", {
    className: "font-normal py-2 w-1/4"
  }, "Amount"), /*#__PURE__*/React.createElement("th", {
    className: "font-normal py-2 w-1/4"
  }, "Date"), /*#__PURE__*/React.createElement("th", {
    className: "w-1/4"
  }))), /*#__PURE__*/React.createElement("tbody", null, props.invoices.map(invoice => {
    return /*#__PURE__*/React.createElement("tr", {
      className: "text-base text-primary-blue",
      key: invoice.id
    }, /*#__PURE__*/React.createElement("td", {
      className: "pl-6 pt-4"
    }, invoice.description), /*#__PURE__*/React.createElement("td", {
      className: "pt-6"
    }, invoice.amount), /*#__PURE__*/React.createElement("td", {
      className: "pt-6"
    }, invoice.date), /*#__PURE__*/React.createElement("td", {
      className: "pt-6"
    }, /*#__PURE__*/React.createElement(Buttons, {
      otherClass: "text-link py-1.5 px-4 border border-main"
    }, "View Invoice")));
  }))));
};

export default InvoicesTable;