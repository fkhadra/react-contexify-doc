import React from "react";
import styles from "./Button.module.css";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const Button: React.FC<ButtonProps> = (props) => (
  <button {...props} className={styles.button} />
);
