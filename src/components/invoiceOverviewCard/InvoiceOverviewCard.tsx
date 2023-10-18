import { Invoice } from "@/types/Invoice";
import { FC } from "react";
import { useWindowSize } from "@/design-system/hooks";
import { DesktopCard } from "./DesktopCard";
import { MobileCard } from "./MobileCard";
import { BREAKPOINTS } from "@/design-system/styles/breakpoints";

interface InvoiceOverviewCardProps {
  invoice: Invoice;
}

export const InvoiceOverviewCard: FC<InvoiceOverviewCardProps> = ({
  invoice,
}) => {
  const { width } = useWindowSize();

  return width >= BREAKPOINTS.md ? (
    <DesktopCard invoice={invoice} />
  ) : (
    <MobileCard invoice={invoice} />
  );
};
