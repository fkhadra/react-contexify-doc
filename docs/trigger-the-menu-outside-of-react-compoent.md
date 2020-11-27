---
id: trigger-the-menu-outside-of-react-compoent
title: Trigger the Menu outside of a component
---

The library expose a `contextMenu` object to help you in that task. You still need to pass the `event` and the `menuId`.

```jsx
import { contextMenu } from 'react-contexify';


function somewhere(e){
  contextMenu.show({
    id: menuId,
    event: e
  });
}

```