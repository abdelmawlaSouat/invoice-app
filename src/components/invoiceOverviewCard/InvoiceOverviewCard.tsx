import { Invoice } from "@/types";
import { FC } from "react";
import { useWindowSize } from "@/design-system/hooks";
import { DesktopCard } from "./DesktopCard";
import { MobileCard } from "./MobileCard";
import { BREAKPOINTS } from "@/design-system/styles/breakpoints";

type InvoiceOverviewCardProps = {
  invoice: Invoice;
};

export const InvoiceOverviewCard: FC<InvoiceOverviewCardProps> = ({
  invoice,
}) => {
  const { width } = useWindowSize();

  const InvoiceCard = width >= BREAKPOINTS.md ? DesktopCard : MobileCard;

  return <InvoiceCard invoice={invoice} />;
};
