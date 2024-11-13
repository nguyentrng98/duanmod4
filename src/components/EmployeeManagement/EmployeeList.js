import React, { useState } from 'react';
import EmployeeForm from './EmployeeForm';
import './EmployeeManagement.css';

function EmployeeList() {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Nguyễn Văn A', position: 'Sales Manager', phone: '0901234567' },
    { id: 2, name: 'Trần Thị B', position: 'Real Estate Agent', phone: '0909876543' },
  ]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  const addOrEditEmployee = (employee) => {
    if (employee.id) {
      setEmployees(employees.map(emp => (emp.id === employee.id ? employee : emp)));
    } else {
      employee.id = employees.length + 1;
      setEmployees([...employees, employee]);
    }
    setSelectedEmployee(null);
  };

  const editEmployee = (employee) => {
    setSelectedEmployee(employee);
  };

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            <p>Name: {employee.name}</p>
            <p>Position: {employee.position}</p>
            <p>Phone: {employee.phone}</p>
            <button onClick={() => editEmployee(employee)}>Edit</button>
            <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <EmployeeForm selectedEmployee={selectedEmployee} onSubmit={addOrEditEmployee} />
    </div>
  );
}

export default EmployeeList;