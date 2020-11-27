---
id: mount-menu-at-specific-place
title: Mount Menu at specific place
---

The previous versions were appending the `Menu` to the `document.body`. This was not always convenient. This is not the case anymore.

To render the `Menu` at a specific place in the DOM. You can use [react portal](https://reactjs.org/docs/portals.html) for that.

<i>A typical use case for portals is when a parent component has an overflow: hidden or z-index style, but you need the child to visually “break out” of its container. For example, dialogs, hovercards, and tooltips.</i> 


```jsx
import { createPortal } from 'react-dom';
import { MyMenu } from "./somwhere";

function Portal({children}){
  return createPortal(children, document.querySelector("#my-node"));
}

function MyApp(){

  return (
    <main>
    <Portal>
      <MyMenu />
    </Portal>
    </main>
  )
}
```