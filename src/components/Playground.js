import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import {
  Item,
  Menu,
  theme,
  animation,
  Separator,
  Submenu,
  MenuProvider,
  contextMenu
} from 'react-contexify';

const scope = {
  Item,
  Menu,
  theme,
  animation,
  Separator,
  Submenu,
  MenuProvider,
  contextMenu
};

export default ({ code, preview = true }) => (
  <LiveProvider code={code} scope={scope} noInline>
    <LiveEditor />
    <LiveError />
{ preview && <LivePreview /> }
  </LiveProvider>
);
