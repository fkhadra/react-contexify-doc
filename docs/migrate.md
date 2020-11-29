---
id: migrate
title: Migrate from previous version
---

## MenuProvider has been removed

The `MenuProvider` has been removed. It was not flexible enough. Use the `useContextMenu` hook instead or the `contextMenu` object if you are still using classes.

```jsx
import { useContextMenu } from 'react-contexify';

function App(){
  const { show } = useContextMenu({ id: "menuId" });

  function showMenu(e){
    show(e);
  }

  return (
    <div onContextMenu={showMenu}>
      {/* other components */}
    </div>
  )
}
```

```jsx
import { contextMenu } from 'react-contexify';

class App extends Components {
  showMenu(e){
    contextMenu.show({
      event: e
    });
  }

  render(){
    return (
      <div onContextMenu={showMenu}>
        {/* other components */}
      </div>
    )
  }
}
```

## IconFont has been removed

The `Item` content can be anything. `IconFont` can be easly reimplemented to meet your requirements.

```jsx
import { Item } from 'react-contexify'

function IconFont(props) {
  return <i {...props}/>
}

<Item>
  <div>
    <IconFont className="fa fa-times">
    <span>close</span>
  </div>
</Item>
```