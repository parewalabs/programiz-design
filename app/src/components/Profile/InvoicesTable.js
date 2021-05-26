import React from "react";

const InvoicesTable = (props) => {
  return (
    <div className="w-825 h-auto rounded-md border-2">
      <table className="w-full my-4 border-collapse ">
        <thead className="border-b-1">
          <tr className="text-sm text-primary-blue border-b-1 text-left border-b ">
            <th className="font-normal py-2 pl-6">Description</th>
            <th className="font-normal py-2">Amount</th>
            <th className="font-normal py-2">Date</th>
            <th></th>
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
                  <button className="text-link font-semibold rounded py-2 px-4 border border-main">
                    View Invoice
                  </button>
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
