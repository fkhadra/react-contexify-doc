import React, { useEffect, useRef, useState } from "react";
import { useTransition, animated } from "react-spring";
import {
  Menu,
  Item,
  Separator,
  useContextMenu,
  animation as builtInAnimation,
  theme as builtInTheme,
} from "react-contexify";
import "react-contexify/dist/ReactContexify.min.css";

import { Emoji } from "./Emoji";
import { Delete } from "./Icons";
import { Dropdown } from "./Dropdown";
import styles from "./Demo.module.css";

const demoData = [
  {
    id: 1,
    avatar: "/static/img/tux1.png",
    firstName: "Roseanna",
    lastName: "Savil",
    email: "rsavil0@state.gov",
    company: "Hoppe, Schoen and Boyle",
  },
  {
    id: 2,
    avatar: "/static/img/tux2.png",
    firstName: "Cara",
    lastName: "Duddan",
    email: "cduddan1@merriam-webster.com",
    company: "Kunze-Monahan",
  },
  {
    id: 3,
    avatar: "/static/img/tux3.png",
    firstName: "Tobias",
    lastName: "Maughan",
    email: "tmaughan2@prnewswire.com",
    company: "Casper, Schulist and Ryan",
  },
  {
    id: 4,
    avatar: "/static/img/tux4.png",
    firstName: "Sammie",
    lastName: "Mackness",
    email: "smackness3@discuz.net",
    company: "Hirthe Group",
  },
];

const selector = {
  event: ["onContextMenu", "onClick", "onDoubleClick"],
  theme: [
    "none",
    ...Object.keys(builtInTheme).map(
      (k) => builtInTheme[k as keyof typeof builtInTheme]
    ),
  ],
  animation: [
    "none",
    ...Object.keys(builtInAnimation).map(
      (k) => builtInAnimation[k as keyof typeof builtInAnimation]
    ),
  ],
};

interface SelectorState {
  theme: string;
  animation: string;
  event: string;
}

function selectorReducer(
  state: SelectorState,
  nextState: Partial<SelectorState>
) {
  return { ...state, ...nextState };
}

const MENU_ID = "💩";

export function Demo() {
  const { show } = useContextMenu({
    id: MENU_ID,
  });
  const items = useTransition(demoData, (item) => item.id, {
    from: (item) => ({
      transform: "scale(0)",
      height: 0,
      transformOrigin: item.id % 2 !== 0 ? "top left" : "top right",
      opacity: 0,
    }),
    enter: (item) => ({
      transform: "scale(1)",
      height: 100,
      transformOrigin: item.id % 2 !== 0 ? "top left" : "top right",
      opacity: 1,
    }),
    leave: {
      transform: "scale(0)",
      height: 0,
      pointerEvents: "none",
      transformOrigin: "top left",
      opacity: 1,
    },
    trail: 250,
  });
  const [state, setState] = React.useReducer(selectorReducer, {
    theme: selector.theme[0],
    animation: "scale",
    event: selector.event[0],
  });

  function handleDropdown(id: string, value: string) {
    console.log(id, value);

    setState({
      [id]: value,
    });
  }

  return (
    <div>
      <div>
        <ul className={styles.settings}>
          {Object.keys(selector).map((key) => (
            <li key={key}>
              <Dropdown
                id={key}
                label={key}
                options={selector[key]}
                value={state[key as keyof typeof state]}
                onChange={handleDropdown}
              />
            </li>
          ))}
        </ul>
      </div>
      <ul className={styles.list}>
        {items.map(({ item, key, props }) => (
          <animated.li
            id={key}
            key={key}
            className={styles.listItem}
            style={props}
            onClick={show}
          >
            <img src={item.avatar} alt="avatar" />
            <article>
              <div>
                <Emoji>📇</Emoji>
                {item.firstName} {item.lastName}
              </div>
              <div>
                <Emoji>📧</Emoji>
                {item.email}
              </div>
              <div>
                <Emoji>🏢</Emoji>
                {item.company}
              </div>
            </article>
          </animated.li>
        ))}
      </ul>
      <Menu id={MENU_ID}>
        <Item>
          <Delete />
          Remove row
        </Item>
      </Menu>
    </div>
  );
}
