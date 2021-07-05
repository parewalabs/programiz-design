import React from "react";
import {Button} from "lib";

const PaymentMethodsTable = (props) => {
  return (
    <div className="w-825 h-auto rounded-md border-2 bg-white">
      <table className="w-full my-4 border-collapse ">
        <thead className="border-b-1">
          <tr className="text-sm text-primary-blue border-b-1 text-left border-b ">
            <th className="font-normal py-2 pl-6">Payment Method</th>
            <th className="font-normal py-2">Expiration Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.methods.map((method) => {
            return (
              <tr className="text-base text-primary-blue" key={method.id}>
                <td className="pl-6 pt-4">{method.paymentMethod}</td>
                <td className="pt-6">{method.expirationDate}</td>
                <td className="pt-6">
                  <Button className="text-link py-1.5 px-4 border border-main">
                    Remove
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentMethodsTable;
