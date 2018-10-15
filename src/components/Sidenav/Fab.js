import React from 'react';
import styled, { css } from 'styled-components';

import { media } from '../../utils';

const Container = styled.div`
  width: 60px;
  height: 60px;
  background: #9b4ccb;
  border-radius: 100%;
  position: fixed;
  bottom: 10px;
  right: 15px;
  z-index: 5;
  ${media.tablet`
      display: none;
  `};
`;

const Button = styled.button`
  padding: 15px 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 4px 0 0 0;
  overflow: visible;
  &:hover {
    opacity: 0.7;
  }
`;

const OutterButton = styled.div`
  width: 30px;
  height: 24px;
  display: inline-block;
  position: relative;
`;

const innerBase = css`
  width: 30px;
  height: 4px;
  background-color: #e1e1e1;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
`;

const InnerButton = styled.div`
  display: block;
  top: 50%;
  margin-top: -2px;
  transition-duration: 0.22s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  ${({ toggled }) =>
    toggled
      ? `
  transform: rotate(225deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); 
  `
      : null} ${innerBase}
  &::before, &::after {
    ${innerBase} content: "";
    display: block;
  }
  &::before {
    top: -10px;
    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
    ${({ toggled }) =>
      toggled
        ? `
    top: 0;
    opacity: 0;
    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
  `
        : null};
  }
  &::after {
    bottom: -10px;
    transition: bottom 0.1s 0.25s ease-in,
      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    ${({ toggled }) =>
      toggled
        ? `
    bottom: 0;
    transform: rotate(-90deg);
    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
  `
        : null};
  }
`;

const Fab = ({
  toggled,
  onToggle
}) => (
  <Container>
    <Button onClick={onToggle}>
      <OutterButton>
        <InnerButton toggled={toggled} />
      </OutterButton>
    </Button>
  </Container>
);

export default Fab;
