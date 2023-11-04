"use client";

import { Moon, Sun } from "@/design-system/icons";
import styles from "./ThemeSwitcher.module.scss";
import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  const setDarkMode = () => {
    document.documentElement.classList.add("theme-dark");
    localStorage.setItem("theme", "dark");
    setTheme("dark");
  };

  const setLightMode = () => {
    document.documentElement.classList.remove("theme-dark");
    localStorage.setItem("theme", "light");
    setTheme("light");
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      setDarkMode();
    } else {
      setLightMode();
    }
  }, []);

  const onClick = () => {
    if (document.documentElement.classList.contains("theme-dark")) {
      setLightMode();
    } else {
      setDarkMode();
    }
  };

  return (
    <button
      className={styles.button}
      onClick={onClick}
      aria-label={`theme-switcher-${theme}-mode`}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
};
