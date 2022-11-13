---
id: handle-item-click
title: Handle Item click
---

Handling `Item` click/touch is at the core of react-contexify. When an `Item` is clicked, the callback gives you access to the following parameters:
- `id` The item id when defined
- `event` The event that occurred on the Item node
- `props` The props passed when you called `show({event: e, props: yourProps})`
- `data` The data defined on the `Item`
- `triggerEvent` The event that triggered the context menu

This gives you a lot of power to implement your logic. The trade-off is that we have now multiple ways to handle the interaction with our Menu. 
 
- you could use one handler per `Item`
- a single function to handle all `Items`
- identify an `Item` using the `data` props
- identity an `Item` using the `id` attribute

You may ask yourself, "Which solution should I use?". Well, it depends. Now before you hate me let me explain myself 🤣.

Choose the approach that matches your needs and the easier to understand for you and your team. I tried my best to make every developer happy and confident, hence the flexibility.  

I'll describe the one I've used in the demo. Pay attention to the comments.


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

const MENU_ID = "💩";

export function Demo() {
  const { show } = useContextMenu({
    id: MENU_ID,
  });

  function displayMenu(e) {
    show({event: e, props: { key: "value" }});
  }

  function handleItemClick({ id, props, data, triggerEvent }) {
    // ⚠️ data and triggerEvent are not used. I've just added them so we have the full list of parameters

    // I use the id attribute defined on the `Item` to identify which one is it
    // this feel natural to my brain
    switch (id) {
      case "remove":
        // logic to remove the row
        break;
      case "share":
        // logic to share
        break;
      case "email":
        //logic to send email
        break;
      case "sponsor":
        //logic to open sponsor page
        break;
    }
  }

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li id={`${item.id}`} key={item.id} onContextMenu={displayMenu}>
            {/* render content of my list item */}
          </li>
        ))}
      </ul>
      <Menu id={MENU_ID}>
        <Item id="remove" onClick={handleItemClick}>
          Remove row
        </Item>
        <Separator />
        <Item id="share" onClick={handleItemClick}>
          Share
        </Item>
        <Item
          id="email"
          onClick={handleItemClick}
          className={styles.itemContent}
        >
          Send email
        </Item>
        <Item id="sponsor" onClick={handleItemClick}>
          Sponsor my work
        </Item>
      </Menu>
    </div>
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
  ItemParams,
} from "react-contexify";

// I really used that emoji for my menu id 🤣
const MENU_ID = "💩";

// Define an interface for the props that I'll pass to the Item
interface ItemProps {
  key: string;
}

// Defined just for documentation purpose
type ItemData = any;

export function Demo() {
  const { show } = useContextMenu({
    id: MENU_ID,
  });

  function displayMenu(e: React.MouseEvent) {
    // pass the item id so the `onClick` on the `Item` has access to it
    show({event: e, props: { key: "some value" } });
  }

  function handleItemClick({
    id,
    event,
    props,
    data,
    triggerEvent,
  }: ItemParams<ItemProps, ItemData>) {
    // ⚠️ data and triggerEvent are not used. I've just added them so we have the full list of parameters

    // I use the id attribute defined on the `Item` to identify which one is it
    // this feel natural to my brain
    switch (id) {
      case "remove":
        // logic to remove the row
        break;
      case "share":
        // logic to share
        break;
      case "email":
        //logic to send email
        break;
      case "sponsor":
        //logic to open sponsor page
        break;
    }
  }

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li id={`${item.id}`} key={item.id} onContextMenu={displayMenu}>
            {/* render content of my list item */}
          </li>
        ))}
      </ul>
      <Menu id={MENU_ID}>
        <Item id="remove" onClick={handleItemClick}>
          Remove row
        </Item>
        <Separator />
        <Item id="share" onClick={handleItemClick}>
          Share
        </Item>
        <Item
          id="email"
          onClick={handleItemClick}
          className={styles.itemContent}
        >
          Send email
        </Item>
        <Item id="sponsor" onClick={handleItemClick}>
          Sponsor my work
        </Item>
      </Menu>
    </div>
  );
}

```
</TabItem>
</Tabs>