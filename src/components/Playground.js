import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import styled from "styled-components";
import {
  Item,
  Menu,
  theme,
  animation,
  Separator,
  Submenu,
  MenuProvider
} from 'react-contexify';

const scope = {
  Item,
  Menu,
  theme,
  animation,
  Separator,
  Submenu,
  MenuProvider
};

export default ({ code }) => (
  <LiveProvider code={code} scope={scope} noInline>
    <LiveEditor />
    <LiveError />
    <LivePreview />
  </LiveProvider>
);
