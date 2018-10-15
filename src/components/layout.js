import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled, { css } from 'styled-components';

import Sidenav from './Sidenav';
import './layout.css';
import 'milligram/dist/milligram.css';

const Main = styled.main`
  ${props =>
    props.isSidebarOpen &&
    css`
      transform: translateX(200px);
      transition: transform 0.4s;
      padding-right: 200px;
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
        <Main isSidebarOpen={this.state.isSidebarOpen}>
          {this.props.children}
        </Main>
        <Sidenav
          isSidebarOpen={this.state.isSidebarOpen}
          toggleSidebar={this.toggleSidebar}
        />
      </>
    );
  }
}

export default Layout;
