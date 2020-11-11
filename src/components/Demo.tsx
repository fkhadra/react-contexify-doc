import React from "react";
import { useTransition, animated } from "react-spring";
import { Menu, Item, Separator, useContextMenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.min.css";

import { Emoji } from "./Emoji";
import { Delete } from "./Icons";
import styles from "./demo.module.css";

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

  function displayContextMenu(e: React.MouseEvent) {
    show(e);
  }

  return (
    <>
      <ul className={styles.list}>
        {items.map(({ item, key, props }) => (
          <animated.li
            id={key}
            key={key}
            className={styles.listItem}
            style={props}
            onContextMenu={displayContextMenu}
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
    </>
  );
}
