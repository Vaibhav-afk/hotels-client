import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Review.module.css";
import axios from "axios";

export default function review() {
  const router = useRouter();
  const { hotelId } = router.query;
  const [username, setUsername] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewData = { username, review };

    const fetchData = async () => {
      await axios
        .put(
          `https://server-hotels.herokuapp.com/hotels/${hotelId}/review`,
          reviewData
        )
        .then((res) => {
          router.push("/");
          alert("review added successfully!");
          console.log(res);
        })
        .catch((err) => console.error(err));
    };

    fetchData();
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Review Form</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.items}>
            <input
              type="text"
              name="username"
              placeholder="Enter username.."
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className={styles.items}>
            <input
              type="text"
              name="review"
              placeholder="Add review.."
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
          <div className={styles.items}>
            <input type="submit" />
          </div>
        </form>
      </div>
    </>
  );
}
