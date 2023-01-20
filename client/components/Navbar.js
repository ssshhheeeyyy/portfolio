import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <div>
        <Link to="/lisaquest">Lisa Quest</Link>
      </div>
    </nav>
  );
};

export default Navbar;
