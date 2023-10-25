"use client";

import { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import styles from "./Modal.module.scss";

export interface ModalProps {
  open: boolean;
  children: ReactNode;
}

export const Modal = ({ open, children }: ModalProps) => {
  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>{children}</Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
