import React from "react";
import { Navbar } from "./uiElements";
import styles from "../styles/genreList.module.css";
import { fetchMoviesByGenre } from "../pages/movieData";
import Link from "next/link";

export async function getServerSideProps() {
  
  const comedyMovies = await fetchMoviesByGenre("comedy");

  const actionMovies = await fetchMoviesByGenre("action");

  const romanceMovies = await fetchMoviesByGenre("romance");

  const horrorMovies = await fetchMoviesByGenre("horror");

  return {
    props: {
      comedyMovies,
      actionMovies,
      romanceMovies,
      horrorMovies,
    },
  };
}

export default function GenreList({ comedyMovies, actionMovies, romanceMovies, horrorMovies }) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
 
        <div className={styles.genreSection}>
          <h2>Comedy</h2>
          <div className={styles.movieGrid}>
            {comedyMovies.map((movie) => (
              <Link
                key={movie.id}
                href={`/movies/${encodeURIComponent(movie.originalTitle)}`}
                className={styles.movieCard}
              >
                <img src={movie.poster} alt={movie.originalTitle} className={styles.moviePoster} />
                <p>{movie.originalTitle}</p>
              </Link>
            ))}
          </div>
        </div>

       
        <div className={styles.genreSection}>
          <h2>Action</h2>
          <div className={styles.movieGrid}>
            {actionMovies.map((movie) => (
              <Link
                key={movie.id}
                href={`/movies/${encodeURIComponent(movie.originalTitle)}`}
                className={styles.movieCard}
              >
                <img src={movie.poster} alt={movie.originalTitle} className={styles.moviePoster} />
                <p>{movie.originalTitle}</p>
              </Link>
            ))}
          </div>
        </div>

   
        <div className={styles.genreSection}>
          <h2>Romance</h2>
          <div className={styles.movieGrid}>
            {romanceMovies.map((movie) => (
              <Link
                key={movie.id}
                href={`/movies/${encodeURIComponent(movie.originalTitle)}`}
                className={styles.movieCard}
              >
                <img src={movie.poster} alt={movie.originalTitle} className={styles.moviePoster} />
                <p>{movie.originalTitle}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.genreSection}>
          <h2>Horror</h2>
          <div className={styles.movieGrid}>
            {horrorMovies.map((movie) => (
              <Link
                key={movie.id}
                href={`/movies/${encodeURIComponent(movie.originalTitle)}`}
                className={styles.movieCard}
              >
                <img src={movie.poster} alt={movie.originalTitle} className={styles.moviePoster} />
                <p>{movie.originalTitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}