import { theme, animation } from 'react-contexify';
import { css } from 'styled-components';

const pxToEm = px => px / 16;

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376
};

// the copy pasta god 💩...
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = pxToEm(sizes[label]);
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export const isMobile = () =>
  typeof window !== 'undefined'
    ? !window.matchMedia(`(min-width: ${pxToEm(sizes.tablet)}em)`).matches
    : false;

export const selector = {
  events: ['onContextMenu', 'onClick', 'onDoubleClick'],
  themes: ['none', ...Object.values(theme)],
  animations: ['none', ...Object.values(animation)]
};
