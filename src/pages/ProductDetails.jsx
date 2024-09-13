import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../products';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 p-8">
      {product ? (
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6 flex flex-col md:flex-row items-center">
          {/* Imagem do produto */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-1/2 h-80 object-cover rounded-lg mb-6 md:mb-0 md:mr-6"
          />
          
          {/* Detalhes do produto */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">{product.name}</h1>
            <p className="text-2xl text-gray-600 mb-4">{product.price}</p>
            <p className="text-gray-700 mb-6">Esse produto é perfeito para fãs da arte de Aya Takano. Garanta já o seu!</p>
            
            {/* Botão de compra */}
            <button className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors duration-300">
              Comprar agora
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-700 text-2xl">Produto não encontrado!</p>
      )}
    </div>
  );
};

export default ProductDetails;
