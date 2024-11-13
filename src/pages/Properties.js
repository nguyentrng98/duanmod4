// src/components/PropertyManagement/Properties.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Properties.css';

function Properties() {
  const [properties, setProperties] = useState([
    { id: 1, name: 'Luxury Villa', location: 'Beverly Hills', price: '$1,200,000', type: 'Villa' },
    { id: 2, name: 'Downtown Apartment', location: 'New York', price: '$900,000', type: 'Apartment' },
  ]);

  const handleDelete = (id) => {
    setProperties(properties.filter((property) => property.id !== id));
  };

  return (
    <div className="properties">
      <header className="properties-header">
        <h2>Property Management</h2>
        <Link to="/properties/add" className="btn">Add New Property</Link>
      </header>

      <div className="property-list">
        {properties.length === 0 ? (
          <p>No properties available.</p>
        ) : (
          <ul>
            {properties.map((property) => (
              <li key={property.id}>
                <div className="property-info">
                  <h3>{property.name}</h3>
                  <p>Location: {property.location}</p>
                  <p>Price: {property.price}</p>
                  <p>Type: {property.type}</p>
                </div>
                <div className="property-actions">
                  <Link to={`/properties/edit/${property.id}`} className="btn">Edit</Link>
                  <button onClick={() => handleDelete(property.id)} className="btn delete-btn">
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

export default Properties;
