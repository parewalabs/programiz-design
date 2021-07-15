import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "lib";
import { VIEW_INVOICE, DESCRIPTION, AMOUNT, DATE } from "lib/language/Profile.language";

const InvoicesTable = props => {
  const {
    invoices
  } = props;
  return /*#__PURE__*/React.createElement(Card, {
    shadowed: true,
    className: "table-responsive"
  }, /*#__PURE__*/React.createElement("table", {
    className: "table"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "table__head"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "table__head__col"
  }, DESCRIPTION), /*#__PURE__*/React.createElement("th", {
    className: "table__head__col"
  }, AMOUNT), /*#__PURE__*/React.createElement("th", {
    className: "table__head__col"
  }, DATE), /*#__PURE__*/React.createElement("th", {
    className: "table__head__col"
  }))), /*#__PURE__*/React.createElement("tbody", {
    className: "table__body"
  }, invoices.map(invoice => {
    return /*#__PURE__*/React.createElement("tr", {
      className: "table__body",
      key: invoice.id
    }, /*#__PURE__*/React.createElement("td", {
      className: "table__body__col"
    }, invoice.description), /*#__PURE__*/React.createElement("td", {
      className: "table__body__col"
    }, invoice.amount), /*#__PURE__*/React.createElement("td", {
      className: "table__body__col"
    }, invoice.date), /*#__PURE__*/React.createElement("td", {
      className: "table__body__col table__body__col--fw"
    }, /*#__PURE__*/React.createElement(Button, {
      type: "primary-outline",
      size: "small",
      fullWidth: true
    }, VIEW_INVOICE)));
  }))));
};

InvoicesTable.propTypes = {
  /** Data Array for the table*/
  invoices: PropTypes.array
};
InvoicesTable.defaultProps = {
  invoices: []
};
export default InvoicesTable;