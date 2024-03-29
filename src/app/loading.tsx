import styles from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dualRing} />
    </div>
  );
};

export default Loading;
