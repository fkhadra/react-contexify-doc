import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import styled, { css, createGlobalStyle } from 'styled-components';
import Prism from 'prismjs';

import { media } from '../utils';
import navMenu from '../data/nav-menu';

import Sidenav from './Sidenav';

import 'prismjs/themes/prism-tomorrow.css';
import 'react-contexify/dist/ReactContexify.css';
import 'react-toastify/dist/ReactToastify.css';

const SIDENAV_WIDTH = '260px';

const GlobalSwag = createGlobalStyle`
h1{
  color: #b561b7;
  font-weight: bold;
}

@media (min-width: 48em) {
  .react-live{
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  }
  .react-live-preview, .react-live > .prism-code {
    width: 100%;
  },
  .react-live-preview{
    padding: 20px 0;
  }
}
`;

const Main = styled.main`
  ${props =>
    props.isSidebarOpen &&
    css`
      ${media.tablet`
      transform: translateX(${props => props.sidenavWidth});
      transition: transform 0.4s;
      margin-right: ${props => props.sidenavWidth};
      padding: 0 32px;
  `};
    `};
`;

class Layout extends Component {
  state = {
    isSidebarOpen: true
  };

  componentDidMount() {
    Prism.highlightAll();
  }

  toggleSidebar = () => {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen });
  };

  render() {
    return (
      <>
        <Main isSidebarOpen={this.state.isSidebarOpen} sidenavWidth={SIDENAV_WIDTH}>
          {this.props.children}
        </Main>
        <Sidenav
          sidenavWidth={SIDENAV_WIDTH}
          navMenu={navMenu}
          isSidebarOpen={this.state.isSidebarOpen}
          toggleSidebar={this.toggleSidebar}
        />
        <GlobalSwag />
        <ToastContainer />
      </>
    );
  }
}

export default Layout;
