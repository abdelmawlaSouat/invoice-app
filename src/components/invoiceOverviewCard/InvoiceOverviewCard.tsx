import { InvoiceOverview } from "@/types/InvoiceOverview";
import { FC } from "react";
import { useWindowSize } from "@/design-system/hooks";
import { DesktopCard } from "./DesktopCard";
import { MobileCard } from "./MobileCard";
import { BREAKPOINTS } from "@/design-system/styles/breakpoints";

interface InvoiceOverviewCardProps {
  invoice: InvoiceOverview;
}

export const InvoiceOverviewCard: FC<InvoiceOverviewCardProps> = ({
  invoice,
}) => {
  const { width, height } = useWindowSize();

  console.log(width, height);

  return width >= BREAKPOINTS.md ? (
    <DesktopCard invoice={invoice} />
  ) : (
    <MobileCard invoice={invoice} />
  );
};
