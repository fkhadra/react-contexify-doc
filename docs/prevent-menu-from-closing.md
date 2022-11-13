---
id: prevent-menu-from-closing
title: Prevent menu from closing
---

By default, when clicking on a menu item, the menu will be closed. If you want to prevent this behavior, the `Item` component accept a `closeOnClick` props.
This is useful when you have input inside an Item for example.

```jsx
import {
  Menu,
  Item,
  useContextMenu
} from "react-contexify";

import "react-contexify/dist/ReactContexify.css";

const MENU_ID = "menu-id";

export default function App() {
  const { show } = useContextMenu({
    id: MENU_ID
  });
 
  function handleItemClick({ event }){
  }

  function displayMenu(e){
    show({
      event: e,
    });
  }

  return (
    <div>
      <div onContextMenu={displayMenu}>
        Right click inside the box
      </div>
      <Menu id={MENU_ID}>
        <Item  closeOnClick={false} onClick={handleItemClick}>
          Item 1
        </Item>
        <Item onClick={handleItemClick}>
          Item 2
        </Item>
        <Separator />
        <Item disabled>Disabled</Item>
        <Separator />
      </Menu>
    </div>
  );
}

```