---
id: shown-hidden-callback
title: onShown and onHidden callback
---

`onShown` callback is invoked after the menu appeared and `onHidden` is invoked after the menu has been hidden.

```jsx
function onShown(){
  console.log("onShown");
}

function onHidden(){
  console.log("onHidden");
}

<Menu onShown={onShown} onHidden={onHidden}>
  <Item>Item 1</Item>
</Menu>
```