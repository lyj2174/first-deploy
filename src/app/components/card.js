import styles from "./card.module.css"

export default function Card({ title, children }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.dotBlue}></span>
        <span className={styles.dotPurple}></span>
        <span className={styles.dotPink}></span>
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <div className={styles.cardBody}>
          {children}
        </div>
      </div>
    </div>
  );
}