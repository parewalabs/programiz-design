import React from "react";

const MembershipTable = (props) => {
  return (
    <div className="w-445 h-168 rounded border-2 text-primary-blue">
      <table className="w-full mt-6 ml-6">
        <tbody>
          <tr>
            <td>
              <p className="text-sm">Type</p>
              <h4 className="text-lg text-primary-blue">{props.type}</h4>
            </td>
            <td>
              <p className="text-sm">Plan</p>
              <h4 className="text-lg text-primary-blue">{props.plan}</h4>
            </td>
          </tr>
          <tr>
            <td className="pt-6">
              <p className="text-sm">Last Payment Date</p>
              <h4 className="text-lg text-primary-blue">
                {props.lastPaymentDate}
              </h4>
            </td>
            <td className="pt-6">
              <p className="text-sm">Next Payment Date</p>
              <h4 className="text-lg text-primary-blue">
                {props.nextPaymentDate}
              </h4>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MembershipTable;
