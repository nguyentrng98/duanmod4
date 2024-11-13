import React, { useState, useEffect } from 'react';

function EmployeeForm({ selectedEmployee, onSubmit }) {
  const [employee, setEmployee] = useState({ id: null, name: '', position: '', phone: '' });

  useEffect(() => {
    if (selectedEmployee) {
      setEmployee(selectedEmployee);
    } else {
      setEmployee({ id: null, name: '', position: '', phone: '' });
    }
  }, [selectedEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(employee);
    setEmployee({ id: null, name: '', position: '', phone: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{employee.id ? "Edit Employee" : "Add New Employee"}</h3>
      <input
        type="text"
        name="name"
        value={employee.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="position"
        value={employee.position}
        onChange={handleChange}
        placeholder="Position"
        required
      />
      <input
        type="text"
        name="phone"
        value={employee.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
      />
      <button type="submit">{employee.id ? "Update" : "Add"}</button>
    </form>
  );
}

export default EmployeeForm;