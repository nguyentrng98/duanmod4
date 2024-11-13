import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import EmployeeList from './components/EmployeeManagement/EmployeeList';
import PropertyList from './components/PropertyList';
import CustomerList from './components/CustomerList';
import TransactionList from './components/TransactionList';
import './App.css';


import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/">
            <h2>Hệ thống quản lí bất động sản</h2>
          </Route>
          <Route path="/home" component={Home} />
          <Route path="/properties" component={PropertyList} />
          <Route path="/customers" component={CustomerList} />
          <Route path="/transactions" component={TransactionList} />
          <Route path="/employees" component={EmployeeList} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;