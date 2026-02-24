import React from "react";

const Home = () => {
  return (
    <section className="home">
      <div className="home-left">
        <p className="welcome">Hola y Bienvenido.</p>
        <h1>
          Soy <span className="highlight">Alfredo Gimenez</span>
        </h1>
        <p className="description">
          Apasionado por crear sistemas útiles, ordenados y que mejoren procesos.
          Me especializo en backend, arquitectura y automatización de tareas.
          Me enfoco en construir soluciones reales usando buenas prácticas,
          lógica clara y estructuras escalables.
        </p>
      </div>

      <div className="home-right">
        <div className="photo-placeholder">Foto Personal</div>
      </div>
    </section>
  );
};

export default Home;