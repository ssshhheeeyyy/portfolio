import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section>
      <div id="projects-images">
        <div>
          <Link to={'/projects/lisaQuest'}>
            <img src="stars.png" className="image-project"></img>
          </Link>
        </div>
        <div>
          <Link to={'/projects/allMatcha'}>
            <img src="matcha.png" className="image-project"></img>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
