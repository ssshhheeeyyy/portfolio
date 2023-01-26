import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import LisaQuest from './LisaQuest';
import Projects from './Projects';
import About from './About';
import Footer from './Footer';

class Main extends Component {
  render() {
    return (
      <main id="container">
        <section id="navbar">
          <Navbar />
        </section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/lisaQuest" element={<LisaQuest />} />
          <Route path="projects/allMatcha" element={<LisaQuest />} />
        </Routes>
        <section id="footer">
          <Footer />
        </section>
      </main>
    );
  }
}

export default Main;
