import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Emoji from '../components/Emoji';

const Title = styled.h1`
  font-size: 48px;
`;

const Poo = styled(Emoji)`
  font-size: 160px;
  font-weight: bold;
`;

const Container = styled.div`
  text-align: center;
`;

const NotFoundPage = () => (
  <Layout>
    <Container>
      <Title>Definitely not the place your are looking for!</Title>
      <Poo>4💩4</Poo>
    </Container>
  </Layout>
);

export default NotFoundPage;
