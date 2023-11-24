import React, { useDeferredValue } from 'react';
import './index.scss';

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>The Runners Burger</h1>
        <p>Onde Sabor e Velocidade Se Encontram!</p>
      </header>
      <section className="leadership">
        <div className="president">
          <h2>Ryan Marques - Presidente</h2>
          <p>Desbravando os caminhos da gastronomia, conduzindo uma aventura culinária repleta de emoção.</p>
        </div>
        <div className="vice-president">
          <h2>Ryan Firmino - Vice-Presidente</h2>
          <p>Co-piloto nessa viagem de sabores, acelerando a inovação para uma explosão de emoção e perfeição.</p>
        </div>
      </section>
      <section className="operational-team">
        <div className="manager">
          <h2>Thais - Gerente Geral</h2>
          <p>Maestrina desta experiência gastronômica, liderando com graciosidade uma performance culinária digna de palmas.</p>
        </div>
        <div className="chef">
          <h2>Julhebas - Chapeiro</h2>
          <p>Artista na grelha, correndo contra o relógio para criar hambúrgueres que são verdadeiras obras-primas de sabor.</p>
        </div>
      </section>
      <section className="mission">
        <h2>Nossa Missão: Correndo para Satisfazer a Alma!</h2>
        <p>Na The Runners Burger, cada visita é uma corrida pulsante pelo extraordinário mundo dos sabores.</p>
        <ul>
          <li>"Acelere para o Êxtase do Sabor!"</li>
          <li>"Na The Runners Burger, Cada Mordida é uma Aventura Culinária!"</li>
          <li>"Ultrapasse a Fome, Cruze a Linha de Chegada do Prazer Gastronômico!"</li>
          <li>"Corremos para Despertar Emoções, Servimos para Encantar!"</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
