// --contexify-menu-minWidth: 220px;
// --contexify-menu-padding: 6px;
// --contexify-menu-radius: 6px;
// --contexify-menu-bgColor: #fff;
// --contexify-menu-shadow: 1px 2px 2px rgba(0, 0, 0, 0.1),
// 2px 4px 4px rgba(0, 0, 0, 0.1),
// 3px 6px 6px rgba(0, 0, 0, 0.1);
// --contexify-menu-negatePadding: var(--contexify-menu-padding);

// --contexify-itemContent-padding: 6px;
// --contexify-activeItem-radius: 4px;
// --contexify-separator-color: rgba(0, 0, 0, 0.2);
// --contexify-separator-margin: 5px;
// --contexify-item-color: #333;
// --contexify-rightSlot-color: #6f6e77;
// --contexify-activeRightSlot-color: #fff;
// --contexify-activeItem-color: #fff;
// --contexify-activeItem-bgColor: #3498db;
// --contexify-arrow-color: #6f6e77;
// --contexify-active-arrow-color: #fff;

import React, { useEffect, useReducer, useRef, useState } from "react";
import "react-contexify/ReactContexify.css";
import "react-toastify/ReactToastify.min.css";

import styles from "./ThemeBuilder.module.css";
import {
  Item,
  Menu,
  RightSlot,
  Separator,
  Submenu,
  TriggerEvent,
  useContextMenu,
} from "react-contexify";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "./Button";

const vars = [
  {
    id: "menu-bgColor",
    label: "Menu",
  },
  {
    id: "separator-color",
    label: "Separator",
  },
  {
    id: "item-color",
    label: "Item text",
  },
  {
    id: "activeItem-color",
    label: "Active item text",
  },
  {
    id: "activeItem-bgColor",
    label: "Active item background",
  },
  {
    id: "rightSlot-color",
    label: "Right slot",
  },
  {
    id: "activeRightSlot-color",
    label: "Active right slot",
  },
  {
    id: "arrow-color",
    label: "Arrow",
  },
  {
    id: "activeArrow-color",
    label: "Active arrow",
  },
];

export function ThemeBuilder() {
  const menuContainer = useRef<HTMLDivElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const { show } = useContextMenu({ id: "builder" });
  const [theme, setTheme] = useState("none");
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    if (menuContainer.current) {
      setTimeout(() => {
        show({
          event: new Event("") as TriggerEvent,
          position: {
            x:
              menuContainer.current.offsetLeft +
              menuContainer.current.offsetLeft / 2,
            y:
              menuContainer.current.offsetTop +
              menuContainer.current.offsetTop / 2,
          },
        });

        menu.current = document.querySelector(".theme-builder");
      }, 0);
    }
  }, []);

  useEffect(() => {
    menu.current = document.querySelector(".theme-builder");
    forceUpdate();
  }, [theme]);

  const handleVariablesCopy = () => {
    const style = getComputedStyle(menu.current);

    const cssVars = vars
      .map(
        ({ id }) =>
          `--contexify-${id}: ${style
            .getPropertyValue(`--contexify-${id}`)
            .trim()};`
      )
      .join("\n");

    navigator.clipboard.writeText(cssVars).then(
      () => {
        toast.success("Variables copied");
      },
      () => {
        toast.error("copy failed, use your console instead");
      }
    );
  };

  return (
    <section className={styles.section}>
      <div ref={menuContainer} />
      <div className={styles.formWrapper}>
        <div className={styles.inputGroup}>
          <label>Theme</label>
          <select
            onChange={(e) => {
              menu.current = null;
              setTheme(e.target.value);
            }}
          >
            {["none", "light", "dark"].map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
        {menu.current &&
          vars.map(({ id, label }) => {
            const css = getComputedStyle(menu.current);
            let defaultValue = css.getPropertyValue(`--contexify-${id}`).trim();

            if (defaultValue.trim().length === 4) {
              defaultValue = `#${defaultValue
                .slice(1)
                .split("")
                .map((v) => v + v)
                .join("")}`;
            }

            return (
              <div key={id} className={styles.inputGroup}>
                <label htmlFor={id}>{label}</label>
                <input
                  id={id}
                  type="color"
                  defaultValue={defaultValue}
                  onChange={(e) => {
                    menu.current.style.setProperty(
                      `--contexify-${id}`,
                      e.target.value
                    );
                  }}
                />
              </div>
            );
          })}
        <Button onClick={handleVariablesCopy}>Copy style</Button>
      </div>

      <Menu
        id="builder"
        theme={theme}
        className="theme-builder"
        disableBoundariesCheck
        hideOn={[]}
      >
        <Item closeOnClick={false}>
          Item 1<RightSlot>⌘C</RightSlot>
        </Item>
        <Item closeOnClick={false}>
          Item 2<RightSlot>⌘V</RightSlot>
        </Item>
        <Item closeOnClick={false}>
          Item 3<RightSlot>⌘X</RightSlot>
        </Item>
        <Submenu label="Submenu">
          <Item closeOnClick={false}>Item 4</Item>
          <Item closeOnClick={false}>Item 5</Item>
          <Item closeOnClick={false}>Item 6</Item>
        </Submenu>
        <Separator />
        <Item closeOnClick={false}>Item 10</Item>
        <Item closeOnClick={false}>Item 11</Item>
      </Menu>
      <ToastContainer />
    </section>
  );
}
