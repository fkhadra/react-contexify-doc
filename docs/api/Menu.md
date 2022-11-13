---
id: menu
title: Menu
---

| Prop               | Required | Default | Type                            | Descripton                                                                                                                                           |
|--------------------|----------|---------|---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| id                 | ✅        |         | string \| number                | Unique id to identify the menu                                                                                                                       |
| children           | ✅        |         | ReactNode                       | Any valid node which can be rendered                                                                                                                 |
| theme              |          |         | string                          | Theme is appended to <ul><li>`contexify_theme-${given theme}`</li></ul>                                                                      |
| animation          |          | scale   | string                          | Animation appended to <ul><li>`contexify_willEnter-${given animation}`</li><li>`contexify_willLeave-${given animation}`</li></ul> |
| onShown            |          |         | () => void                      | Invoked after the menu appeared                                                                                                                      |
| onHidden           |          |         | () => void                      | Invoked after the menu has been hidden                                                                                                               |
| any HTML Attribute |          |         | [HTMLAttribute](#HTMLAttribute) | Any valid HTML attribute                                                                                                                             |

```jsx
import { Menu, Item } from "react-contexify";

<Menu 
  id="anId"
  theme="dark"
  animation="scale"
>
  <Item>item 1</Item>
  <Item>item 2</Item>
  {/* etc... */}
</Menu>
```

## <a name="HTMLAttribute">HTMLAttribute</a> 

```jsx
<Menu 
  id="anId"
  data-test="item-1"
  className="a-css-class"
  style={{ color: "purple" }}
>
  <Item>item 1</Item>
  <Item>item 2</Item>
  {/* etc... */}
</Menu>
```