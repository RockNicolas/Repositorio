import React, { useState } from 'react';
import './Testimonial.css';
import TestiHeader from '../../components/Testimonial/TestiHeader';
import TestiForm from '../../components/Testimonial/TestiForm';
import TestiReviews from '../../components/Testimonial/TestiReviews';

interface Review {
  nome: string;
  comentario: string;
  estrelas: number;
}

const Testimonaial: React.FC = () => {
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
      <TestiHeader />

      {isSubmitted && reviews.length > 0 && <TestiReviews reviews={reviews} />}

      {showForm && (
        <TestiForm
          formData={formData}
          setFormData={setFormData}
          handleFormSubmit={handleFormSubmit}
          handleStarClick={handleStarClick}
        />
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

export default Testimonaial;
