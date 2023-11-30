"use client";

import { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import styles from "./Modal.module.scss";
import classNames from "classnames";
import { Inter } from "next/font/google";

export type ModalProps = {
  open: boolean;
  children: ReactNode;
  overlayClassName?: string;
  contentClassName?: string;
};

const inter = Inter({ subsets: ["latin"] });

export const Modal = ({
  open,
  children,
  overlayClassName,
  contentClassName,
}: ModalProps) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>

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
    </>
  );
};
