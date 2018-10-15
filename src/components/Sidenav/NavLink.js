import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby";
const activeClassName = 'nav-item-active';

const StyledLink = styled(Link).attrs({
  activeClassName
})`
  display: flex;
  margin: 10px 0;
  color: #fff;
  font-size: 14px;
  padding: 10px 15px;
  transition: background-color 0.3s;
  &.${activeClassName} {
    background-color: #9c27b0;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14),
      0 7px 10px -5px rgba(156, 39, 176, 0.4);
  }
  &:not(.${activeClassName}):hover {
    background-color: hsla(0, 0%, 78%, 0.2);
    color: #fff;
  }
`;

const NavLink = ({
  to,
  icon,
  label
}) => (
  <Link to={to}>
    <span>{label}</span>
  </Link>
);

export default NavLink;
