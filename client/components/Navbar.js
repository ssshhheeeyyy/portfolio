//NOT IN USE ANYMORE BUT LEFT FOR REFERENCE OF THE OLD NAVBAR

// import * as React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [open, setOpen] = React.useState(false);

//   const handleMenu = () => {
//     setOpen(!open);
//   };

//   return (
//     <nav className="dropdown">
//       <button id="triangle" onClick={handleMenu}></button>
//       {open ? (
//         <ul className="menu">
//           <li className="home-button">
//             <Link to={'/'} onClick={handleMenu}>
//               HOME
//             </Link>
//           </li>
//           <li className="projects-button">
//             <Link to={'/projects'} onClick={handleMenu}>
//               PROJECTS
//             </Link>
//           </li>
//           <li className="about-button">
//             <Link to={'/about'} onClick={handleMenu}>
//               ABOUT
//             </Link>
//           </li>
//         </ul>
//       ) : null}
//     </nav>
//   );
// };

// export default Navbar;
