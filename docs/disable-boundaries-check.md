---
id: disable-boundaries-check
title: Disable boundaries check
---

By default, the library will prevent the menu for displaying off screen. You can opt out for this behavior.

```tsx
import { Menu } from "react-contexify"


function App(){
  return (
    <Menu id="menuId" disableBoundariesCheck={false}>
      <Item>An Item</Item>
    </Menu>
  )
}
```