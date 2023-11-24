"use client";

import { InvoiceForm } from "../invoiceForm";

import * as Dialog from "@radix-ui/react-dialog";
import styles from "./InvoiceFormModal.module.scss";
import { Cross2Icon } from "@radix-ui/react-icons";
import { ReactNode } from "react";
import { Invoice } from "@/types";
import { FieldValues, SubmitHandler } from "react-hook-form";

export type ModalProps = {
  title: ReactNode;
  open: boolean;
  onClose: () => void;
  invoice?: Invoice;
  onSubmit: SubmitHandler<FieldValues>;
};

export const InvoiceFormModal = ({
  open,
  onClose,
  title,
  invoice,
  onSubmit,
}: ModalProps) => {
  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Title className={styles.title}>{title}</Dialog.Title>

          <InvoiceForm
            invoice={invoice}
            onClose={onClose}
            onSubmit={onSubmit}
          />

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
