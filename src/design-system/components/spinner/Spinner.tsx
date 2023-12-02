"use client";

import { useState, useEffect } from "react";
import styles from "./Spinner.module.scss";

export const Spinner = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation((prevRotation) => (prevRotation + 45) % 360);
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={styles.spinner}
      style={{ transform: `rotate(${rotation}deg)` }}
    />
  );
};
