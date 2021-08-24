import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from '../../';
import {
  PAYMENT_METHOD,
  EXPIRATION_DATE,
  UPDATE_PAYMENT_METHOD,
} from '../../language/Profile.language';

const PaymentMethodsTable = (props) => {
  const { methods } = props;

  const updatePaymentMethod = (url) => {
    window.open(url);
  };

  return (
    <Card shadowed className="table-responsive">
      <table className="table">
        <thead className="table__head">
          <tr>
            <th className="table__head__col"> {PAYMENT_METHOD} </th>
            <th className="table__head__col">{EXPIRATION_DATE}</th>
            <th className="table__head__col"></th>
          </tr>
        </thead>
        <tbody className="table__body">
          {methods.reverse().map((method, index) => {
            return (
              <tr className="table__body__row" key={method.subscription_id}>
                <td className="table__body__col">
                  *** *** *** {method.payment_information.last_four_digits}{' '}
                  {method.payment_information.card_type}{' '}
                  {method.payment_information.payment_method}{' '}
                  {index === 0 ? '(default)' : ''}
                </td>
                <td className="table__body__col">
                  {method.payment_information.expiry_date}
                </td>
                <td className="table__body__col table__body__col--fw">
                  <Button
                    type="primary-outline"
                    size="small"
                    fullWidth
                    onClick={() => updatePaymentMethod(method.update_url)}
                  >
                    {UPDATE_PAYMENT_METHOD}
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

PaymentMethodsTable.propTypes = {
  /** Data Array for the table*/
  methods: PropTypes.array,
};

PaymentMethodsTable.defaultProps = {
  methods: [],
};

export default PaymentMethodsTable;
