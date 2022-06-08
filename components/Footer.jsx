import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className="title">
          Copyright © 2022 hotels.com. All rights reserved
        </p>
      </div>
    </div>
  );
}
