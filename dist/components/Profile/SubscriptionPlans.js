import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from '../..';
import { SUBSCRIBE, PLAN, PRICE } from '../../language/Profile.language';

const SubscriptionPlans = props => {
  const {
    plans,
    customClickEvent
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
  }, " ", PLAN, " "), /*#__PURE__*/React.createElement("th", {
    className: "table__head__col"
  }, PRICE), /*#__PURE__*/React.createElement("th", {
    className: "table__head__col"
  }))), /*#__PURE__*/React.createElement("tbody", {
    className: "table__body"
  }, plans.map(plan => {
    return /*#__PURE__*/React.createElement("tr", {
      className: "table__body__row",
      key: plan.id
    }, /*#__PURE__*/React.createElement("td", {
      className: "table__body__col"
    }, plan.name), /*#__PURE__*/React.createElement("td", {
      className: "table__body__col"
    }, "USD ", plan.recurring_price['USD']), /*#__PURE__*/React.createElement("td", {
      className: "table__body__col table__body__col--fw"
    }, /*#__PURE__*/React.createElement(Button, {
      type: "primary-outline",
      size: "small",
      fullWidth: true,
      onClick: () => customClickEvent(plan.id)
    }, SUBSCRIBE)));
  }))));
};

SubscriptionPlans.propTypes = {
  /** Data Array for the table*/
  plans: PropTypes.array,

  /** Custom Click Event Listener*/
  customClickEvent: PropTypes.func
};
SubscriptionPlans.defaultProps = {
  plans: [],
  customClickEvent: () => {}
};
export default SubscriptionPlans;