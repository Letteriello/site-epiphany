// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
  color: white;
  padding: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  font-size: 1.2rem;
  transition: color 0.3s;

  &:hover {
    color: #aaa;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink to="/home">Paginal Inicial</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about">Sobre</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/services">Serviços</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/team">Equipe</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">Contatos</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
