import React from "react";
import {Button} from "lib";

const InvoicesTable = (props) => {
  return (
    <div className="w-825 h-auto rounded-md border-2 bg-white">
      <table className="w-full my-4 border-collapse table-fixed overflow-hidden">
        <thead className="border-b-1">
          <tr className="text-sm text-primary-blue border-b-1 text-left border-b">
            <th className="font-normal py-2 pl-6 w-3/4">Description</th>
            <th className="font-normal py-2 w-1/4">Amount</th>
            <th className="font-normal py-2 w-1/4">Date</th>
            <th className="w-1/4"></th>
          </tr>
        </thead>
        <tbody>
          {props.invoices.map((invoice) => {
            return (
              <tr className="text-base text-primary-blue" key={invoice.id}>
                <td className="pl-6 pt-4">{invoice.description}</td>
                <td className="pt-6">{invoice.amount}</td>
                <td className="pt-6">{invoice.date}</td>
                <td className="pt-6">
                  <Button otherClass="text-link py-1.5 px-4 border border-main">
                    View Invoice
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

export default InvoicesTable;
