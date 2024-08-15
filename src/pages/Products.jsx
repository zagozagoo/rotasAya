import React from 'react';

import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Aya Mousepad', price: 'R$190,00', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT765FVGKluzJDP0l7FMI_zNXGuCV2zG6HP2LPKuRs5vlgIjY4sGjrt1oVezqIJWbkW6Rn05aNQa97l-OIrOaDt9CEym6Dq5r6hUQy_tUE&usqp=CAE' },
  { id: 2, name: 'Case silicone', price: 'R$30,00', image: 'https://i.etsystatic.com/47730843/r/il/af2abc/6179906670/il_fullxfull.6179906670_rwaa.jpg' },
  { id: 3, name: 'Tapeçaria', price: 'R$399,99', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT9RQiob5x7mx1bT3EI4VBMEeA8RFJC0K4xfW87Y4BP2Z8yJXiHA9HadiXWuwghO6VgSvVO7I2RphE6FWbo7IGjG0Q-TuH3Bh3vLS5wZCFJ4e-9Yso6ErFg&usqp=CAE' }
];

const Products = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Produtos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
