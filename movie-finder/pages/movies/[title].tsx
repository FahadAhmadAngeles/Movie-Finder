
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchMovieByTitle } from "../movieData";
import React from "react";
import Link from "next/link";
import styles from "../../styles/movieDetails.module.css";

export async function getServerSideProps(context) {
  
  const { title } = context.params;
  const movie = await fetchMovieByTitle(title);

  console.log("Fetching title:", title);
console.log("Movie response:", movie);

  return {
    props: {
      movie: movie || null,
    },
  };
}


export default function MovieDetail({ movie }) {
  if (!movie) {
    return <div>Movie not found.</div>;
  }

  return (
    <div className={styles.detailsContainer}>
      <h1>{movie.originalTitle}</h1>
      <p><strong>Released:</strong> {movie.releaseYear}</p>
      <p>{movie.overview}</p>
      <Link href="/">Back to Movie List</Link>
    </div>
  );
}

