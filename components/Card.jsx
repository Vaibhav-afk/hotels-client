import React from "react";
import styles from "../styles/Card.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Card({ id, name, location }) {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.image}>
          <Image
            src="/img/hotel-image.jpg"
            alt=""
            width="330px"
            height="220px"
          />
        </div>
        <h2 className={styles.hotelName}>{name}</h2>
        <h3>{location}</h3>
      </div>
      <Link href={`hotel/${id}`}>
        <button className={styles.viewButton}>Visit</button>
      </Link>
    </div>
  );
}
