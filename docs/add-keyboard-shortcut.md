---
id: add-keyboard-shortcut
title: Add keyboard shortcut
---

The `Item` component accetps a `keyMatcher` callback. The callback receives the keyboard event that you can use to match your shortcut.
When the callback returns true, the `onClick` callback will be triggered.

The library exposes a `RightSlot` component which helps you align your shortcut to the right. You don't have to use it :).

```tsx
// let's match ⌘ + F
const matchShortcut = (e: KeyboardEvent): boolean => {
  return e.metaKey && e.key === 'f'
}
```

See the live example below.

<iframe src="https://stackblitz.com/edit/react-contexify-kbd-shortcut?embed=1&file=App.tsx&theme=dark" width="100%" height="400px"/>