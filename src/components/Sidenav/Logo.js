import React from 'react';

import styled from 'styled-components';

const Logo = styled.div`
  padding: 15px 0;
  margin: 0;
  display: block;
  position: relative;
  z-index: 4;
`;

const Link = styled.a`
  text-transform: uppercase;
  padding: 5px 0;
  display: inline-block;
  font-size: 18px;
  color: #fff;
  white-space: nowrap;
  font-weight: 400;
  line-height: 30px;
  overflow: hidden;
  text-align: center;
  display: block;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 15px;
    height: 1px;
    width: calc(100% - 30px);
    background-color: hsla(0, 0%, 71%, 0.3);
  }
`;

export default () => (
  <Logo>
    <Link>Nix</Link>
  </Logo>
);
