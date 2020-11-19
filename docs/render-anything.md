---
id: render-anything
title: Item can render anything
---

You can provide any valid `ReactNode` to the `Item` component. This means that you have full control over what you render. Whether you pass a `string` or a `React component` it's up to you. 

One perfect use case is displaying icons. The thing is that the icons are available in different formats.
- font icon
- inline SVG
- images

Because you have full control over what you render, the format of your icon doesn't matter at all! 

```jsx
import { MySvgIcon } from "path-to-my-svg";

<Menu id="menuId">
  <Item>
    <MySvgIcon>
    <span>Item 1</span>
  </Item>
  <Separator />
  <Item>
    <img src="path to your image" />
    <span>Item 2</span>
  </Item>
  <Item>
    <span className="material-icons">
      delete
    </span>
    <span>
      Item 3
    <span>
  </Item>
</Menu>

```