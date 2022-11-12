import React from "react";
import styles from "./emoji.module.css";

export const Emoji: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <span role="icon" className={styles.emoji}>
    {children}
  </span>
);
