import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import { movies } from "../../data/movies";


export default function MovieDetail() {
  const router = useRouter();
  const { id } = router.query;

 
  const movieId = parseInt(id, 10);
  const movie = movies.find((movie) => movie.id === movieId);


  if (!movie) {
    return <div>Loading movie details...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Released: {movie.year}</p>
      <p>{movie.description}</p>
      <Link href="/movies">Back to Movie List</Link>
    </div>
  );
}
