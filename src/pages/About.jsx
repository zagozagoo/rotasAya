import React from 'react';
import Card from '../components/Card';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Sobre</h1>
      <p className="text-lg text-gray-700">Aya Takano is one of Japan’s most exciting contemporary artists. A member of Takashi Murakami’s Kaikai Kiki art collective, she makes quirky paintings and illustrations in the ‘Superflat’ style. This is known for its flat, bright colors and cartoonish imagery, which is inspired as much by Japanese traditions such as ukiyo-e as by manga and anime. Takano’s style stands out for its doe-eyed, long-legged young people wearing floaty clothes in fantastical scenarios. But not all is as it seems in her strange world of apparent innocence. We look into the art and ideas of this fascinating artist who has taken the international art world by storm.</p>
      <div className="p-4 space-y-4 flex items-stretch">
            <Card
              title="A Call from the Abyss"
              description="Awash in imagination, Aya Takano’s 'A Call From the Abyss' transports us to a magical world where boundaries are limitless. Imagine: you stand amidst a vibrant sea, not of water, but of a rainbow palette teeming with fantastical creatures."
              imageUrl="https://www.singulart.com/blog/wp-content/uploads/2024/04/A-Call-from-the-Abyss.jpg"
            />
            <Card
              title="Sky is the Limit"
              description="On a deeper level, 'Sky is the Limit' delves into existential themes. It prompts us to contemplate the mysteries of the universe and humankind. Takano’s paintings depict weightless forms in celestial environments. These serve as a reminder to pause and reflect on the essence of reality, the impermanence of time, and the boundless human spirit. The artwork becomes a focal point for philosophical inquiry, inviting viewers to ponder life’s most fundamental questions as they engage with the captivating art."
              imageUrl="https://www.singulart.com/blog/wp-content/uploads/2024/04/Sky-is-the-Limit.jpg"
            />
             <Card
              title="The Way to Revolution"
              description="In all her art, whether illustration, drawing, or painting, Takano creates curious fantasy worlds where anything can happen. Her complex stories are colorful, quirky and imaginative, featuring stylized, youthful characters with huge eyes and long legs. While at first glance her art might seem naïve and utopian, it is layered with richly complex meanings."
              imageUrl="https://cdn.thecollector.com/wp-content/uploads/2021/12/aya-takano-way-to-revolution.jpg"
            />
          </div>
    </div>
  );
};

export default About;
