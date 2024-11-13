import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Real Estate Management</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/properties">Properties</Link>
        <Link to="/customers">Customers</Link>
        <Link to="/transactions">Transactions</Link>
        <Link to="/employees">Employees</Link>
      </div>
    </nav>
  );
}

export default Navbar;