import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import testData from "../../components/test";
import styles from "../../styles/Hotel.module.css";
import Link from "next/link";

export default function hotel() {
  const router = useRouter();
  const { hotelId } = router.query;
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setData(testData.data[9]);
      console.log(data);
      // const res = await axios
      //   .get
      //   // "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken"
      //   ();
      // setData(res.data.meals);
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
        {data.reviews?.map((review) => (
          <div className={styles.reviewBox}>
            <strong style={{ color: "#B20600" }}>{review.username}</strong>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
