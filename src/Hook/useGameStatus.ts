import { useState } from 'react';

const useGameStatus = () => {
  const [gameStatus, setGameStatus] = useState<string>('');

  const fetchGameStatus = async () => {
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
  };

  return { gameStatus, fetchGameStatus };
};

export default useGameStatus;
