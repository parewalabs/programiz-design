import React from "react";
import {Card} from "lib";
import PropTypes from 'prop-types';

import {TYPE, PLAN, LAST_PAYMENT_DATE, NEXT_PAYMENT_DATE} from "lib/language/Profile.language";

const MembershipTable = (props) => {

  const { type, plan, lastPaymentDate, nextPaymentDate } = props;

  return (
    <Card shadowed className="mw-445">
      <table className="table">
        <tbody className="table__body">
          <tr className="table__body__row">
            <td className="table__body__col pt-6x pb-3x">
              <p className="fs-tiny color-text-main">{TYPE}</p>
              <h4 className="fs-h3main color-text-main">{type}</h4>
            </td>
            <td className="table__body__col pt-6x pb-3x">
              <p className="fs-tiny color-text-main">{PLAN}</p>
              <h4 className="fs-h3main color-text-main">{plan}</h4>
            </td>
          </tr>
          <tr className="table__body__row">
            <td className="table__body__col pt-3x pb-6x">
              <p className="fs-tiny color-text-main">{LAST_PAYMENT_DATE}</p>
              <h4 className="fs-h3main color-text-main">
                {lastPaymentDate}
              </h4>
            </td>
            <td className="table__body__col pt-3x pb-6x">
              <p className="fs-tiny color-text-main">{NEXT_PAYMENT_DATE}</p>
              <h4 className="fs-h3main color-text-main">
                {nextPaymentDate}
              </h4>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
};

MembershipTable.propTypes = {
  /** Label for membership type*/
  type: PropTypes.string,
  /** Label for membership plan*/
  plan: PropTypes.string,
  /** Last payment date*/
  lastPaymentDate: PropTypes.string,
  /** Next payment date*/
  nextPaymentDate: PropTypes.string,
}

MembershipTable.defaultProps = {
  type: "",
  plan: "",
  lastPaymentDate: "",
  nextPaymentDate: ""
}

export default MembershipTable;
