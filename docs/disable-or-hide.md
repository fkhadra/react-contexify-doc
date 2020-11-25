---
id: disable-or-hide
title: Disable or hide an Item
---

You can `disable` or `hide` an `Item` by passing a `boolean` or a `function`. When a `function` is used, a `boolean` must be returned. If you use a function you have access to the following parameters:
- the `props` passed to the `show` function used to display the menu
- the `data` assigned to the `Item`
- the `triggerEvent`, it refers to the event that displayed the menu


## Disable an Item

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="lang"
  defaultValue="js"
  values={[
    {label: 'Javascript', value: 'js'},
    {label: 'Typescript', value: 'ts'},
  ]
}>
<TabItem value="js">

```jsx
import { useContextMenu, Menu, Item, Separator } from "react-contexify";

function App() {
  const { show } = useContextMenu({
    id: "menuId",
  });

  function displayContextMenu(e) {
    show(e, {
      props: {
        key: "foobar",
      },
    });
  }

  function isItemDisabled({ props, data, triggerEvent }) {
    // use the parameters to determine if you want to disable the item or not
    // you get the idea
    return data === "foobar" && props.key === "foobar";
  }

  return (
    <p onContextMenu={displayContextMenu}>
      lorem ipsum
      <Menu id="menuId">
        <Item>Ipsum</Item>
        <Separator />
        <Item disabled>disabled</Item>
        <Item disabled={isItemDisabled} data="foobar">
          disabled using a function
        </Item>
      </Menu>
    </p>
  );
}


```
</TabItem>
<TabItem value="ts">

```tsx
import {
  useContextMenu,
  Menu,
  Item,
  Separator,
  PredicateParams,
} from "react-contexify";

interface MenuProps {
  key: string;
}

type ItemData = string;

function App() {
  const { show } = useContextMenu({
    id: "menuId",
  });

  function displayContextMenu(e) {
    show(e, {
      props: {
        key: "foobar",
      },
    });
  }

  function isItemDisabled({
    props,
    data,
    triggerEvent,
  }: PredicateParams<MenuProps, ItemData>) {
    // use the parameters to determine if you want to disable the item or not
    // you get the idea
    return data === "foobar" && props.key === "foobar";
  }

  return (
    <p onContextMenu={displayContextMenu}>
      lorem ipsum
      <Menu id="menuId">
        <Item>Ipsum</Item>
        <Separator />
        <Item disabled>disabled</Item>
        <Item disabled={isItemDisabled} data="foobar">
          disabled using a function
        </Item>
      </Menu>
    </p>
  );
}

```
</TabItem>
</Tabs>

## Hide an Item

If you know how to disable an `Item` then you are all set !  Replace `disabled` by `hidden` and voila 🚀 !

```jsx
<Item hidden>
  hidden
</Item>

<Item hidden={isItemHidden}>
  hidden
</Item>
```

:::caution
Hidden Items are not rendered !
:::