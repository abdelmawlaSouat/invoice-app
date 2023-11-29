"use client";

import * as React from "react";
import * as RadixToast from "@radix-ui/react-toast";
import styles from "./Toast.module.scss";
import { Typography } from "..";
import { Cross1Icon } from "@radix-ui/react-icons";
import classNames from "classnames";

type ToastProps = {
  open: boolean;
  onClose: () => void;
  type: "success" | "error" | null;
  title: string;
  message: string;
};

const defaultToastContent = {
  success: {
    title: "Success",
    message: "Operation completed successfully.",
  },
  error: {
    title: "Error",
    message: "Something went wrong. Please try again.",
  },
};

export const Toast = ({ title, message, type, open, onClose }: ToastProps) => {
  if (!type || !message) {
    return null;
  }

  return (
    <RadixToast.Provider swipeDirection="up">
      <RadixToast.Root
        className={classNames(styles.root, styles[type])}
        open={open}
      >
        <RadixToast.Title className={styles.title}>
          {title || defaultToastContent[type].title}
        </RadixToast.Title>

        <RadixToast.Description asChild>
          <Typography variant="body" className={styles.description}>
            {message || defaultToastContent[type].message}
          </Typography>
        </RadixToast.Description>

        <RadixToast.Action className={styles.action} asChild altText="Close">
          <button onClick={onClose} className={styles.crossBtn}>
            <Cross1Icon width={20} height={20} />
          </button>
        </RadixToast.Action>
      </RadixToast.Root>
      <RadixToast.Viewport className={styles.viewport} />
    </RadixToast.Provider>
  );
};
