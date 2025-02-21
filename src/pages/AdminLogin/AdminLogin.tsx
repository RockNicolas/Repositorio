import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin: React.FC = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

 {/* const correctPassword = '';   */}

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      navigate('/admin-panel');  
    } else {
      alert('Senha incorreta');
    }
  };

  return (
    <div className="admin-login">
      <h2>Área Administrativa</h2>
      <form onSubmit={handleLogin}>
        <input
          type="password"
          placeholder="Digite a senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default AdminLogin;
