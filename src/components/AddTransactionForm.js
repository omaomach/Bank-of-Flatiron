import React, { useState } from "react";

function AddTransactionForm({ onAddTransaction }) {

  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: ""
  })

  function handleChange(event) {
    const key = event.target.id
    setFormData({
      ...formData,
      [key]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "content-Type":"application/json",
      },
      body: JSON.stringify(formData)
    })
    .then((res) => res.json())
    .then((data) => onAddTransaction(data))
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" id="date" name="date" placeholder="Date" value={formData.date} onChange={handleChange}/>
          <input type="text" id="description" name="description" placeholder="Name" value={formData.description} onChange={handleChange}/>
          <input type="text" id="category" name="category" placeholder="Category" value={formData.category} onChange={handleChange}/>
          <input type="number" id="amount" name="amount" placeholder="Amount" step="0.01" value={formData.amount} onChange={handleChange}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
