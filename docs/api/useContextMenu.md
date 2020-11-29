---
id: use-context-menu
title: useContextMenu
---

The hook returns 2 methods:
- `show`
- `hideAll`

| Param | Required | Type             | Descripton                                                           |
|-------|----------|------------------|----------------------------------------------------------------------|
| id    | no       | string \| number | Unique id to identify the menu. Can be overriden on each call        |
| props | no       | any              | Passed to the `Item` onClick callback. Can be overriden on each call |

```jsx
import { useContextMenu } from 'react-contexify';

const { show, hideAll } = useContextMenu({ 
  id: "menuId",
  props: {
    key: "value"
  }
});
```

## show

| Param    | Required | Type                     | Descripton                                                                                |
|----------|----------|--------------------------|-------------------------------------------------------------------------------------------|
| event    | ✅        | DOM event                | The event used to display the menu                                                        |
| id       | no       | string \| number         | Unique id to identify the menu. Can be overriden on each call                             |
| props    | no       | any                      | Passed to the `Item` onClick callback. Override props defined during initialization if any |
| position | no       | { x: number, y: number } | Use a custom position for the `Menu`                                                      |

```tsx
import { useContextMenu } from 'react-contexify';

const { show, hideAll } = useContextMenu({ 
  id: "menuId",
  props: {
    key: "value"
  }
});

// basic usage
function displayMenu(e: React.MouseEvent) {
  show(e)
}

// multiple menu handling
function displayMenu(e: React.MouseEvent) {
  show(e, {
    id: "another-menu-id"
  })
}

// custom position
function displayMenu(e: React.MouseEvent) {
  show(e, {
    position: {
      x: 100,
      y: 200
    }
  })
}

// pass props
function displayMenu(e: React.MouseEvent) {
  show(e, {
    props: {
      key: "value1",
      foo: false
    }
  })
}

```

## hideAll

```jsx
import { useContextMenu } from 'react-contexify';

const { show, hideAll } = useContextMenu({ 
  id: "menuId"
});

// hide all menus
hideAll()
```