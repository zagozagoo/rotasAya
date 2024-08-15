import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Produto 1', price: 'R$100,00', image: '/prod1.jpg' },
  { id: 2, name: 'Produto 2', price: 'R$200,00', image: '/prod2.jpg' },
  { id: 3, name: 'Produto 3', price: 'R$300,00', image: '/prod3.jpg' }
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  return (
    <div className="container mx-auto p-4">
      {product ? (
        <div className="max-w-md mx-auto">
          <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-lg mb-4" />
          <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl text-gray-600">{product.price}</p>
        </div>
      ) : (
        <p>Produto não encontrado!</p>
      )}
    </div>
  );
};

export default ProductDetails;
