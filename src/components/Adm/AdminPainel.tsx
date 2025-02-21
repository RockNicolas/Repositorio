import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Review {
  nome: string;
  comentario: string;
  estrelas: number;
}

interface AdminPanelProps {
  reviews: Review[];
  onDelete: (index: number) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ reviews, onDelete }) => {
  return (
    <div className="admin-panel">
      <h2>Painel de Administração</h2>
      <div className="admin-reviews-list">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="admin-review-card">
              <div className="review-stars">
                {[...Array(review.estrelas)].map((_, idx) => (
                  <i key={idx} className="fas fa-star" />
                ))}
              </div>
              <p>{review.comentario}</p>
              <div className="review-name">{review.nome}</div>
              <button onClick={() => onDelete(index)} className="delete-button">
                Excluir
              </button>
            </div>
          ))
        ) : (
          <p>Não há comentários para exibir.</p>
        )}

        <Link to="/">Voltar para a página inicial</Link>
      </div>
    </div>
  );
};

export default AdminPanel;
