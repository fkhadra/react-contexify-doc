import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import styled, { css, createGlobalStyle } from 'styled-components';
import Prism from 'prismjs';

import { media, isMobile } from '../utils';
import navMenu from '../data/nav-menu';

import Sidenav from './Sidenav';

import 'prismjs/themes/prism-tomorrow.css';
import 'react-contexify/dist/ReactContexify.css';
import 'react-toastify/dist/ReactToastify.css';

const SIDENAV_WIDTH = '260px';
const IS_MOBILE = isMobile();

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
  overflow: auto;
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
    isSidebarOpen: IS_MOBILE ? false : true,
    isMobile: IS_MOBILE
  };

  isMobile = () => {
    this.setState({
      isMobile: isMobile()
    });
  };

  componentDidMount() {
    Prism.highlightAll();
    window.addEventListener('resize', this, isMobile);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this, isMobile);
  }

  toggleSidebar = () => {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen });
  };

  render() {
    return (
      <>
        <Main
          isSidebarOpen={this.state.isSidebarOpen}
          sidenavWidth={SIDENAV_WIDTH}
        >
          {this.props.children}
        </Main>
        <Sidenav
          sidenavWidth={SIDENAV_WIDTH}
          navMenu={navMenu}
          isSidebarOpen={this.state.isSidebarOpen}
          isMobile={this.state.isMobile}
          toggleSidebar={this.toggleSidebar}
        />
        <GlobalSwag />
        <ToastContainer />
      </>
    );
  }
}

export default Layout;
