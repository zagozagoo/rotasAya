import React from 'react';
import Card from '../components/Card';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 p-8 pt-20">
      <h1 className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-400 m-0 p-2">
        Sobre Aya Takano
      </h1>
      <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto text-center">
        Aya Takano é uma das artistas contemporâneas mais emocionantes do Japão. Membro do coletivo artístico Kaikai Kiki de Takashi Murakami, ela cria pinturas e ilustrações excêntricas no estilo 'Superflat'. Este estilo é conhecido por suas cores vibrantes e imagens cartunescas, inspiradas tanto por tradições japonesas como o ukiyo-e quanto por mangás e animes.
      </p>
      <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto text-center">
        O estilo de Takano se destaca pelos personagens de olhos grandes e pernas longas, vestindo roupas fluidas em cenários fantásticos. Mas nem tudo é o que parece nesse mundo estranho de aparente inocência. Vamos mergulhar na arte e nas ideias dessa fascinante artista que conquistou o mundo da arte internacional.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          title="A Call from the Abyss"
          description="Cheio de imaginação, 'A Call From the Abyss' de Aya Takano nos transporta para um mundo mágico onde os limites são infinitos. Imagine-se em um mar vibrante, não de água, mas de uma paleta arco-íris repleta de criaturas fantásticas."
          imageUrl="https://www.singulart.com/blog/wp-content/uploads/2024/04/A-Call-from-the-Abyss.jpg"
        />
        <Card
          title="Sky is the Limit"
          description="Em um nível mais profundo, 'Sky is the Limit' aborda temas existenciais. Ela nos convida a contemplar os mistérios do universo e da humanidade. As pinturas de Takano retratam formas leves em ambientes celestiais, lembrando-nos de pausar e refletir sobre a essência da realidade."
          imageUrl="https://www.singulart.com/blog/wp-content/uploads/2024/04/Sky-is-the-Limit.jpg"
        />
        <Card
          title="The Way to Revolution"
          description="Takano cria mundos de fantasia curiosos, coloridos e imaginativos, repletos de personagens jovens e estilizados com olhos enormes e pernas longas. Apesar da aparência utópica, sua arte é rica em significados complexos."
          imageUrl="https://cdn.thecollector.com/wp-content/uploads/2021/12/aya-takano-way-to-revolution.jpg"
        />
      </div>
    </div>
  );
};

export default About;
