import React, { useRef, useState } from "react";
import { Item, Menu, useContextMenu, ItemParams } from "react-contexify";
// import useThemeContext from "@docusaurus/plugin-content-pages";
import { useColorMode } from "@docusaurus/theme-common";

import { Emoji } from "../Emoji";
import { Chevron } from "../Icons";

import styles from "./Dropdown.module.css";
import cx from "clsx";

export interface DropdownProps {
  id: string;
  value: string;
  label: string;
  options: string[];
  onChange: (id: string, value: string) => void;
}

export function Dropdown({ id, value, options, onChange }: DropdownProps) {
  const [isVisible, setVisibility] = useState(false);
  const isDarkTheme = useColorMode().colorMode === "dark";
  const MenuPosition = useRef<{ x: number; y: number }>();
  const triggerRef = useRef<HTMLButtonElement>();
  const { show, hideAll } = useContextMenu({ id });

  function getMenuPosition() {
    const { left, bottom } = triggerRef.current.getBoundingClientRect();
    MenuPosition.current = { x: left, y: bottom + 8 };

    return MenuPosition.current;
  }

  function handleMenuTrigger(e: React.MouseEvent) {
    if (isVisible) {
      hideAll();
      return;
    }

    show({
      event: e,
      position: getMenuPosition(),
    });
  }

  function handleKeyboard(e: React.KeyboardEvent) {
    switch (e.key) {
      case "Enter":
        show({
          event: e,
          position: getMenuPosition(),
        });
        break;
      case "Escape":
        if (isVisible) {
          hideAll();
        }
        break;
    }
  }

  function toggleVisibility(isVisible: boolean) {
    setVisibility(isVisible);
  }

  function handleChange({ data }: ItemParams<any, { value: string }>) {
    onChange(id, data.value);
  }

  const classes = cx(styles.dropdown, {
    [styles.dropdownDark]: isDarkTheme,
    [styles.dropdownLight]: !isDarkTheme,
  });

  return (
    <div>
      <label htmlFor={`label-${id}`} className={styles.label}>
        {id}
      </label>
      <button
        id={`label-${id}`}
        onClick={handleMenuTrigger}
        onKeyDown={handleKeyboard}
        className={classes}
        tabIndex={0}
        ref={triggerRef}
        aria-haspopup="true"
        aria-expanded={isVisible}
      >
        <span>{value}</span>
        <span>
          <Chevron direction={isVisible ? "up" : "down"} />
        </span>
      </button>
      <Menu
        id={id}
        animation="fade"
        theme={isDarkTheme ? "dark" : "light"}
        onVisibilityChange={toggleVisibility}
      >
        {options.map((option) => (
          <Item key={option} onClick={handleChange} data={{ value: option }}>
            <div>
              <Emoji>{value === option ? "✅" : ""}</Emoji>
              <span>{option}</span>
            </div>
          </Item>
        ))}
      </Menu>
    </div>
  );
}
