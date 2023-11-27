"use client";

import { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import styles from "./Modal.module.scss";
import classNames from "classnames";

export type ModalProps = {
  open: boolean;
  children: ReactNode;
  overlayClassName?: string;
  contentClassName?: string;
};

export const Modal = ({
  open,
  children,
  overlayClassName,
  contentClassName,
}: ModalProps) => {
  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={classNames(styles.overlay, overlayClassName)}
        />
        <Dialog.Content
          className={classNames(styles.content, contentClassName)}
        >
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
