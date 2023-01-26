import React from 'react';

const Home = () => {
  return (
    <section className="home-intro">
      <p
        className="home-paragraph"
        onMouseMove={(evt) => (evt.target.className = 'hovered')}
        onMouseLeave={(evt) => (evt.target.className = 'home-paragraph')}
      >
        CLICK ON THE TRIANGLE TO LEARN MORE.
      </p>
    </section>
  );
};

export default Home;
