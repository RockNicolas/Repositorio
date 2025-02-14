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

  return (
    <div className="testi-container">
      <section className="testi-header">
        <h2 className="testi-subtitle">Depoimentos</h2>
        <h1 className="testi-title">Histórias de clientes: Vozes do sucesso</h1>
        <p className="testi-description">Avaliações de clientes satisfeitos</p>
      </section>

      {isSubmitted && reviews.length > 0 && (
        <section className="testi-reviews">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg max-w-sm">
              <div className="flex items-center mb-4">
                {[...Array(review.estrelas)].map((_, idx) => (
                  <i key={idx} className="fas fa-star text-yellow-500" />
                ))}
              </div>
              <p className="mb-4">{review.comentario}</p>
              <div className="flex items-center">
                <img alt="Avatar" className="w-12 h-12 rounded-full mr-4" src="https://via.placeholder.com/150" />
                <span>{review.nome}</span>
              </div>
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
    </div>
  );
};

export default Testi;
