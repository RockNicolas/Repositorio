import React, { useState } from 'react';
import './Testimonial.css';

interface Review {
  nome: string;
  comentario: string;
  estrelas: number;
}

const Testi: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [formData, setFormData] = useState({
    nome: '',
    comentario: '',
    estrelas: 0,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const handleStarClick = (starCount: number) => {
    setFormData((prevState) => ({ ...prevState, estrelas: starCount }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.nome && formData.comentario && formData.estrelas > 0) {
      setReviews((prevReviews) => [
        ...prevReviews,
        { ...formData, nome: formData.nome.trim() },
      ]);
      setFormData({ nome: '', comentario: '', estrelas: 0 });
      setIsSubmitted(true);
      setShowForm(false);
    } else {
      alert('Por favor, preencha todos os campos e atribua uma nota!');
    }
  };

  const handleNewReviewClick = () => {
    setIsSubmitted(false);
    setShowForm(true);
    setFormData({ nome: '', comentario: '', estrelas: 0 });
  };

  return (
    <div className="testi-container">
      <section className="testi-header">
        <h2 className="testi-title">Avaliações de clientes</h2>
        <p className="testi-description">clientes satisfeitos</p>
      </section>

      {isSubmitted && reviews.length > 0 && (
        <section className="testi-reviews">
          {reviews.map((review, index) => (
            <div key={index} className="testi-review-card">
              <div className="review-stars">
                {[...Array(review.estrelas)].map((_, idx) => (
                  <i key={idx} className="fas fa-star" />
                ))}
              </div>
              <p>{review.comentario}</p>
              <div className="review-name">{review.nome}</div>
            </div>
          ))}
        </section>
      )}

      {showForm && (
        <section className="testi-form">
          <h2 className="testi-form-title">Deixe seu depoimento</h2>
          <form onSubmit={handleFormSubmit} className="testi-form-content">
            <div className="testi-form-group">
              <label htmlFor="nome" className="testi-label">Nome:</label>
              <input
                id="nome"
                type="text"
                className="testi-input"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                placeholder="Digite seu nome"
                required
              />
            </div>

            <div className="testi-form-group">
              <label htmlFor="comentario" className="testi-label">Comentário:</label>
              <textarea
                id="comentario"
                className="testi-input"
                value={formData.comentario}
                onChange={(e) => setFormData({ ...formData, comentario: e.target.value })}
                placeholder="Digite seu comentário"
                rows={4}
                required
              />
            </div>

            <div className="testi-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <i
                  key={star}
                  className={`fas fa-star ${formData.estrelas >= star ? 'testi-star-filled' : 'testi-star-empty'}`}
                  onClick={() => handleStarClick(star)}
                />
              ))}
            </div>

            <button type="submit" className="testi-submit-button">
              Enviar
            </button>
          </form>
        </section>
      )}

      {isSubmitted && (
        <div className="new-comment-button">
          <button onClick={handleNewReviewClick} className="testi-submit-button">
            Fazer outro comentário
          </button>
        </div>
      )}
    </div>
  );
};

export default Testi;
