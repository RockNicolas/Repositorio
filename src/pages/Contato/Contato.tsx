// src/components/Contato/Contato.tsx
import React, { useState } from 'react';
import Formulario from '../../components/Contato/Formulario';
import StatusMessage from '../../components/Contato/StatusMessage';
import './Contato.css';

interface FormData {
  nome: string;
  email: string;
  mensagem: string;
}

const Contato: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    mensagem: '',
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome || !formData.email || !formData.mensagem) {
      setStatus('Por favor, preencha todos os campos!');
      return;
    }

    setStatus('Mensagem enviada com sucesso!');
    setFormData({
      nome: '',
      email: '',
      mensagem: '',
    });
  };

  return (
    <div className="container">
      <h2>Entre em Contato</h2>
      {status && <StatusMessage message={status} />}
      <Formulario formData={formData} handleChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>Enviar</button>
    </div>
  );
};

export default Contato;
