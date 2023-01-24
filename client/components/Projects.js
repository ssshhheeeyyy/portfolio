import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section>
      <h2>
        <Link to={'/projects/lisaQuest'}>LISA QUEST</Link>
      </h2>
      <h2>
        <Link to={'/projects/allMatcha'}>LISA QUEST</Link>
      </h2>
    </section>
  );
};

export default Projects;
