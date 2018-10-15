import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby";

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
    color: #fff;
    transform: scale(1.155);
  }
`;

const NavLink = ({
  children
}) => (
  <StyledLink to={children.toLowerCase().replace(/\s/g,'-')}>
    {children}
  </StyledLink>
);

export default NavLink;
