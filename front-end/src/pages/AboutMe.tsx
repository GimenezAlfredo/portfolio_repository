import React from "react";

const About = () => {
  return (
    <section className="about">
      <h2 className="section-title">Sobre mí</h2>

      <div className="about-container">
        <div className="card">
          <h3>Educación</h3>
          <p>
            Curso intensivo como desarrollador Full Stack (2022 - 2023).
          </p>
          <p>
            Tecnicatura Superior en Análisis de Sistemas (2023 - 2025).
          </p>
        </div>

        <div className="card">
          <h3>Experiencia</h3>
          <p>
            Sistema de Recolección de Reciclables - Desarrollo backend,
            autenticación y APIs.
          </p>
          <p>
            Sistema de Control de Stock - Módulos backend y seguimiento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;