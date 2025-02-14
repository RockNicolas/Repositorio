import React from 'react';

interface FormData {
  nome: string;
  email: string;
  mensagem: string;
}

interface FormularioProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Formulario: React.FC<FormularioProps> = ({ formData, handleChange }) => {
  return (
    <form>
      <div>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Seu nome"
        />
      </div>

      <div>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Seu e-mail"
        />
      </div>

      <div>
        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          id="mensagem"
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          placeholder="Sua mensagem"
        />
      </div>
    </form>
  );
};

export default Formulario;
