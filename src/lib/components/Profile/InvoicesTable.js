import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from '../../';
import {
  VIEW_INVOICE,
  DESCRIPTION,
  AMOUNT,
  DATE,
} from '../../language/Profile.language';
import { formatDateDMY } from '../../utils/helper';

const InvoicesTable = (props) => {
  const { invoices } = props;

  const goToInvoice = (url) => {
    window.open(url);
  };

  return (
    <Card shadowed className="table-responsive">
      <table className="table">
        <thead className="table__head">
          <tr>
            <th className="table__head__col">{DESCRIPTION}</th>
            <th className="table__head__col">{AMOUNT}</th>
            <th className="table__head__col">{DATE}</th>
            <th className="table__head__col"></th>
          </tr>
        </thead>
        <tbody className="table__body">
          {invoices.map((invoice) => {
            return (
              <tr className="table__body" key={invoice.id}>
                <td className="table__body__col">{invoice.plan}</td>
                <td className="table__body__col">
                  {invoice.amount} {invoice.currency}
                </td>
                <td className="table__body__col">
                  {formatDateDMY(invoice.payout_date)}
                </td>
                <td className="table__body__col table__body__col--fw">
                  <Button
                    type="primary-outline"
                    size="small"
                    fullWidth
                    onClick={() => goToInvoice(invoice.receipt_url)}
                  >
                    {VIEW_INVOICE}
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

InvoicesTable.propTypes = {
  /** Data Array for the table*/
  invoices: PropTypes.array,
};

InvoicesTable.defaultProps = {
  invoices: [],
};

export default InvoicesTable;
