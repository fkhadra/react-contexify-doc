---
id: submenu
title: Submenu
---

| Prop               | Required | Default | Type                                  | Descripton                                                        |
|--------------------|----------|---------|---------------------------------------|-------------------------------------------------------------------|
| label              | ✅        |         | ReactNode                             | Any valid node which can be rendered                              |
| children           | ✅        |         | ReactNode                             | Any valid node which can be rendered                              |
| arrow              |          | ▶       | ReactNode                             | Render a custom arrow                                             |
| disabled           |          | false   | [BooleanPredicate](#BooleanPredicate) | Disable `Item`. If a function is used, a boolean must be returned |
| hidden             |          | false   | [BooleanPredicate](#BooleanPredicate) | Hide `Item`. If a function is used, a boolean must be returned    |
| any HTML Attribute |          |         | [HTMLAttribute](#HTMLAttribute)       | Any valid HTML attribute                                          |

```jsx
import { Menu, Submenu, Item } from "react-contexify";

<Menu 
  id="anId"
>
  <Item>item 1</Item>
  <Item>item 2</Item>
  <Submenu label="a submenu" arrow="🚀">
    <Item>item 1</Item>
    <Item>item 2</Item>
  </Submenu>
</Menu>
```

## <a name="BooleanPredicate">BooleanPredicate</a> 

```tsx
interface HandlerParams<Props = any, Data = any> {
  /**
   * The event that triggered the context menu
   */
  triggerEvent: DomEvent;

  /**
   * Any props supplied when triggering the menu
   */
  props?: Props;

  /**
   * Data object provided to item
   */
  data?: Data;
}

type BooleanPredicate = boolean | ((args: HandlerParams) => boolean);


<Submenu label="a submenu" disabled={true}>
  <Item>Item 1</Item>
</Submenu>

function isDisabled({ 
  triggerEvent,
  props,
  data
  }: PredicateParams<type of props, type of data>){
  return boolean;
}

<Submenu label="a submenu" disabled={isDisabled}>
  <Item>Item 1</Item>
</Submenu>


<Submenu label="a submenu" hidden={true}>
  <Item>Item 1</Item>
</Submenu>

function isHidden({ 
  triggerEvent,
  props,
  data
  }: PredicateParams<type of props, type of data>){
  return boolean;
}

<Submenu label="a submenu" hidden={isHidden}>
  <Item>Item 1</Item>
</Submenu>
```

## <a name="HTMLAttribute">HTMLAttribute</a> 

```jsx
<Submenu 
  label="a submenu"
  data-test="item-1"
  className="a-css-class"
  style={{ color: "purple" }}
>
  <Item>Item 1</Item>
</Submenu>
```
