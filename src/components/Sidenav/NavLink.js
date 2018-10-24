import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const activeClassName = 'nav-item-active';
const StyledLink = styled(Link).attrs({
  activeClassName
})`
  display: inline-block;
  color: #fff;
  transition: transform 0.3s;
  &.${activeClassName} {
    color: #bd50ff;
  }
  &:hover {
    color: #bd50ff;
    transform: scale(1.155);
  }
`;

const NavLink = ({ to, children }) => (
  <StyledLink to={to}>{children}</StyledLink>
);

export default NavLink;
