import React from 'react';

interface Review {
  nome: string;
  comentario: string;
  estrelas: number;
}

interface TestiReviewsProps {
  reviews: Review[];
}

const TestiReviews: React.FC<TestiReviewsProps> = ({ reviews }) => {
  return (
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
  );
};

export default TestiReviews;
