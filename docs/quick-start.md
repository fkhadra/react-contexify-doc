---
id: quick-start
title: Quick start
---

## Requirements

- [React](https://reactjs.org) version >= 16.8 or above 

## Installation

With npm:
```sh
npm install --save react-contexify
```

With yarn:
```
yarn add react-contexify
```

## The gist

```jsx
import {
  Menu,
  Item,
  Separator,
  Submenu,
  useContextMenu
} from "react-contexify";

// if you cannot import css files, please have a look at here 
import "react-contexify/dist/ReactContexify.css";

const MENU_ID = "menu-id";

export default function App() {
  const { show } = useContextMenu({
    id: MENU_ID
  });
 
  function handleItemClick({ event, props, triggerEvent, data }){
    console.log(event, props, triggerEvent, data );
  }

  return (
    <div>
      <div onContextMenu={show}>
        Right click here inside the box
      </div>

      <Menu id={MENU_ID}>
        <Item onClick={handleItemClick}>
          Item 1
        </Item>
        <Item onClick={handleItemClick}>
          Item 2
        </Item>
        <Separator />
        <Item disabled>Disabled</Item>
        <Separator />
        <Submenu label="Submenu">
          <Item onClick={handleItemClick}>
            Sub Item 1
          </Item>
          <Item onClick={handleItemClick}>Sub Item 2</Item>
        </Submenu>
      </Menu>
    </div>
  );
}
```
