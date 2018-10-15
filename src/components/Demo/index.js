import React, { Component } from 'react';

import DemoList from './DemoList';
import DemoCanvas from './DemoCanvas';
import { selector } from '../../utils';

import 'react-contexify/dist/ReactContexify.css';
import 'react-toastify/dist/ReactToastify.css';

export default class extends Component {
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
    return (
      <>
        <DemoList {...this.state} />
        <DemoCanvas {...this.state} />
      </>
    );
  }
}

