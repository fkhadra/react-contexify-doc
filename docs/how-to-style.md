---
id: how-to-style
title: How to style
---

## Override existing css classes

The most straightforward way to apply your own style would be to override the existing CSS classes. Below, a list of the CSS classes used(classes used for animation and theme are omitted)

```css
.react-contexify {}

.react-contexify__submenu--is-open,
.react-contexify__submenu--is-open > .react-contexify__item__content {}

.react-contexify__submenu--is-open > .react-contexify__submenu {}

.react-contexify .react-contexify__submenu {}

.react-contexify__submenu-arrow {}

.react-contexify__separator {}

.react-contexify__will-leave--disabled {}

.react-contexify__item {}

.react-contexify__item:not(.react-contexify__item--disabled):focus {}

.react-contexify__item:not(.react-contexify__item--disabled):hover > .react-contexify__item__content,
.react-contexify__item:not(.react-contexify__item--disabled):focus > .react-contexify__item__content {}

.react-contexify__item:not(.react-contexify__item--disabled):hover > .react-contexify__submenu {}

.react-contexify__item--disabled {}

.react-contexify__item__content {}

```

:::info
I believe that the class names are self-explanatory. If it's not the case for you, please feel free to open a PR. Any contribution is appreciated.
:::


## Build your own style using the scss files

Grab the [scss directory](https://github.com/fkhadra/react-contexify/tree/master/scss) of the repository and build your own stylesheet. This also a good way to reduce the size of the css by removing the animations/themes that you are not using.

## Passing css classes or inline style to component

All components accept the `className` and `style` props.

## Style with styled-components

You can override the css classes with `styled-components`. You can find the list of the css classes used [here](/how-to-style#override-existing-css-classes). 

```jsx
import styled from 'styled-components';
import { Menu } from 'react-contexify';

const StyledMenu = styled(Menu).attrs({
  // custom props
})`
  .react-contexify__submenu-arrow {}
  .react-contexify__separator {}
  .react-contexify__item {}
  .react-contexify__item {}
`;
```

## Built-in theme

The library provides 2 `themes`
 - light
 - dark

```jsx
import { Menu, Item, theme } from 'react-contexify';


function LightMenu(){
  return (
    <Menu id="menuId" theme={theme.light}>
      <Item>Item 1</Item> 
      <Item>Item 2</Item> 
      <Item>Item 3</Item> 
    </Menu>
  )
}

function DarkMenu(){
  return (
    <Menu id="menuId" theme={theme.dark}>
      <Item>Item 1</Item> 
      <Item>Item 2</Item> 
      <Item>Item 3</Item> 
    </Menu>
  )
}

```
:::info
Using `theme.dark` is just a convenient way to avoid typo. You could pass a string as well.

```jsx
<Menu theme="dark">
```
:::

## Create your own theme

When you pass a `theme` to the `Menu` component, the value is appended to `.react-contexify__theme--{YOUR_VALUE}`.

For example, this is what the dark theme looks like:
```css
.react-contexify__theme--dark {
  background-color: rgba(40, 40, 40, 0.98);
}
.react-contexify__theme--dark .react-contexify__submenu {
  background-color: rgba(40, 40, 40, 0.98);
}
.react-contexify__theme--dark .react-contexify__separator {
  background-color: #eee;
}
.react-contexify__theme--dark .react-contexify__item__content {
  color: #ffffff;
}
```


## Built-in animation

The library provides 4 animations:
- fade
- flip
- scale (default one)
- slide

:::important
The animation is applied when the `Menu` enters and when it exit.
:::

```jsx
import { Menu, Item, animation } from 'react-contexify';

function FadeMenu(){
  return (
    <Menu id="menuId" animation={animation.fade}>
      <Item>Item 1</Item> 
      <Item>Item 2</Item> 
    </Menu>
  )
}

function FlipMenu(){
  return (
    <Menu id="menuId" animation={animation.flip}>
      <Item>Item 1</Item> 
      <Item>Item 2</Item> 
    </Menu>
  )
}

function ScaleMenu(){
  return (
    <Menu id="menuId" animation={animation.scale}>
    {/* Same as not setting animation */}
      <Item>Item 1</Item> 
      <Item>Item 2</Item> 
    </Menu>
  )
}

function SlideMenu(){
  return (
    <Menu id="menuId" animation={animation.slide}>
      <Item>Item 1</Item> 
      <Item>Item 2</Item> 
    </Menu>
  )
}

```

### Disable animations

To disable the animation, set the `animation` props to `false`.

```jsx
<Menu animation={false}>
```

This will disable both `enter` and `exit` animation.

### Disable only enter or exit animation

You can choose which animation to disable. To do so, you need to pass an `object` to the `animation` props. Let's disable the `enter` animation only.

```jsx
<Menu animation={{ enter: false, exit: animation.scale }}>
```

You get the idea 😄.

### Combining animation

What if you want to have different `animation` when the Menu `enter` and `exit` 🤔 ? Well, this is also possible! You even already know how to do that. 

Let's use the `fade` animation when entering and the `flip` animation when leaving!

```jsx
<Menu animation={{ enter: animation.fade, exit: animation.flip }}>
```

## Create your own animation

When you pass an `animation` to the `Menu` component, the value is appended to:
- `.react-contexify__will-enter--{YOUR_VALUE}`
- `.react-contexify__will-leave--{YOUR_VALUE}`

For example, this is what the scale animation looks like:
```css
@keyframes react-contexify__scaleIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 1;
  }
}
@keyframes react-contexify__scaleOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
}
.react-contexify__will-enter--scale {
  transform-origin: top left;
  animation: react-contexify__scaleIn 0.3s;
}

.react-contexify__will-leave--scale {
  transform-origin: top left;
  animation: react-contexify__scaleOut 0.3s;
}
```

As you can see this is pretty easy to build yours as well.