import React, { Component } from 'react';

import Layout from '../components/layout';
import { selector } from '../utils';

class IndexPage extends Component {
  state = {
    event: selector.events[0],
    theme: selector.themes[0],
    animation: selector.animations[0],
  };

  handleSelector = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    console.log(this.state);
    return (
      <Layout>
       Peace
      </Layout>
    );
  }
}

export default IndexPage;
