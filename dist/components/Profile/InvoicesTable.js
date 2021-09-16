import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from '../../';
import { VIEW_INVOICE, DESCRIPTION, AMOUNT, DATE } from '../../language/Profile.language';
import { formatDateDMY } from '../../utils/helper';

const InvoicesTable = props => {
  const {
    invoices
  } = props;

  const goToInvoice = url => {
    window.open(url, 'Invoice', 'width=500,height=500');
  };

  return /*#__PURE__*/React.createElement(Card, {
    shadowed: true,
    className: "table-invoice"
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
  }, invoices.reverse().map(invoice => {
    return /*#__PURE__*/React.createElement("tr", {
      className: "table__body",
      key: invoice.id
    }, /*#__PURE__*/React.createElement("td", {
      className: "table__body__col"
    }, invoice.plan), /*#__PURE__*/React.createElement("td", {
      className: "table__body__col"
    }, invoice.amount, " ", invoice.currency), /*#__PURE__*/React.createElement("td", {
      className: "table__body__col"
    }, formatDateDMY(invoice.payout_date)), /*#__PURE__*/React.createElement("td", {
      className: "table__body__col table__body__col--fw"
    }, /*#__PURE__*/React.createElement(Button, {
      type: "primary-outline",
      size: "small",
      fullWidth: true,
      onClick: () => goToInvoice(invoice.receipt_url)
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