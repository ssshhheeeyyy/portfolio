import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import LisaQuest from './LisaQuest';
import Projects from './Projects';

class Main extends Component {
  render() {
    return (
      <section>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/lisaQuest" element={<LisaQuest />} />
          <Route path="projects/allMatcha" element={<LisaQuest />} />
        </Routes>
      </section>
    );
  }
}

export default Main;
