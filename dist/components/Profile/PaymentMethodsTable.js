import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from '../../';
import { PAYMENT_METHOD, EXPIRATION_DATE, UPDATE_PAYMENT_METHOD } from '../../language/Profile.language';

const PaymentMethodsTable = props => {
  const {
    methods,
    popupDisplay
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
  }, methods.reverse().map((method, index) => {
    return /*#__PURE__*/React.createElement("tr", {
      className: "table__body__row",
      key: method.subscription_id
    }, /*#__PURE__*/React.createElement("td", {
      className: "table__body__col"
    }, "*** *** *** ", method.payment_information.last_four_digits, ' ', method.payment_information.card_type, ' ', method.payment_information.payment_method, ' ', index === 0 ? '(default)' : ''), /*#__PURE__*/React.createElement("td", {
      className: "table__body__col"
    }, method.payment_information.expiry_date), /*#__PURE__*/React.createElement("td", {
      className: "table__body__col table__body__col--fw"
    }, index === 0 ? /*#__PURE__*/React.createElement(Button, {
      type: "primary-outline",
      size: "small",
      fullWidth: true,
      onClick: () => popupDisplay(method.update_url)
    }, UPDATE_PAYMENT_METHOD) : ''));
  }))));
};

PaymentMethodsTable.propTypes = {
  /** Data Array for the table*/
  methods: PropTypes.array,

  /** Display popup for update payment methods */
  popupDisplay: PropTypes.func
};
PaymentMethodsTable.defaultProps = {
  methods: [],
  popupDisplay: () => {}
};
export default PaymentMethodsTable;