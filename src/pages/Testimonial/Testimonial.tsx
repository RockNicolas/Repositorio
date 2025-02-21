import React, { useState, useEffect } from 'react';
import './Testimonial.css';
import TestiHeader from '../../components/Testimonial/TestiHeader';
import TestiForm from '../../components/Testimonial/TestiForm';
import TestiReviews from '../../components/Testimonial/TestiReviews';
import AdminPanel from '../../components/Adm/AdminPainel'; 
import { useNavigate } from 'react-router-dom';

export interface Review {
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
  const [isAdmin, setIsAdmin] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const savedReviews = localStorage.getItem('reviews');
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, []);

  useEffect(() => {
    if (reviews.length > 0) {
      localStorage.setItem('reviews', JSON.stringify(reviews));
    }
  }, [reviews]);

  const handleStarClick = (starCount: number) => {
    setFormData((prevState) => ({ ...prevState, estrelas: starCount }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.nome && formData.comentario && formData.estrelas > 0) {
      const newReview = { ...formData, nome: formData.nome.trim() };
      setReviews((prevReviews) => [...prevReviews, newReview]);
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

  const handleDeleteReview = (index: number) => {
    const newReviews = reviews.filter((_, i) => i !== index);
    setReviews(newReviews);
  };

  const handleAdminLogin = () => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
    setIsAdmin(true);
    navigate('/testimonaial');
  };

  return (
    <div className="testi-container">
      <TestiHeader />

      {isAdmin ? (
        <AdminPanel reviews={reviews} onDelete={handleDeleteReview} />
      ) : (
        <>
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

          <div className="admin-login-button">
            <button onClick={handleAdminLogin} className="testi-submit-button">
              Acessar Área Administrativa
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Testimonaial;
