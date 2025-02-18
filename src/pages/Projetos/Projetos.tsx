import React, { useState } from 'react';
import './Projetos.css';

const Projetos: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleImageClick = (link: string) => {
    setIsClicked(true);
    
    setTimeout(() => {
      if (link) {
        // Para abrir a aplicação ou link após a animação
        window.open(link, '_blank');
      }
    }, 1000); // 1 segundo de atraso após a animação de rotação
  };

  return (
    <div className="container px-4 py-8">
      <h1 className="text-center text-blue-400 text-lg">Projetos em que trabalhei</h1>
    
      <div className="mt-12">
        <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl mb-2">01</h3>
            <h4 className="text-xl mb-2">Barbearia El Macho</h4>
            <p className="text-gray-400 mb-4">
              Foi um desenvolvimento que fiz para um grande amigo, ele queria um site que 
              pessoas proximas possam ver, então fiz um desenvolvimento web padrão ultizando ferramentas
              do mercado como Html5, CSS3, JavaScript, Bootstrap e VueJs, totalmente responsivo para qualquer aparelho, hospedado pelo o 
              proprio GitHub.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              alt="Barbearia El Macho"
              className={`rounded-lg shadow-lg ${isClicked ? 'clicked' : ''}`}
              height="300"
              src="./public/Imgs/ElMacho.png"
              width="300"
              onClick={() => handleImageClick('https://link-do-projeto-el-macho.com')} // Link do projeto
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <img
              alt="Game Snake"
              className={`rounded-lg shadow-lg ${isClicked ? 'clicked' : ''}`}
              height="300"
              src="./public/Imgs/sanke.png"
              width="300"
              onClick={() => handleImageClick('https://link-para-o-jogo-snake.com')} // Link para o jogo Snake
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <h3 className="text-2xl mb-2">02</h3>
            <h4 className="text-xl mb-2">Game Snake</h4>
            <p className="text-gray-400 mb-4">
              Este projeto foi meu primeiro projeto em PYTHON é uma implementação do jogo clássico "SNAKE", desenvolvido com a biblioteca Pygame. O objetivo é controlar uma cobrinha que cresce
              à medida que ela consome alimentos na tela, Através desse projeto, explorei a utilização de Pygame, Esse projeto foi uma ótima oportunidade para 
              aprender e praticar o Python
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2">
            <h3 className="text-xl mb-2">03</h3>
            <h4 className="text-xl mb-2">Lojas de Suplementos</h4>
            <p className="text-gray-400 mb-4">
              Este projeto foi uma loja online de suplementos desenvolvida com PHP, que inclui recursos como cadastro de usuários e de produtos, sistema de pagamento e carrinho de compras. 
              A plataforma permite que os usuários escolham os produtos desejados e os adicionem ao carrinho de compras, com funcionalidades como atualização de quantidade, remoção de itens e cálculo automático do valor total. 
              A integração com o banco de dados MySQL foi feita para armazenar as informações dos produtos, pedidos e usuários, oferecendo uma experiência de compra online funcional e dinâmica.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              alt="Lojas de Suplementos"
              className={`rounded-lg shadow-lg ${isClicked ? 'clicked' : ''}`}
              height="300"
              src="https://storage.googleapis.com/a1aa/image/LBSoN6ppG_KgEbapqq41aZkk9r0qgWUUsz2RoLvrtig.jpg"
              width="300"
              onClick={() => handleImageClick('https://link-da-loja.com')} // Link da loja
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projetos;
