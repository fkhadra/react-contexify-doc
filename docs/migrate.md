---
id: migrate
title: Migrate to v6 🚀
---

After more than a year without a release, I'm super excited about this release. It fixes many bugs but also brings new features that are more than welcome! Despite adding more features, the library size decreased from 3.4K to 3.1K 😊.

## New features 🚀

- Allow to disable boundaries check
- Allow to disable preventDefault on key down
- Add support for hidden property to Separator
- Add visual feedback when item is clicked
- Easy customization thanks to css variables. Check out the [theme builder](theme-builder)
- 🔥 Keyboard shortcut made easy! A `keyMatcher` prop has been added to the `Item` component.
<iframe src="https://stackblitz.com/edit/react-contexify-kbd-shortcut?embed=1&file=App.tsx&theme=dark" width="100%" height="400px"/>

## Breaking changes 💥

- removal of `theme` and `animation` constants
- The `show` method exposed by the `useContextMenu` hook uses the same signature as `contextMenu`. It only accept a single parameter now.
```tsx
const {show} = useContextMenu({id: "menuId"})

// ⛔️ Before
show(e, {props: {}})

// ✅ Now
show({ event: e, props: {}})
```

- The `onShow` and `onHidden` callback have been removed in favor of a single callback `onVisibilityChange`

```tsx

const handleVisibilityChange = (isVisible: boolean) => {
  console.log(isVisible)
}

<Menu id="menuId" onVisibilityChange={handleVisibilityChange}>
  <Item>Item 1</Item>
</Menu>
```

- Shorter path to import css
```tsx
// ⛔️ Before
import "react-contexify/dist/ReactContexify.css"

// ✅ Now
import "react-contexify/ReactContexify.css"
```

- Drop support for webpack 4

- css classes have been renamed, please check [how to style](how-to-style) for the list


Happy hacking 🎉!