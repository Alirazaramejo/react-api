import 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Navbar() {
  const Navigation = () => {
    const location = useLocation();
  
    const isNavLinkActive = (path) => {
      return location.pathname === path;
    };

    return (
      <>
        <ul className="navigation-list">
          <li className={isNavLinkActive('/') ? 'active' : ''}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={isNavLinkActive('/About') ? 'active' : ''}>
            <NavLink to="/About">About</NavLink>
          </li>
          <li className={isNavLinkActive('/Products/aaaa') ? 'active' : ''}>
            <NavLink to="/Products/ali">Products</NavLink>
          </li>
          <li className={isNavLinkActive('/Form') ? 'active' : ''}>
            <NavLink to="/Form">Form</NavLink>
          </li>
        </ul>
      </>
    );
  }

  return <Navigation />;
}

export default Navbar;
