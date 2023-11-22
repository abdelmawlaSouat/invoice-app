import { PaymentTerms } from "@/types";

export const PaymentTermsList = {
  [PaymentTerms.Net_1_Day]: {
    value: "1",
    label: "Net 1 Day",
  },

  [PaymentTerms.Net_7_Days]: {
    value: "7",
    label: "Net 7 Days",
  },

  [PaymentTerms.Net_14_Days]: {
    value: "14",
    label: "Net 14 Days",
  },

  [PaymentTerms.Net_30_Days]: {
    value: "30",
    label: "Net 30 Days",
  },

  [PaymentTerms.Net_45_Days]: {
    value: "45",
    label: "Net 45 Days",
  },

  [PaymentTerms.Net_60_Days]: {
    value: "60",
    label: "Net 60 Days",
  },

  [PaymentTerms.Net_90_Days]: {
    value: "90",
    label: "Net 90 Days",
  },
} as const;
