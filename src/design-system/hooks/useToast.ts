"use client";

import { useState } from "react";

export type ToastType = "success" | "error" | null;

export const useToast = () => {
  const [toast, setToast] = useState<{
    open: boolean;
    title: string;
    message: string;
    type: ToastType;
  }>({
    open: false,
    title: "",
    message: "",
    type: null,
  });

  const showToast = (
    type: ToastType,
    { title, message }: { title: string; message: string }
  ) => {
    setToast({ open: true, title, message, type });

    if (type !== "error") {
      setTimeout(() => {
        hideToast();
      }, 4000);
    }
  };

  const hideToast = () => {
    setToast({ open: false, title: "", message: "", type: null });
  };

  return {
    toast,
    showToast,
    hideToast,
  };
};
