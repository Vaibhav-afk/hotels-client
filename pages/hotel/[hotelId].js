import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Hotel.module.css";
import Link from "next/link";
import axios from "axios";

export default function Hotel() {
  const router = useRouter();
  const { hotelId } = router.query;
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://server-hotels.herokuapp.com/hotels/${hotelId}`
      );
      setData(res.data);
    };

    fetchData();
  }, [data]);

  console.log(data);

  return (
    <div className={styles.container}>
      <h1 className={styles.text}>{data.name}</h1>

      <Link href={`/review/${hotelId}`}>
        <button className={styles.reviewButton}>Give Review</button>
      </Link>

      <h4>{data.location}</h4>
      <p>{data.description}</p>
      <h3 className={styles.text}>Reviews</h3>
      <hr />
      <div className={styles.reviewContainer}>
        {data.reviews?.map((review, index) => (
          <div key={index} className={styles.reviewBox}>
            <strong style={{ color: "#B20600" }}>{review.username}</strong>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
