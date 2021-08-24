import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from '../../';
import { formatDateDMY } from '../../utils/helper';
import {
  PAYMENT_METHOD,
  EXPIRATION_DATE,
  UPDATE_PAYMENT_METHOD,
} from '../../language/Profile.language';

const PaymentMethodsTable = (props) => {
  const { methods } = props;

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
          {methods.map((method) => {
            return (
              <tr className="table__body__row" key={method.id}>
                <td className="table__body__col">{method.paymentMethod}</td>
                <td className="table__body__col">
                  {formatDateDMY(method.expirationDate)}
                </td>
                <td className="table__body__col table__body__col--fw">
                  <Button type="primary-outline" size="small" fullWidth>
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
