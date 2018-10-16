import React, { Component } from 'react';
import { ToastContainer } from "react-toastify";
import styled, { css } from 'styled-components';

import { media } from '../utils';
import navMenu from '../utils/nav-menu';

import Sidenav from './Sidenav';

import 'milligram/dist/milligram.css';

const SIDENAV_WIDTH = '260px';

const Main = styled.main`
  ${props =>
    props.isSidebarOpen &&
    css`
      ${media.tablet`
      transform: translateX(${props => props.width});
      transition: transform 0.4s;
      margin-right: ${props => props.width};
      padding: 0 32px;
  `};
    `};
`;

class Layout extends Component {
  state = {
    isSidebarOpen: true,
  };

  toggleSidebar = () => {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen });
  };

  render() {
    return (
      <>
        <Main isSidebarOpen={this.state.isSidebarOpen} width={SIDENAV_WIDTH}>
          {this.props.children}
        </Main>
        <Sidenav
          width={SIDENAV_WIDTH}
          navMenu={navMenu}
          isSidebarOpen={this.state.isSidebarOpen}
          toggleSidebar={this.toggleSidebar}
        />
        <ToastContainer />
      </>
    );
  }
}

export default Layout;

