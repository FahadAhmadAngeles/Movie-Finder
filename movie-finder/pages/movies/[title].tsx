import "bootstrap/dist/css/bootstrap.min.css";
import { fetchMovieByTitle, fetchMoviePlot } from "../movieData";
import { Navbar } from "../uiElements";
import React from "react";
import Link from "next/link";
import styles from "../../styles/movieDetails.module.css";

export async function getServerSideProps(context) {
  
  const { title } = context.params;
  const movie = await fetchMovieByTitle(title);
  const plotData = await fetchMoviePlot(movie.originalTitle, movie.releaseYear);

  console.log("plotData:", plotData);
  return {
    props: {
      movie: movie || null,
      plotData: plotData || null,
    },
  };
}


export default function MovieDetail({ movie, plotData }) {
  if (!movie) {
    return <div>Movie not found.</div>;
  }

  return (
    <>
    <Navbar />
    <div className={styles.detailsContainer}>
      <div className={styles.flexWrapper}>
        <img src={movie.bigPoster} alt={movie.originalTitle} className={styles.poster} />
        <div className={styles.infoWrapper}>
          <div className={styles.infoBlock}>
            <h1>{movie.originalTitle}</h1>
          </div>
          <div className={styles.infoBlock}>
            <p><strong>Released:</strong> {movie.releaseYear}</p>
            <p>{plotData?.plot ? plotData.plot : movie.overview}</p>
            <Link href="/">Back to Movie List</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
  
}

