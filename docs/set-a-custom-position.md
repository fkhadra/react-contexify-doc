---
id: set-a-custom-position
title: Set a custom position
---

I believe that this is one of the nicest feature of the library. I've used this feature to build the demo dropdown's. 
When you display the menu you can provide `x` and `y` coordinates

```jsx
import { useContextMenu } from "react-contexify";

function App() {
  const { show } = useContextMenu({ id: "menuId" });

  function displayMenu(e) {
    show(e, {
      position: {
        x: 100,
        y: 10,
      },
    });
  }

  return <div onContextMenu={displayMenu}>Hello</div>;
}
```

## Recreate the dropdown step by step


<iframe src="https://codesandbox.io/embed/the-gist-gf1tl?fontsize=14&hidenavigation=1&theme=dark"
     style={{
       width:'100%',
       height: '500px',
       border:0,
       borderRadius: '4px',
       overflow:'hidden'
     }}
     title="The dropdown"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe> 



