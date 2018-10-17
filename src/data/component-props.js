const shared = {
  menuId: {
    name: 'id',
    required: 'true',
    type: 'string | number',
    description:
      'Unique id to identify the menu. Use to Trigger the corresponding menu',
  },
  children: {
    name: 'children',
    required: 'true',
    type: 'ReactNode',
    description: 'Any valid node which can be rendered',
  },
  style: [
    {
      name: 'className',
      required: 'false',
      type: 'string',
      description: 'Append given css classes',
    },
    {
      name: 'style',
      required: 'false',
      type: 'object',
      description: 'Append given inline style',
    },
  ],
  disabled: {
    name: 'disabled',
    required: 'false',
    default: ' false',
    type: 'boolean | (props: MenuItemEventHandler) => boolean',
    description:
      'Disable or not the `Item`. If a function is used, a boolean must be returned',
  }
}


export const menu = [
  {...shared.menuId},
  {...shared.children},
  {
    name: 'theme',
    required: 'false',
    type: 'string',
    description:
      'Theme is appended to `react-contexify__theme--${given theme}`. Built-in theme are `light` and `dark`',
  },
  {
    name: 'animation',
    required: 'false',
    type: 'string',
    description:
      'Animation is appended to `.react-contexify__will-enter--${given animation}`. Built-in animations are fade, flip, pop, zoom',
  },
  ...shared.style,
];

export const iconFont = [{...shared.children}, ...shared.style];

export const item = [
  {...shared.children},
  {
    name: 'data',
    required: 'false',
    type: 'object',
    description:
      'Passed to the `Item` onClick callback. Accessible via `props`',
  },
  {...shared.disabled},
  {
    name: 'onClick',
    required: 'false',
    type: '(props: MenuItemEventHandler) => void',
    description:
      'Callback when the current `Item` is clicked. The callback give you access to the current event and also the data passed to the `Item`.`({ event, props }) => ...`',
  },
  ...shared.style,
];

export const submenu = [
  {
    name: 'label',
    required: 'true',
    type: 'ReactNode',
    description: 'Any valid node which can be rendered',
  },
  {...shared.children},
  {
    name: 'arrow',
    required: 'false',
    default: '▶',
    type: 'ReactNode',
    description: 'Render a custom arrow',
  },
  {...shared.disabled},
  ...shared.style
]

export const provider = [
  {...shared.menuId},
  {...shared.children},
  {
    name: 'component',
    required: 'false',
    default: 'div',
    type: 'ReactNode | (args?: any) => ReactNode',
    description: 'Any valid node that can be rendered or a render props',
  },
  {
    name: 'render',
    required: 'false',
    type: '(args?: any) => ReactNode',
    description: 'Render props',
  },
  {
    name: 'event',
    required: 'false',
    default: 'onContextMenu',
    type: 'ReactEvent',
    description: 'Any react event',
  },
  {
    name: 'storeRef',
    required: 'false',
    default: 'true',
    type: 'boolean',
    description: 'Store children ref',
  },
  {
    name: 'data',
    required: 'false',
    type: 'object',
    description: 'Passed to the `Item` onClick callback. Accessible via `props`',
  }
];
