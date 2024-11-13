// src/components/CustomerManagement/Customers.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Customers.css';

function Customers() {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Doe', phone: '123-456-7890', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', phone: '987-654-3210', email: 'jane.smith@example.com' },
  ]);

  const handleDelete = (id) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  return (
    <div className="customers">
      <header className="customers-header">
        <h2>Customer Management</h2>
        <Link to="/customers/add" className="btn">Add New Customer</Link>
      </header>

      <div className="customer-list">
        {customers.length === 0 ? (
          <p>No customers available.</p>
        ) : (
          <ul>
            {customers.map((customer) => (
              <li key={customer.id}>
                <div className="customer-info">
                  <h3>{customer.name}</h3>
                  <p>Phone: {customer.phone}</p>
                  <p>Email: {customer.email}</p>
                </div>
                <div className="customer-actions">
                  <Link to={`/customers/edit/${customer.id}`} className="btn">Edit</Link>
                  <button onClick={() => handleDelete(customer.id)} className="btn delete-btn">
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

export default Customers;
