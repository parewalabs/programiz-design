import React from 'react';
import { Card } from '../../';
import PropTypes from 'prop-types';
import { TYPE, PLAN, LAST_PAYMENT_DATE, NEXT_PAYMENT_DATE } from '../../language/Profile.language';

const MembershipTable = props => {
  const {
    type,
    plan,
    lastPaymentDate,
    nextPaymentDate
  } = props;
  return /*#__PURE__*/React.createElement(Card, {
    shadowed: true,
    className: "mw-445"
  }, /*#__PURE__*/React.createElement("table", {
    className: "table"
  }, /*#__PURE__*/React.createElement("tbody", {
    className: "table__body"
  }, /*#__PURE__*/React.createElement("tr", {
    className: "table__body__row"
  }, /*#__PURE__*/React.createElement("td", {
    className: "table__body__col pt-6x pb-3x"
  }, /*#__PURE__*/React.createElement("p", {
    className: "fs-tiny color-text-main"
  }, TYPE), /*#__PURE__*/React.createElement("h4", {
    className: "fs-h3main color-text-main"
  }, type)), /*#__PURE__*/React.createElement("td", {
    className: "table__body__col pt-6x pb-3x"
  }, /*#__PURE__*/React.createElement("p", {
    className: "fs-tiny color-text-main"
  }, PLAN), /*#__PURE__*/React.createElement("h4", {
    className: "fs-h3main color-text-main"
  }, plan))), /*#__PURE__*/React.createElement("tr", {
    className: "table__body__row"
  }, /*#__PURE__*/React.createElement("td", {
    className: "table__body__col pt-3x pb-6x"
  }, /*#__PURE__*/React.createElement("p", {
    className: "fs-tiny color-text-main"
  }, LAST_PAYMENT_DATE), /*#__PURE__*/React.createElement("h4", {
    className: "fs-h3main color-text-main"
  }, lastPaymentDate)), /*#__PURE__*/React.createElement("td", {
    className: "table__body__col pt-3x pb-6x"
  }, /*#__PURE__*/React.createElement("p", {
    className: "fs-tiny color-text-main"
  }, NEXT_PAYMENT_DATE), /*#__PURE__*/React.createElement("h4", {
    className: "fs-h3main color-text-main"
  }, nextPaymentDate))))));
};

MembershipTable.propTypes = {
  /** Label for membership type*/
  type: PropTypes.string,

  /** Label for membership plan*/
  plan: PropTypes.string,

  /** Last payment date*/
  lastPaymentDate: PropTypes.string,

  /** Next payment date*/
  nextPaymentDate: PropTypes.string
};
MembershipTable.defaultProps = {
  type: '',
  plan: '',
  lastPaymentDate: '',
  nextPaymentDate: ''
};
export default MembershipTable;