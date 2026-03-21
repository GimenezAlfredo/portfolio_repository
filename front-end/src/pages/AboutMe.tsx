import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* EDUCACIÓN */}
        <div className="about-card">
          <h3 className="about-card-title">EDUCACIÓN</h3>
          <ul className="about-list">
            <li>
              <h4>Curso intensivo Full Stack:</h4>
              <span className="about-date">Abril 2022 - Noviembre 2023</span>
              <p>Formación intensiva orientada al desarrollo web y construcción de aplicaciones full stack.</p>
              <p style={{ color: '#ccc', fontSize: '0.9rem' }}><strong>Tecnologías:</strong> Java, MySQL, Angular, HTML, CSS, Bootstrap.</p>
            </li>
            <li>
              <h4>Tecnicatura Superior en Análisis de Sistemas:</h4>
              <span className="about-date">Febrero 2023 - Noviembre 2025</span>
              <p>Formación en desarrollo web, aplicaciones móviles, bases de datos, modelado UML y análisis de sistemas.</p>
              <p style={{ color: '#ccc', fontSize: '0.9rem' }}><strong>Tecnologías:</strong> HTML, CSS, PHP, Node.js, JavaScript, TypeScript, React, React Native.</p>
            </li>
          </ul>
        </div>

        {/* EXPERIENCIA */}
        <div className="about-card">
          <h3 className="about-card-title">EXPERIENCIA</h3>
          <ul className="about-list">
            <li>
              <h4>Sistema de Control de Stock - Marquez Comunicaciones:</h4>
              <ul className="sub-list">
                <li>Desarrollo de módulos backend para clientes, técnicos y administración.</li>
                <li>Implementación de un módulo de semaforización para seguimiento de estados.</li>
                <li>Gestión y control de stock de repuestos del negocio.</li>
              </ul>
            </li>
            <li>
              <h4>Sistema de Recolección de Reciclables:</h4>
              <ul className="sub-list">
                <li>Desarrollo del backend, seguridad, autenticación y estructura principal de APIs.</li>
                <li>Integración de Google Maps API para trazado de rutas de recolección.</li>
                <li>Deployment y puesta en producción del backend.</li>
              </ul>
            </li>
            <li>
              <h4>Sistema de SMTP Privado:</h4>
              <ul className="sub-list">
                <li>Implementación de servidor SMTP para envío de correos electrónicos.</li>
                <li>Configuración de DNS, direccionamiento y alojamiento web.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* STACK PRINCIPAL DEBAJO */}
      <div className="about-stack-container">
        <h3 className="about-stack-title">Stack principal</h3>
        <div className="stack-tags">
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>MySQL</span>
          <span>PHP</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Bootstrap</span>
        </div>
      </div>
    </section>
  );
};

export default About;