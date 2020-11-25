---
id: change-submenu-arrow
title: Change Submenu arrow
---

The `Submenu` component an `arrow` props. You can provide any valid ReactNode. 

- Let's replace the default arrow by a unicorn!
  
```jsx
import { Menu, Item, Separator, Submenu } from "react-contexify";

function MyMenu() {
  return (
    <Menu id="menu_id">
      <Item>Foo</Item>
      <Separator />
      <Submenu label="Submenu" arrow="🦄">
        <Item>Bar</Item>
      </Submenu>
    </Menu>
  );
}
```

- Replace the arrow by a component

```jsx
import { Menu, Item, Separator, Submenu } from "react-contexify";

function CustomArrow() {
  return <div>arrow 🤘</div>;
}

function MyMenu() {
  return (
    <Menu id="menu_id">
      <Item>Foo</Item>
      <Separator />
      <Submenu label="Submenu" arrow={<CustomArrow />}>
        <Item>Bar</Item>
      </Submenu>
    </Menu>
  );
}

```
