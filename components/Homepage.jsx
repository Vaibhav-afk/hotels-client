import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import axios from "axios";
import testData from "./test";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setData(testData.data);
      console.log(data);
      // const res = await axios
      //   .get
      //   // "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken"
      //   ();
      // setData(res.data.meals);
    };

    fetchData();
  }, [data]);

  // console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <strong>Welcome to hotels.com!</strong>
        </h1>
        <blockquote>
          “ The great advantage of a hotel is that it is a refuge from home
          life.”
        </blockquote>
        <p>-George Bernard Shaw</p>

        <div className={styles.cardContainer}>
          {data.map((hotel, index) => (
            <Card
              key={index}
              id={hotel._id}
              name={hotel.name}
              location={hotel.location}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
