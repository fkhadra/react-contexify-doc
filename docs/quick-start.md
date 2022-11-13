---
id: quick-start
title: Quick start
---

## Requirements

- [React](https://reactjs.org) version >= 16.8 or above 

## Installation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="pkg"
  defaultValue="npm"
  values={[
    {label: 'Npm', value: 'npm'},
    {label: 'Yarn', value: 'yarn'},
  ]
}>
<TabItem value="npm">

```jsx
npm install --save react-contexify
```
</TabItem>
<TabItem value="yarn">

```jsx
yarn add react-contexify
```
</TabItem>
</Tabs>


## The gist

```jsx
import {
  Menu,
  Item,
  Separator,
  Submenu,
  useContextMenu
} from "react-contexify";

import "react-contexify/dist/ReactContexify.css";

const MENU_ID = "menu-id";

export default function App() {
  // 🔥 you can use this hook from everywhere. All you need is the menu id
  const { show } = useContextMenu({
    id: MENU_ID
  });
 
  function handleItemClick({ event, props, triggerEvent, data }){
    console.log(event, props, triggerEvent, data );
  }

  function displayMenu(e){
    // put whatever custom logic you need
    // you can even decide to not display the Menu
    show({
      event: e,
    });
  }

  return (
    <div>
      {/* just display the menu on right click */}
      <div onContextMenu={show}>
        Right click inside the box
      </div>
      {/* run custom logic then display the menu */}
      <div onContextMenu={displayMenu}>
        Right click inside the box
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

## Step by step guide

Let's decompose what is going on in the gist.

### Import the required components and the style sheet

To create our `menu` we use a declarative approach. There are 4 building blocks
- Menu
- Item
- Separator
- Submenu


```jsx
import {
  Menu,
  Item,
  Separator,
  Submenu,
  useContextMenu,
} from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
```
  
### Assign an id to our menu

Each `Menu` is required to have an `id`. The `id` is used to identify the `Menu` and to display it. 
This comes in handy when your app has multiple `Menu`.

Let's store it in a variable to avoid any typo.
```jsx
const MENU_ID = "menu-id";
```

:::info
- Only strings are supported for the moment. 
- the id will also be attached to the html node
:::

### Bound the menu to a component

Initialize the `useContextMenu` hook with the `menuId` we defined earlier. 

```jsx
const { show } = useContextMenu({
    id: MENU_ID
});

function displayMenu(e){
  // put whatever custom logic you need
  // you can even decide to not display the Menu
  show({
    event: e,
  });
}

// later when we render

{/* just display the menu on right click */}
<div onContextMenu={show}>
  Right click inside the box
</div>
{/* run custom logic then display the menu */}
<div onContextMenu={displayMenu}>
  Right click inside the box
</div>
```

The code above tells us 2 important things.
- The same `Menu` can be bound to multiple components
- We can perform any required business logic before displaying the `Menu`



:::tip
- The gist uses the `onContextMenu` event to display the menu. But any events are valid. `onDoubleClick`, `onClick` etc...
- `useContextMenu` can be used from everywhere in your app as long as you have the menu id
:::

### Render the Menu

When rendering the menu, the `id` is mandatory. Also, when the menu is not visible, it's not added to the dom.

```jsx
<Menu id={MENU_ID}>
  <Item onClick={handleItemClick}>Item 1</Item>
  <Item onClick={handleItemClick}>Item 2</Item>
  <Separator />
  <Item disabled>Disabled</Item>
  <Separator />
  <Submenu label="Submenu">
    <Item onClick={handleItemClick}>Sub Item 1</Item>
    <Item onClick={handleItemClick}>Sub Item 2</Item>
  </Submenu>
</Menu>
```

:::info
I didn't mention the `onClick` handler. The next section is dedicated to it.
:::

