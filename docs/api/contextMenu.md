---
id: context-menu
title: contextMenu
---

The object exposes 2 methods:
- `show`
- `hideAll`

## show

| Param    | Required | Type                     | Descripton                                                                                 |
|----------|----------|--------------------------|--------------------------------------------------------------------------------------------|
| id       | ✅        | string \| number         | Unique id to identify the menu                                                             |
| event    | ✅        | DOM event                | The event used to display the menu                                                         |
| props    | no       | any                      | Passed to the `Item` onClick callback. Override props defined during initialization if any |
| position | no       | { x: number, y: number } | Use a custom position for the `Menu`                                                       |

```tsx
import { contextMenu } from 'react-contexify';

// basic usage
function displayMenu(e: React.MouseEvent) {
  contextMenu.show({
    id: "menuId",
    event: e,
  })
}

// multiple menu handling
function displayMenu(e: React.MouseEvent) {
  contextMenu.show({
    id: "another-menu",
    event: e,
  })
}

// custom position
function displayMenu(e: React.MouseEvent) {
  contextMenu.show({
    id: "menuId",
    event: e,
    position: {
      x: 100,
      y: 200
    }
  })
}

// pass props
function displayMenu(e: React.MouseEvent) {
  contextMenu.show({
    id: "menuId",
    event: e,
    props: {
      key: "value1",
      foo: false
    }
  })
}

```

## hideAll

```jsx
import { contextMenu } from 'react-contexify';

// hide all menus
contextMenu.hideAll()
```
