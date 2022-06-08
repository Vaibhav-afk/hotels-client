import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Link href="/">
          <Image
            style={{ cursor: "pointer" }}
            src="/img/hotels.png"
            alt=""
            width="180px"
            height="95px"
          />
        </Link>
      </div>
    </div>
  );
}
