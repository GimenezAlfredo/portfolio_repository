import React from 'react';
import '../styles/Resume.css';

const Resume = () => {
  return (
    <section id="cv" className="resume">
      <div className="resume-container">
        <h2 className="section-title" style={{ color: '#fff', marginBottom: '25px' }}>Curriculum Vitae</h2>
        <p className="resume-text">Consigue todos los detalles sobre mi experiencia, formación y habilidades descargando mi CV completo.</p>
        <a href="/cv.pdf" download className="btn-download">
          Descargar CV (PDF)
        </a>
      </div>
    </section>
  );
};

export default Resume;