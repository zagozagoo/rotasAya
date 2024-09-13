import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200 p-8 flex flex-col justify-center items-center">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
          Bem-vindo!
        </h1>
        <p className="text-xl text-gray-800 mb-4">
          Explore nossos produtos e conheça a incrível trajetória de <span className="font-bold text-purple-600">Aya Takano</span>.
        </p>
        <button className="mt-6 bg-purple-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-purple-500 transition duration-300">
          Descubra mais
        </button>
      </div>
    </div>
  );
};

export default Home;
