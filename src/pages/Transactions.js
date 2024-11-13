// src/components/TransactionManagement/Transactions.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Transactions.css';

function Transactions() {
  const [transactions, setTransactions] = useState([
    { id: 1, property: 'Luxury Villa', buyer: 'John Doe', price: '$1,200,000', date: '2024-11-01' },
    { id: 2, property: 'Downtown Apartment', buyer: 'Jane Smith', price: '$900,000', date: '2024-10-15' },
  ]);

  const handleDelete = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  return (
    <div className="transactions">
      <header className="transactions-header">
        <h2>Transaction Management</h2>
        <Link to="/transactions/add" className="btn">Add New Transaction</Link>
      </header>

      <div className="transaction-list">
        {transactions.length === 0 ? (
          <p>No transactions available.</p>
        ) : (
          <ul>
            {transactions.map((transaction) => (
              <li key={transaction.id}>
                <div className="transaction-info">
                  <h3>{transaction.property}</h3>
                  <p>Buyer: {transaction.buyer}</p>
                  <p>Price: {transaction.price}</p>
                  <p>Date: {transaction.date}</p>
                </div>
                <div className="transaction-actions">
                  <Link to={`/transactions/edit/${transaction.id}`} className="btn">Edit</Link>
                  <button onClick={() => handleDelete(transaction.id)} className="btn delete-btn">
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Transactions;
