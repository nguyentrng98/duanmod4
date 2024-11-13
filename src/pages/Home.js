import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Real Estate Management System</h1>
        <p>Your one-stop solution for managing properties, customers, employees, and transactions.</p>
      </header>

      <section className="home-links">
        <h2>Quick Access</h2>
        <div className="link-cards">
          <div className="link-card">
            <h3>Properties</h3>
            <p>Manage and view your properties listings.</p>
            <Link to="/properties" className="btn">Go to Properties</Link>
          </div>

          <div className="link-card">
            <h3>Customers</h3>
            <p>Manage customer profiles and interactions.</p>
            <Link to="/customers" className="btn">Go to Customers</Link>
          </div>

          <div className="link-card">
            <h3>Employees</h3>
            <p>View and manage employee details.</p>
            <Link to="/employees" className="btn">Go to Employees</Link>
          </div>

          <div className="link-card">
            <h3>Transactions</h3>
            <p>Track and manage transactions related to properties.</p>
            <Link to="/transactions" className="btn">Go to Transactions</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;