import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 p-8 pt-20">
      <h1 className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-400 m-0 p-2">
        Contato
      </h1>
      <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto text-center">
        Entre em contato conosco via email, telefone ou redes sociais. Estamos sempre prontos para responder às suas perguntas sobre Aya Takano e suas obras!
      </p>
      
      <div className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Nome
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none"
              placeholder="Seu nome"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none"
              placeholder="Seu e-mail"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
              Mensagem
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none"
              placeholder="Sua mensagem"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Enviar
          </button>
        </form>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Informações de Contato</h2>
        <p className="text-lg text-gray-700">
          <strong>Email:</strong> contato@ayatakano.com
        </p>
        <p className="text-lg text-gray-700">
          <strong>Telefone:</strong> +55 (11) 1234-5678
        </p>
        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-800">Siga-nos nas redes sociais</h3>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-gray-700 hover:text-purple-600 transition duration-300">
              Instagram
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition duration-300">
              Twitter
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition duration-300">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
