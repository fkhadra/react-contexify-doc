---
id: handling-multiple-menu
title: Handling multiple menu
---

Having multiple `Menu` is a common pattern. Thanks to the `id` we know how to identify our `Menus`. 

But what if I want to display different `Menu` inside the same component? 

:::danger
Don't do that 👇 !

```jsx
import { useContextMenu } from "react-contexify";

function App() {
  const { show: showMenu1 } = useContextMenu({
    id: "menu1",
  });

  const { show: showMenu2 } = useContextMenu({
    id: "menu2",
  });

  // etc...
}
```
:::


Fortunately, there is a better solution! When you call `show`, you can override the menu id. One hook to rule them all 🤘! 

:::tip
You can even initialize the hook without providing an `id`. If you don't provide an `id`, you know that the hook is used for multiple menus. 
Personally, this is what I do. 
:::

```jsx
import { useContextMenu } from "react-contexify";

function App() {
  const { show } = useContextMenu();

  function displayMenu(e){
    // run some logic to determine which menu you should display
    show({
      id: "menu2",
      event: e
    })
  }

  // etc...
}

