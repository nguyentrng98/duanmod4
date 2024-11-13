import React from 'react';

function TransactionList() {
  const transactions = [
    { id: 1, customer: 'John Doe', property: '123 Main St', status: 'Completed' },
    { id: 2, customer: 'Jane Smith', property: '456 Oak St', status: 'Pending' },
  ];

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            <p>Customer: {transaction.customer}</p>
            <p>Property: {transaction.property}</p>
            <p>Status: {transaction.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;