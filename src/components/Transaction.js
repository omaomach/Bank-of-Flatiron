import React from "react";

function Transaction({ transaction, onDeleteTransaction }) {

  const { id } = transaction

  function handleDelete() {
    fetch(`http://localhost:8001/transactions/${id}`, {
      method: "DELETE",
    })
    onDeleteTransaction(id)
  }

  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default Transaction;
