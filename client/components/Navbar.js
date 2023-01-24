import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="dropdown">
      <button className="circle" onClick={handleMenu}></button>
      {open ? (
        <ul className="menu">
          <li className="home-button">
            <button>
              <Link to={'/'} onClick={handleMenu}>
                HOME
              </Link>
            </button>
          </li>
          <li className="projects-button">
            <button>
              <Link to={'/projects'} onClick={handleMenu}>
                PROJECTS
              </Link>
            </button>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

export default Navbar;
