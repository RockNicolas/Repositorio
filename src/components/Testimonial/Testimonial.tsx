import React from 'react';
import './Avaliação.css'

interface TestimonialProps {
  name: string;
  imageUrl: string;
  review: string;
  stars: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, imageUrl, review, stars }) => {
  return (
    <div className="testi-container">
      <div className="testi-stars">
        {[...Array(5)].map((_, index) => (
          <i
            key={index}
            className={`fas fa-star ${index < stars ? 'testi-star-filled' : 'testi-star-empty'}`}
          ></i>
        ))}
      </div>
      <p className="testi-review">{review}</p>
      <div className="testi-user">
        <img alt={`Avatar of ${name}`} className="testi-user-image" src={imageUrl} />
        <p className="testi-user-name">{name}</p>
      </div>
    </div>
  );
};

export default Testimonial;
