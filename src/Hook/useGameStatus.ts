import { useState } from 'react';

const useGameStatus = () => {
  const [gameStatus, setGameStatus] = useState<string>('');

  const fetchGameStatus = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      if (!apiUrl) {
        setGameStatus('URL da API não configurada.');
        return;
      }

      const response = await fetch(apiUrl);
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
