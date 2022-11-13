import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import {
  Menu,
  Item,
  Separator,
  useContextMenu,
  ItemParams,
  RightSlot,
} from "react-contexify";
import "react-contexify/ReactContexify.css";
import "react-toastify/ReactToastify.min.css";

import { Emoji } from "./Emoji";
import { Delete, Twitter, Email, Handshake } from "./Icons";
import { Dropdown } from "./Dropdown";
import styles from "./Demo.module.css";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "./Button";

const builtInAnimation = {
  fade: "fade",
  flip: "flip",
  scale: "scale",
  slide: "slide",
};

const builtInTheme = {
  light: "light",
  dark: "dark",
};

const demoData = [
  {
    id: 1,
    avatar: "/react-contexify/img/tux1.png",
    firstName: "Roseanna",
    lastName: "Savil",
    email: "rsavil0@state.gov",
    company: "Hoppe, Schoen and Boyle",
  },
  {
    id: 2,
    avatar: "/react-contexify/img/tux2.png",
    firstName: "Cara",
    lastName: "Duddan",
    email: "cduddan1@merriam-webster.com",
    company: "Kunze-Monahan",
  },
  {
    id: 3,
    avatar: "/react-contexify/img/tux3.png",
    firstName: "Tobias",
    lastName: "Maughan",
    email: "tmaughan2@prnewswire.com",
    company: "Casper, Schulist and Ryan",
  },
  {
    id: 4,
    avatar: "/react-contexify/img/tux4.png",
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

function getEventLabel(event: string) {
  switch (event) {
    case "onClick":
      return "Click";
    case "onDoubleClick":
      return "Double click";
    case "onContextMenu":
      return "Right click";
  }
}

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

enum ACTION {
  SHARE = "share",
  REMOVE_ROW = "remove-row",
  SEND_EMAIL = "send-email",
  SPONSOR = "sponsor",
}

export function Demo() {
  const [rowToRemove, setRowToRemove] = useState([]);
  const { show } = useContextMenu({
    id: MENU_ID,
  });
  const items = useTransition(
    demoData.filter(({ id }) => !rowToRemove.includes(id)),
    (item) => item.id,
    {
      from: (item) => ({
        transform: `translate3d(${item.id % 2 !== 0 ? "-100%" : "100%"}, 0, 0)`,
        height: 0,
        opacity: 0,
      }),
      enter: {
        transform: "translate3d(0, 0, 0)",
        height: 100,
        opacity: 1,
      },
      leave: (item) => ({
        transform: `translate3d(${item.id % 2 !== 0 ? "-100%" : "100%"}, 0, 0)`,
        height: 0,
        pointerEvents: "none",
        opacity: 0,
      }),
      trail: 250,
    }
  );
  const [state, setState] = React.useReducer(selectorReducer, {
    theme: selector.theme[0],
    animation: "fade",
    event: selector.event[1],
  });

  function handleDropdown(id: string, value: string) {
    setState({
      [id]: value,
    });
  }

  function handleItemClick({ id, props }: ItemParams<{ id: ACTION }>) {
    switch (id as ACTION) {
      case ACTION.REMOVE_ROW:
        setRowToRemove([...rowToRemove, props.id]);
        break;
      case ACTION.SHARE:
        window.open(
          "https://twitter.com/intent/tweet?text=Wow%20%F0%9F%98%B2%21%20React-contexify%20is%20amazing%2C%20you%20should%20at%20least%20give%20it%20a%20try.%20https%3A%2F%2Fgithub.com%2Ffkhadra%2Freact-contexify%0A%23react%20%23webdev",
          "_blank"
        );
        break;
      case ACTION.SEND_EMAIL:
        toast("🚀 Sending an email or maybe not...");
        break;
      case ACTION.SPONSOR:
        window.open("https://github.com/sponsors/fkhadra", "_blank");
        break;
      default:
        break;
    }
  }

  function resetDemo() {
    setRowToRemove([]);
  }

  function displayMenu(e: React.MouseEvent) {
    show({ event: e, props: { id: Number(e.currentTarget.id) } });
  }

  const { theme, animation, event } = state;

  const triggerEvent = {
    [event]: displayMenu,
  };

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
        <p className={styles.info}>
          {getEventLabel(event)} an Item in the list to start playing
        </p>
      </div>
      <ul className={styles.list}>
        {items.map(({ item, key, props }) => (
          <animated.li
            id={`${item.id}`}
            key={key}
            className={styles.listItem}
            style={props}
            {...triggerEvent}
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
      <div className={styles.cta}>
        <Button onClick={resetDemo}>Reset demo</Button>
      </div>
      <Menu
        id={MENU_ID}
        theme={theme}
        animation={animation === "none" ? false : animation}
      >
        <Item
          id={ACTION.REMOVE_ROW}
          onClick={handleItemClick}
          className={styles.itemContent}
          keyMatcher={(e) => {
            e.preventDefault();
            return e.metaKey && e.key === "d";
          }}
        >
          <Delete />
          <span>Remove row</span>
          <RightSlot>⌘D</RightSlot>
        </Item>
        <Separator />
        <Item
          id={ACTION.SHARE}
          onClick={handleItemClick}
          className={styles.itemContent}
        >
          <Twitter />
          <span>Share</span>
        </Item>
        <Item
          id={ACTION.SEND_EMAIL}
          onClick={handleItemClick}
          className={styles.itemContent}
          keyMatcher={(e) => {
            e.preventDefault();
            return e.metaKey && e.key === "e";
          }}
        >
          <Email />
          <span>Send email</span>
          <RightSlot>⌘E</RightSlot>
        </Item>
        <Item disabled>I'm disabled I guess</Item>
        <Item
          id={ACTION.SPONSOR}
          onClick={handleItemClick}
          className={styles.itemContent}
        >
          <Handshake /> <span>Sponsor my work</span>
        </Item>
      </Menu>
      <ToastContainer />
    </div>
  );
}
