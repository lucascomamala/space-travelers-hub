import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../assets/planet.png';

const Navbar = ({ title, routes }) => (
  <nav className="navbar">
    <Link className="nav-brand" to="/">
      <img src={logo} alt="Logo" height="50px" width="50px" />
      {title}
    </Link>
    <ul className="nav-links">
      {routes.map(({ name, path }) => (
        <li key={path}>
          <NavLink className="nav-link" to={path} end>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Navbar;
