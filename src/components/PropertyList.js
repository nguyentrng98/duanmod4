import React from 'react';

function PropertyList() {
  const properties = [
    { id: 1, address: '123 Main St', type: 'Apartment', price: '$500,000' },
    { id: 2, address: '456 Oak St', type: 'House', price: '$850,000' },
  ];

  return (
    <div>
      <h2>Properties</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <p>Address: {property.address}</p>
            <p>Type: {property.type}</p>
            <p>Price: {property.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PropertyList;