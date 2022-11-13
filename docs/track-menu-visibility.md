---
id: track-menu-visibility
title: Track menu visibility
---

If you want to know weither or not the menu is currently displayed, the `Menu` accepts a `onVisibiliyChange` props.

```tsx
import { Menu, Item, useContextMenu } from "react-contexify"


function App(){
  const { show } = useContextMenu({id: "menuId"})

  const trackVisibility = (isVisible: boolean) => {
    console.log("Menu is", isVisible)
  }

  return (
    <div onClick={(e) => show({event: e})}>
      <Menu id="menuId" onVisibilityChange={trackVisibility}>
        <Item>Item 1</Item>
      </Menu>
    </div>
  )
}
```