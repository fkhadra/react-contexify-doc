import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../components/Layout'
import Demo from "../components/Demo";
import Emoji from "../components/Emoji";

const Title = styled.h1`
text-align:center;
`;

const Subtitle = styled.h4`
text-align:center;
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  & a{
    margin:20px;
    width:180px;
  }
`

export default () => (
  <Layout>
    <Title>React-Contexify</Title>
    <Subtitle>The easiest way to add a context menu to your react app. No bullshit <Emoji>😲</Emoji>!</Subtitle>
    <Demo />
    <Links>
      <a href="https://github.com/fkhadra/react-contexify" className="button">github</a>
      <Link to="installation-and-usage" className="button button-outline">Getting Started</Link>
    </Links>
  </Layout>
)
