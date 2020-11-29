---
id: item
title: Item
---

| Prop               | Required | Default | Type                                  | Descripton                                                        |
|--------------------|----------|---------|---------------------------------------|-------------------------------------------------------------------|
| children           | ✅        |         | ReactNode                             | Any valid node which can be rendered                              |
| data               |          |         | any                                   | Passed to the `Item` onClick callback.Accessible via `data`       |
| onClick            |          |         | [ItemHandler](#ItemHandler)           | Callback when the current `Item` is clicked                       |
| disabled           |          | false   | [BooleanPredicate](#BooleanPredicate) | Disable `Item`. If a function is used, a boolean must be returned |
| hidden             |          | false   | [BooleanPredicate](#BooleanPredicate) | Hide `Item`. If a function is used, a boolean must be returned    |
| any HTML Attribute |          |         | [HTMLAttribute](#HTMLAttribute)       | Any valid HTML attribute                                          |



## <a name="ItemHandler">ItemHandler</a> 

```tsx
interface ItemParams<Props = any, Data = any> {
  /**
   * Any props supplied when triggering the menu
   */
  props?: Props;

  /**
   * Data object provided to item
   */
  data?: Data;

  /**
   * The event that occured on the Item node
   */
  event: DomEvent;

  /**
   * The event that triggered the context menu
   */
  triggerEvent: DomEvent;
}

function handleItemClick({ 
  triggerEvent,
  event,
  props,
  data 
  }: ItemParams<type of props, type of data>
  ){
  // retrieve the id of the Item or any other dom attribute
  const id = e.currentTarget.id; // equal to "item-id"
   
  // access the props and the data
  console.log(props, data);
   
  // access the coordinate of the mouse when the menu has been displayed
  const {  clientX, clientY } = triggerEvent;   
}
   
<Item 
  id="item-id"
  onClick={handleItemClick}
  data={{key: 'value'}}
>
  Something
</Item>
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


<Item disabled={true}>An item</Item>

function isItemDisabled({ 
  triggerEvent,
  props,
  data
  }: PredicateParams<type of props, type of data>){
  return boolean;
}

<Item disabled={isItemDisabled} data={data}>item content</Item>

<Item hidden={true}>hidden</Item>

function isItemHidden({ 
  triggerEvent,
  props,
  data
  }: PredicateParams<type of props, type of data>){
  return boolean;
}

<Item hidden={isItemHidden}>hidden</Item>
```

## <a name="HTMLAttribute">HTMLAttribute</a> 

```jsx
<Item 
  id="anId"
  data-test="item-1"
  className="a-css-class"
  style={{ color: "purple" }}
>
  Item 1
</Item>
```