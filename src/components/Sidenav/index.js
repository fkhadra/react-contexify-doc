import React, { Component } from 'react';
import styled from 'styled-components';
import Fab from './Fab';

import { media } from '../../utils';

// import Logo from './Logo';

const Nav = styled.aside`
  width: 100%;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  pointer-events: ${props => (props.isOpen ? 'initial' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background: #212120;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
    0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  transition: opacity 0.4s;
  z-index: 4;
  ${media.tablet`
    opacity: 1;
    width: 200px;
    pointer-events: initial;
  `};
`;

const Wrapper = styled.div`
  position: relative;
  height: calc(100vh - 50px);
  overflow: auto;
  width: 100%;
  z-index: 4;
  padding-bottom: 30px;
  & ul {
    list-style: none;
  }
`;

export default ({ isSidebarOpen, toggleSidebar }) => (
  <>
    <Nav isOpen={isSidebarOpen}>
      <Wrapper>foo</Wrapper>
    </Nav>
    <Fab onToggle={toggleSidebar} toggled={isSidebarOpen} />
  </>
);
