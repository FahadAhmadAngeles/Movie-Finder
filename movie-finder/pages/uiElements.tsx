import styles from "../styles/uiElements.module.css";
import React from "react";
import Link from "next/link";
import { movies } from "../data/movies";


function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="/logo.png" alt="Logo" className={styles.logo} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className={`navbar-nav ${styles.container}`}>
        <Link className="nav-link active" aria-current="page" href="/movies">Home</Link>
        <a className="nav-link" href="#">Watchlist</a>
        <a className="nav-link" href="#">Genres</a>
        <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search Title/IMDB ID" aria-label="Search" />
      <button className="btn btn-outline-dark" type="submit">Search</button>
    </form>
      </div>
    </div>
  </div>
</nav>
    )
}

   function DisplayMovies() {

   
    

    return (
      <div>
       
        <div className={styles.movieContainer}>
          {movies.map((movie) => (
            <Link href={`/movies/${movie.id}`} className={styles.movie} key={movie.id}>
              <div className={styles.movieContent}>
                <strong>{movie.title}</strong>  Released {movie.year}
                <p>{movie.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }



    export { Navbar, DisplayMovies };
