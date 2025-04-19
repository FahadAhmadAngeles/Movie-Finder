import React, { useEffect, useState } from "react";
import { Navbar } from "./uiElements";
import Link from "next/link";
import styles from "../styles/genreList.module.css";

export default function WatchList() {
  const [watchlist, setWatchlist] = useState([]);

  // Load the watchlist from localStorage on component mount
  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(storedWatchlist);
  }, []);

  // Function to remove a movie from the watchlist
  const removeFromWatchlist = (id) => {
    const updatedWatchlist = watchlist.filter((movie) => movie.id !== id);
    setWatchlist(updatedWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  };

  if (watchlist.length === 0) {
    return (
      <>
        <Navbar />
        <div className={styles.container}>
          <h1>Your Watchlist</h1>
          <p>Your watchlist is empty. Add some movies to see them here!</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Your Watchlist</h1>
        <div className={styles.movieGrid}>
          {watchlist.map((movie) => (
            <div key={movie.id} className={styles.movieCard}>
            <Link className={styles.movieLink} href={`/movies/${encodeURIComponent(movie.originalTitle)}`}>
            <img src={movie.poster} alt={movie.originalTitle} className={styles.moviePoster} />
            <p>{movie.originalTitle}</p>
            </Link>


              <button
                className={styles.button}
                onClick={() => removeFromWatchlist(movie.id)}
              >
                Remove from Watchlist
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}