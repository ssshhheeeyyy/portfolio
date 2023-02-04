import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Link } from 'react-router-dom';
import Home from './Home';
import LisaQuest from './LisaQuest';
import Projects from './Projects';
import About from './About';
import Footer from './Footer';
import AllMatcha from './AllMatcha';
import Room from './Room';
import Shape from './Shape';

const Main = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <div id="container">
      <section id="navbar" onClick={handleMenu}>
        <Canvas id="canvas">
          <ambientLight intensity={15} />
          <directionalLight position={[-2, 5, 2]} intensity={3} />
          <spotLight position={[100, 1000, 100]} intensity={3} />
          <Shape />
        </Canvas>
        <nav className="dropdown">
          {open ? (
            <ul className="menu">
              <li className="home-link">
                <Link to={'/'} onClick={handleMenu}>
                  HOME
                </Link>
              </li>
              <li className="projects-link">
                <Link to={'/projects'} onClick={handleMenu}>
                  PROJECTS
                </Link>
              </li>
              <li className="about-link">
                <Link to={'/about'} onClick={handleMenu}>
                  ABOUT
                </Link>
              </li>
            </ul>
          ) : null}
        </nav>
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects">
          <Route index element={<Projects />} />
          <Route path="lisa-quest" element={<LisaQuest />} />
          <Route path="all-matcha" element={<AllMatcha />} />
          <Route path="room" element={<Room />} />
        </Route>
      </Routes>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Main;
