import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import stars from '../../public/stars.png';
import allMatcha from '../../public/matcha.png';
import room from '../../public/room.png';

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
        <Link to={'lisa-quest'}>
          <img src={stars} className="image-project" id="lisa-container" />
        </Link>
        {desc === 'lisa-container' ? (
          <div id="lisa">
            <h2>LISA QUEST</h2>
            <p>Classic arcade style game</p>
          </div>
        ) : null}
      </div>
      <div>
        <Link to={'all-matcha'}>
          <img
            src={allMatcha}
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
        <Link to={'room'}>
          <img src={room} className="image-project" id="room-container" />
        </Link>
        {desc === 'room-container' ? (
          <div id="room">
            <h2>ROOM</h2>
            <p>Experiment with Three.js</p>
          </div>
        ) : null}
      </div>
      <Outlet />
    </section>
  );
};

export default Projects;
