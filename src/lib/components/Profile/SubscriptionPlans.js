import React from 'react';
import PropTypes from 'prop-types';

import { Button, Card } from '../..';
import { SUBSCRIBE, PLAN, PRICE } from '../../language/Profile.language';

const SubscriptionPlans = (props) => {
  const { plans, subscribedPlan, customClickEvent } = props;

  return (
    <Card shadowed className="table-responsive">
      <table className="table">
        <thead className="table__head">
          <tr>
            <th className="table__head__col"> {PLAN} </th>
            <th className="table__head__col">{PRICE}</th>
            <th className="table__head__col"></th>
          </tr>
        </thead>
        <tbody className="table__body">
          {plans.map((plan) => {
            return (
              <tr className="table__body__row" key={plan.id}>
                <td className="table__body__col">{plan.name}</td>
                <td className="table__body__col">
                  USD {plan.recurring_price['USD']}
                </td>
                <td className="table__body__col table__body__col--fw">
                  {subscribedPlan !== plan.name ? (
                    <Button
                      type="primary-outline"
                      size="small"
                      fullWidth
                      onClick={() => customClickEvent(plan.id)}
                    >
                      {SUBSCRIBE}
                    </Button>
                  ) : (
                    ''
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

SubscriptionPlans.propTypes = {
  /** Data Array for the table*/
  plans: PropTypes.array,
  /** Subscribed Plan*/
  subscribedPlan: PropTypes.string,
  /** Custom Click Event Listener*/
  customClickEvent: PropTypes.func,
};

SubscriptionPlans.defaultProps = {
  plans: [],
  subscribedPlan: '',
  customClickEvent: () => {},
};

export default SubscriptionPlans;
