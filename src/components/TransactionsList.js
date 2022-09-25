import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactionsInBank, search, onDeleteTransaction }) {

  const filteredTransaction = transactionsInBank.filter((transaction) => {
    let result = transaction.description.toLowerCase().includes(search)
    return result
  })

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Delete Transaction</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {filteredTransaction.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} onDeleteTransaction={onDeleteTransaction}/>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
