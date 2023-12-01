import { Invoice } from "@/types";
import { MobileItemsCard } from "./MobileItemsCard";
import { DesktopItemsCard } from "./DesktopItemsCard";
import { useWindowSize } from "@/design-system/hooks";
import { BREAKPOINTS } from "@/design-system/styles/breakpoints";

type ItemsListCardProps = {
  invoice: Invoice;
};

export const ItemsListCard = ({ invoice }: ItemsListCardProps) => {
  const { width } = useWindowSize();

  const ItemsCard =
    width >= BREAKPOINTS.sm ? DesktopItemsCard : MobileItemsCard;

  return <ItemsCard items={invoice.products} total={invoice.total} />;
};
