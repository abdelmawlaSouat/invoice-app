import invoices from "@/constants/invoices";
import styles from "./page.module.scss";

import { GoBackLink } from "@/components";

type Props = {
  params: {
    id: string;
  };
};

export default function Invoice({ params }: Props) {
  return (
    <main className={styles.wrapper}>
      <GoBackLink />
    </main>
  );
}

export function generateStaticParams() {
  return invoices.map(({ id }) => ({
    id,
  }));
}
