---
id: disable-prevent-default-onkeydown
title: Disable prevent default on keydown
---

By default, the library will call `event.preventDefault` when using the keyboard navigation. You can opt out for this behavior.

```tsx
import { Menu } from "react-contexify"


function App(){
  return (
    <Menu id="menuId" preventDefaultOnKeydown={false}>
      <Item>An Item</Item>
    </Menu>
  )
}
```