import React, { useState, useEffect } from 'react';
import './Projetos.css';

const Projetos: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [gameStatus, setGameStatus] = useState<string>('');

  const handleImageClick = async (link: string, isPythonGame: boolean) => {
    setIsClicked(true);

    if (isPythonGame) {
      try { 
        const response = await fetch('http://127.0.0.1:5000/run-snake-game');
        const data = await response.json();
        
        if (data.error) {
          setGameStatus(`Erro: ${data.error}`);
        } else {
          setGameStatus(data.message);
          console.log(data.output); 
        }
      } catch (error) {
        console.error("Erro ao executar o script Python:", error);
        setGameStatus("Erro ao tentar rodar o jogo.");
      }
    } else {
      setTimeout(() => {
        if (link) {
          window.open(link, '_blank');
        }
      }, 1000);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
        }
      },
      { threshold: 0.5 }
    );

    const section = document.querySelector('.projetos-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  return (
    <div className="container px-4 py-8">
      <h1 className="text-center text-blue-400 text-lg">Projetos em que trabalhei</h1>
      <div className="mt-12 projetos-section">
        <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl mb-2">01</h3>
            <h4 className="text-xl mb-2">Barbearia El Macho</h4>
            <p className="text-gray-400 mb-4">
              Foi um desenvolvimento que fiz para um grande amigo, ele queria um site que
              pessoas próximas possam ver, então fiz um desenvolvimento web padrão utilizando ferramentas
              do mercado como Html5, CSS3, JavaScript, Bootstrap e VueJs, totalmente responsivo para qualquer aparelho, hospedado pelo próprio GitHub.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              alt="Barbearia El Macho"
              className={`rounded-lg shadow-lg ${isClicked ? 'clicked' : ''}`}
              height="300"
              src="./Imgs/ElMacho.png"
              width="300"
              onClick={() => handleImageClick('https://rocknicolas.github.io/Barbearia-El-Macho/', false)} 
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <img
              alt="Game Snake"
              className={`rounded-lg shadow-lg ${isClicked ? 'clicked' : ''}`}
              height="300"
              src="./Imgs/snake.png"
              width="300"
              onClick={() => handleImageClick('', true)} 
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <h3 className="text-2xl mb-2">02</h3>
            <h4 className="text-xl mb-2">Game Snake</h4>
            <p className="text-gray-400 mb-4">
              Este projeto foi meu primeiro projeto em PYTHON, uma implementação do jogo clássico "SNAKE", desenvolvido com a biblioteca Pygame. O objetivo é controlar uma cobrinha que cresce
              à medida que ela consome alimentos na tela. Através desse projeto, explorei a utilização de Pygame e foi uma ótima oportunidade para
              aprender e praticar o Python.
            </p>
            {gameStatus && <p>{gameStatus}</p>}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2">
            <h3 className="text-xl mb-2">03</h3>
            <h4 className="text-xl mb-2">Lojas de Suplementos</h4>
            <p className="text-gray-400 mb-4">
              Este projeto é um sistema de monitoramento do mercado de criptomoedas desenvolvido com React e TypeScript.
              Ele utiliza uma API em tempo real para fornecer dados atualizados sobre as criptomoedas, permitindo que
              os usuários acompanhem as flutuações do mercado de forma eficiente.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              alt="Monitoramento de Criptomoedas"
              className={`rounded-lg shadow-lg ${isClicked ? 'clicked' : ''}`}
              height="300"
              src="./Imgs/Cripto.png"
              width="300"
              onClick={() => handleImageClick('https://link-da-loja.com', false)} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projetos;
