import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {

  const [transactionsInBank, setTransactionsInBank] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
    .then((res) => res.json())
    .then((data) => {
      setTransactionsInBank(data)
    })
  }, [])

  function addTransaction(newTransaction) {
    const updateTransactions = [...transactionsInBank, newTransaction]
    setTransactionsInBank(updateTransactions)
  }

  function searchTransaction(newSearch) {
    setSearch(newSearch)
  }

  function deleteTransaction(id) {
    const updateTransactions = transactionsInBank.filter((transaction) => transaction.id !== id)
    setTransactionsInBank(updateTransactions)
  }

  return (
    <div>
      <Search search={search} onSearchTransaction={searchTransaction}/>
      <AddTransactionForm onAddTransaction={addTransaction}/>
      <TransactionsList transactionsInBank={transactionsInBank} search={search} onDeleteTransaction={deleteTransaction}/>
    </div>
  );
}

export default AccountContainer;
