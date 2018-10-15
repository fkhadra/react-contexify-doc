import React from 'react';
import { Menu, Item } from 'react-contexify';

import Emoji from '../../Emoji';

export default ({ menuId, theme, animation, drawBox }) => (
  <Menu id={menuId} theme={theme} animation={animation}>
    <Item onClick={() => drawBox('blue')}>
      <Emoji>🔷</Emoji>
      Turn box to blue
    </Item>
    <Item onClick={() => drawBox('red')}>
      <Emoji>🛑</Emoji>
      Turn box to red
    </Item>
    <Item onClick={() => drawBox()}>
      <Emoji>🔄</Emoji>
      Reset
    </Item>
  </Menu>
);
