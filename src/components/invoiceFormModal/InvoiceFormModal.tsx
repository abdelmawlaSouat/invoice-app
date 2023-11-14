"use client";

import { InvoiceForm } from "../invoiceForm";

import * as Dialog from "@radix-ui/react-dialog";
import styles from "./InvoiceFormModal.module.scss";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Typography } from "@/design-system/components";
import { ReactNode } from "react";

export type ModalProps = {
  title: ReactNode;
  open: boolean;
  onClose: () => void;
};

export const InvoiceFormModal = ({ open, onClose, title }: ModalProps) => {
  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Typography variant="headingM" tag="h3">
            {title}
          </Typography>

          <InvoiceForm />

          <Dialog.Close asChild>
            <button
              className={styles.iconButton}
              aria-label="Close"
              onClick={onClose}
            >
              <Cross2Icon width={40} height={40} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
