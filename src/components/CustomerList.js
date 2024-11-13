import React from 'react';

function CustomerList() {
  const customers = [
    { id: 1, name: 'John Doe', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', phone: '098-765-4321' },
  ];

  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>
            <p>Name: {customer.name}</p>
            <p>Phone: {customer.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerList;