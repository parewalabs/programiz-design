import React from "react";
import PropTypes from "prop-types";
import {Button, Card} from "lib";
import {VIEW_INVOICE, DESCRIPTION, AMOUNT, DATE} from "lib/language/Profile.language";

const InvoicesTable = (props) => {
  const {invoices} = props;

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
                <td className="table__body__col">{invoice.description}</td>
                <td className="table__body__col">{invoice.amount}</td>
                <td className="table__body__col">{invoice.date}</td>
                <td className="table__body__col table__body__col--fw">
                  <Button type="primary-outline" size="small" fullWidth>
                    { VIEW_INVOICE }
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
