---
id: how-to-style
title: How to style
---

## Use css variables

By overriding the css variables you should be able to find a design that match your taste 
```css
  --contexify-zIndex: 666;
  --contexify-menu-minWidth: 220px;
  --contexify-menu-padding: 6px;
  --contexify-menu-radius: 6px;
  --contexify-menu-bgColor: #fff;
  --contexify-menu-shadow: 1px 2px 2px rgba(0, 0, 0, 0.1),
  2px 4px 4px rgba(0, 0, 0, 0.1),
  3px 6px 6px rgba(0, 0, 0, 0.1);
  --contexify-menu-negatePadding: var(--contexify-menu-padding);

  --contexify-separator-color: rgba(0, 0, 0, 0.2);
  --contexify-separator-margin: 5px;
  --contexify-itemContent-padding: 6px;
  --contexify-activeItem-radius: 4px;
  --contexify-item-color: #333;
  --contexify-activeItem-color: #fff;
  --contexify-activeItem-bgColor: #3498db;
  --contexify-rightSlot-color: #6f6e77;
  --contexify-activeRightSlot-color: #fff;
  --contexify-arrow-color: #6f6e77;
  --contexify-activeArrow-color: #fff;
```

## Override existing css classes

Below, a list of the CSS classes used(classes used for animation and theme are omitted)

```css
.contexify {}

.contexify__submenu--is-open,
.contexify__submenu--is-open > .contexify__item__content {}

.contexify__submenu--is-open > .contexify__submenu {}

.contexify .contexify__submenu {}

.contexify__submenu-arrow {}

.contexify__separator {}

.contexify__will-leave--disabled {}

.contexify__item {}

.contexify__item:not(.contexify__item--disabled):focus {}

.contexify__item:not(.contexify__item--disabled):hover > .contexify__item__content,
.contexify__item:not(.contexify__item--disabled):focus > .contexify__item__content {}

.contexify__item:not(.contexify__item--disabled):hover > .contexify__submenu {}

.contexify__item--disabled {}

.contexify__item__content {}

```

:::info
I believe that the class names are self-explanatory. If it's not the case for you, please feel free to open a PR. Any contribution is appreciated.
:::


## Build your own style using the scss files

Grab the [scss directory](https://github.com/fkhadra/contexify/tree/master/scss) of the repository and build your own stylesheet. This also a good way to reduce the size of the css by removing the animations/themes that you are not using.

## Passing css classes or inline style to component

All components accept the `className` and `style` props.

## Style with styled-components

You can override the css classes with `styled-components`. You can find the list of the css classes used [here](/how-to-style#override-existing-css-classes). 

```jsx
import styled from 'styled-components';
import { Menu } from 'contexify';

const StyledMenu = styled(Menu).attrs({
  // custom props
})`
  .contexify_submenu-arrow {}
  .contexify_separator {}
  .contexify_item {}
`;
```

## Built-in theme

The library provides 2 `themes`
 - light
 - dark

```jsx
import { Menu, Item } from 'contexify';


function LightMenu(){
  return (
    <Menu id="menuId" theme="light">
      <Item>Item 1</Item> 
      <Item>Item 2</Item> 
      <Item>Item 3</Item> 
    </Menu>
  )
}

function DarkMenu(){
  return (
    <Menu id="menuId" theme="dark">
      <Item>Item 1</Item> 
      <Item>Item 2</Item> 
      <Item>Item 3</Item> 
    </Menu>
  )
}

```

## Create your own theme

When you pass a `theme` to the `Menu` component, the value is appended to `.contexify_theme-{YOUR_THEME}`. This combined with the power of css
variables give us a lot of flexibility.

For example, this is what the dark theme looks like:
```css
.contexify_theme-dark {
  --contexify-menu-bgColor: rgba(40, 40, 40, 0.98);
  --contexify-separator-color: #4c4c4c;
  --contexify-item-color: #fff;
}
```


## Built-in animation

The library provides 4 animations:
- fade (default one)
- flip
- scale 
- slide

:::important
The animation is applied when the `Menu` enters and when it exit.
:::

```jsx
import { Menu, Item, animation } from 'contexify';

function FadeMenu(){
  return (
    <Menu id="menuId" animation="fade">
      <Item>Item 1</Item> 
      <Item>Item 2</Item> 
    </Menu>
  )
}

function FlipMenu(){
  return (
    <Menu id="menuId" animation="flip">
      <Item>Item 1</Item> 
      <Item>Item 2</Item> 
    </Menu>
  )
}

function ScaleMenu(){
  return (
    <Menu id="menuId" animation="scale">
    {/* Same as not setting animation */}
      <Item>Item 1</Item> 
      <Item>Item 2</Item> 
    </Menu>
  )
}

function SlideMenu(){
  return (
    <Menu id="menuId" animation="slide">
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
<Menu animation={{ enter: false, exit: "fade" }}>
```

You get the idea 😄.

### Combining animation

What if you want to have different `animation` when the Menu `enter` and `exit` 🤔 ? Well, this is also possible! You even already know how to do that. 

Let's use the `fade` animation when entering and the `flip` animation when leaving!

```jsx
<Menu animation={{ enter: "fade", exit: "flip" }}>
```

## Create your own animation

When you pass an `animation` to the `Menu` component, the value is appended to:
- `.contexify_willEnter-{YOUR_VALUE}`
- `.contexify_willLeave-{YOUR_VALUE}`

For example, this is what the scale animation looks like:
```css
@keyframes contexify_scaleIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 1;
  }
}
@keyframes contexify_scaleOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
}
.contexify_willEnter-scale {
  transform-origin: top left;
  animation: contexify__scaleIn 0.3s;
}

.contexify_willLeave-scale {
  transform-origin: top left;
  animation: contexify__scaleOut 0.3s;
}
```

As you can see it's easy to build yours as well.