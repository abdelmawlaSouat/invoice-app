import { Typography } from "@/design-system/components";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Typography variant="headingL" tag="h1">
        Heading L
      </Typography>

      <Typography variant="headingM" tag="h2">
        Heading M
      </Typography>

      <Typography variant="headingS" tag="h3">
        Heading S
      </Typography>
    </main>
  );
}
