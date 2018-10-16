import { theme, animation } from 'react-contexify';
import { css } from 'styled-components'

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

export const selector = {
  events: ['onContextMenu', 'onClick', 'onDoubleClick'],
  themes: ['none', ...Object.values(theme)],
  animations: ['none', ...Object.values(animation)]
};

export const square = {
  x: 50,
  y: 50,
  width: 100,
  height: 100
};

export const menuIds = {
  table: 'tableMenu',
  canvas: 'canvasMenu',

};

export const demoData = [{
  "id": 1,
  "avatar": "/static/tux1.png",
  "firstName": "Roseanna",
  "lastName": "Savil",
  "email": "rsavil0@state.gov",
  "company": "Hoppe, Schoen and Boyle"
}, {
  "id": 2,
  "avatar": "/static/tux2.png",
  "firstName": "Cara",
  "lastName": "Duddan",
  "email": "cduddan1@merriam-webster.com",
  "company": "Kunze-Monahan"
}, {
  "id": 3,
  "avatar": "/static/tux3.png",
  "firstName": "Tobias",
  "lastName": "Maughan",
  "email": "tmaughan2@prnewswire.com",
  "company": "Casper, Schulist and Ryan"
}, {
  "id": 4,
  "avatar": "/static/tux4.png",
  "firstName": "Sammie",
  "lastName": "Mackness",
  "email": "smackness3@discuz.net",
  "company": "Hirthe Group"
}]
