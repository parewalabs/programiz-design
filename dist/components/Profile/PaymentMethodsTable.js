import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "lib";
import { VIEW_INVOICE, PAYMENT_METHOD, EXPIRATION_DATE } from "lib/language/Profile.language";

const PaymentMethodsTable = props => {
  const {
    methods
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
  }, " ", PAYMENT_METHOD, " "), /*#__PURE__*/React.createElement("th", {
    className: "table__head__col"
  }, EXPIRATION_DATE), /*#__PURE__*/React.createElement("th", {
    className: "table__head__col"
  }))), /*#__PURE__*/React.createElement("tbody", {
    className: "table__body"
  }, methods.map(method => {
    return /*#__PURE__*/React.createElement("tr", {
      className: "table__body__row",
      key: method.id
    }, /*#__PURE__*/React.createElement("td", {
      className: "table__body__col"
    }, method.paymentMethod), /*#__PURE__*/React.createElement("td", {
      className: "table__body__col"
    }, method.expirationDate), /*#__PURE__*/React.createElement("td", {
      className: "table__body__col table__body__col--fw"
    }, /*#__PURE__*/React.createElement(Button, {
      type: "primary-outline",
      size: "small",
      fullWidth: true
    }, VIEW_INVOICE)));
  }))));
};

PaymentMethodsTable.propTypes = {
  /** Data Array for the table*/
  methods: PropTypes.array
};
PaymentMethodsTable.defaultProps = {
  methods: []
};
export default PaymentMethodsTable;