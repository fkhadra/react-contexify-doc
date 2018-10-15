import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import DemoList from '../components/DemoList';
import DemoCanvas from '../components/DemoCanvas';
import Emoji from '../components/Emoji';
import { selector } from '../utils';

import 'react-contexify/dist/ReactContexify.css';
import 'react-toastify/dist/ReactToastify.css';

const scaleIn = keyframes`
0% {
  transform: scale(0);
  opacity: 1;
}

100% {
  transform: scale(1);
  opacity: 1;
}
`;

const HeroHeader = styled.h2`
  text-align:center;
  animation: ${scaleIn} 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
`;

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
        <section>
        <HeroHeader>
          React-Contexify the easiest way to add a context menu to your
          react-app. No bullshit <Emoji>😲</Emoji>!
        </HeroHeader>

        </section>
        <DemoList {...this.state} />
        <DemoCanvas {...this.state} />
      </Layout>
    );
  }
}

export default IndexPage;
