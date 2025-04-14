import React from "react";
import Link from "next/link";
import styles from "../styles/uiElements.module.css";

function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <img src="/logo.png" alt="Logo" className={styles.logo} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className={`navbar-nav ${styles.container}`}>
            <Link className="nav-link active" href="/">Home</Link>
            <Link className="nav-link" href="/watchlist">Watchlist</Link>
            <Link className="nav-link" href="/genres">Genres</Link>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search Title/IMDB ID" aria-label="Search" />
              <button className="btn btn-outline-dark" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  
  );
}





   function DisplayMovies({ topRatedMovies = [] }){ 

    return (
      <div>

        <div className={styles.movieContainer}>
          <h2>Top Rated Movies</h2>
          {topRatedMovies.map((movie) => (
           <Link href={`/movies/${encodeURIComponent(movie.originalTitle)}`} key={movie.id} className={styles.movieCard}>
           
             <img src={movie.poster} alt={movie.originalTitle} className={styles.movieImage} />
             <div className={styles.movieContent}>
               <strong>{movie.originalTitle}</strong> Released {movie.releaseYear}
               <p>{movie.overview}</p>
             </div>
          
         </Link>
         
          ))}
        </div>
      </div>
    );
  }



    export { Navbar, DisplayMovies };
