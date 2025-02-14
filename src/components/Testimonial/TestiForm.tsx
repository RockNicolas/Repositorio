import React from 'react';

interface FormData {
  nome: string;
  comentario: string;
  estrelas: number;
}

interface TestiFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  handleFormSubmit: (e: React.FormEvent) => void;
  handleStarClick: (starCount: number) => void;
}

const TestiForm: React.FC<TestiFormProps> = ({
  formData,
  setFormData,
  handleFormSubmit,
  handleStarClick,
}) => {
  return (
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
  );
};

export default TestiForm;
