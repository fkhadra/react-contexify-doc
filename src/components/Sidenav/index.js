import React, { Fragment } from 'react';
import styled from 'styled-components';

import Fab from './Fab';
import NavLink from './NavLink';
import Logo from './Logo';

import { media } from '../../utils';

const Nav = styled.aside`
  width: 100%;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  pointer-events: ${props => (props.isOpen ? 'initial' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background: #212120;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
    0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  transition: opacity 0.4s;
  z-index: 4;
  ${media.tablet`
    opacity: 1;
    width: ${props => props.sidenavWidth};
    pointer-events: initial;
    border-right: 4px solid #bd50ff;
  `};
`;

const Wrapper = styled.div`
  position: relative;
  height: calc(100vh - 50px);
  overflow: auto;
  width: 100%;
  z-index: 4;
  padding: 12px;
  font-size: 1em;
  & ul {
    margin-left: 12px;
    list-style: none;
  }
  & p {
    margin: 0;
    color: #fff;
    font-weight: bold;
  }
`;

export default ({ isSidebarOpen, toggleSidebar, navMenu, sidenavWidth }) => (
  <>
    <Nav isOpen={isSidebarOpen} sidenavWidth={sidenavWidth}>
      <Logo>React-Contexify</Logo>
      <Wrapper>
        {navMenu.map(item => {
          const prefix = item.prefix || '';
          return (
            <Fragment key={item.title}>
              <p>{item.title}</p>
              <ul>
                {item.menu.map(el => {
                  const link =
                    el.link ||
                    el.label
                      .toLowerCase()
                      .replace(/\'|\!/, '')
                      .replace(/\s/g, '-');
                  return (
                    <li key={link}>
                      <NavLink to={prefix + link}>{el.label}</NavLink>
                    </li>
                  );
                })}
              </ul>
            </Fragment>
          );
        })}
      </Wrapper>
    </Nav>
    <Fab onToggle={toggleSidebar} toggled={isSidebarOpen} />
  </>
);
