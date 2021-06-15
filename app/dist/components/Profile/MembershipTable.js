import React from "react";

const MembershipTable = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "lg:w-445 w-327 h-168 rounded border-2 text-primary-blue"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full mt-6 ml-6"
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("p", {
    className: "text-sm"
  }, "Type"), /*#__PURE__*/React.createElement("h4", {
    className: "text-lg text-primary-blue"
  }, props.type)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("p", {
    className: "text-sm"
  }, "Plan"), /*#__PURE__*/React.createElement("h4", {
    className: "text-lg text-primary-blue"
  }, props.plan))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "pt-6"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm"
  }, "Last Payment Date"), /*#__PURE__*/React.createElement("h4", {
    className: "text-lg text-primary-blue"
  }, props.lastPaymentDate)), /*#__PURE__*/React.createElement("td", {
    className: "pt-6"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm"
  }, "Next Payment Date"), /*#__PURE__*/React.createElement("h4", {
    className: "text-lg text-primary-blue"
  }, props.nextPaymentDate))))));
};

export default MembershipTable;