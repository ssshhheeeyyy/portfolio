import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [desc, showDesc] = useState('');

  return (
    <section
      id="projects-images"
      onMouseOver={(evt) => {
        showDesc(evt.target.id);
      }}
      onMouseOut={() => {
        showDesc('');
      }}
    >
      <div id="projects-lisa">
        <Link to={'/projects/lisaQuest'}>
          <img src="stars.png" className="image-project" id="lisa-container" />
        </Link>
        {desc === 'lisa-container' ? (
          <div id="lisa">
            <h2>LISA QUEST</h2>
            <p>Classic arcade style game</p>
          </div>
        ) : null}
      </div>
      <div>
        <Link to={'/projects/allMatcha'}>
          <img
            src="matcha.png"
            className="image-project"
            id="matcha-container"
          />
        </Link>
        {desc === 'matcha-container' ? (
          <div id="matcha">
            <h2>ALL MATCHA</h2>
            <p>Fictional e-commerce website</p>
          </div>
        ) : null}
      </div>
      <div>
        <Link to={'/projects/allMatcha'}>
          <img src="room.png" className="image-project" id="room-container" />
        </Link>
        {desc === 'room-container' ? (
          <div id="room">
            <h2>ROOM</h2>
            <p>Experiment with Three.js</p>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Projects;
