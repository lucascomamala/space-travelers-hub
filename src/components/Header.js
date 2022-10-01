import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

const WrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px lightgray solid;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 60rem;
`;

function Header({ title, routes }) {
  return (
    <WrapperHeader>
      <Container>
        <Link className="header-logo" to="/">
          <img src="logo.png" alt="logo space travelers" />
          <h1>{title}</h1>
        </Link>
        <nav>
          <ul>
            {routes.map(({ name, path }) => (
              <li key={path}>
                <NavLink className="nav-link" to={path} end>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </WrapperHeader>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Header;
