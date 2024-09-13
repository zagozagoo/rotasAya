import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow max-w-sm mx-auto">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-4" />
      <h2 className="text-xl font-bold truncate">{product.name}</h2>
      <p className="text-gray-600">{product.price}</p>
    </div>
  );
};

export default ProductCard;
