import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import LisaQuest from './LisaQuest';

class Main extends Component {
  render() {
    return (
      <section>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lisaquest" element={<LisaQuest />} />
        </Routes>
      </section>
    );
  }
}

export default Main;
