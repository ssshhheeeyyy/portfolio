import React from 'react';
import stars from '../../public/stars.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section>
      <ul id="projects-images">
        <li>
          <Link to={'/projects/lisaQuest'}>
            <img src="stars.png" className="image-project-stars"></img>
          </Link>
        </li>
        <li>
          <Link to={'/projects/allMatcha'}>
            <img src="matcha.png" className="image-project"></img>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Home;
