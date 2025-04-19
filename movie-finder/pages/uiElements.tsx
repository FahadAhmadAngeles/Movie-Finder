import React, { useRef } from "react";
import Link from "next/link";
import styles from "../styles/uiElements.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

function Navbar() {
  const searchInput = useRef(null);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchInput.current?.value.trim();
    if (query) {
      router.push(`/movies/${encodeURIComponent(query)}`);
    }
  };

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
            <Link className="nav-link" href="/watchList">Watchlist</Link>
            <Link className="nav-link" href="/genreList">Genres</Link>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input ref={searchInput} className="form-control me-2" type="search" placeholder="Movie Title" aria-label="Search"/>
              <button className="btn btn-outline-dark" type="submit">
                Search
              </button>
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
              <Image
                src={movie.poster}
                alt={movie.originalTitle}
                className={styles.movieImage}
                width={120}
                height={180}
                loading="lazy"
              />
             <div className={styles.movieContent}>
               <strong>{movie.originalTitle}</strong> Released {movie.releaseYear} Rating {movie.rating}
               <p>{movie.overview}</p>
             </div>
          
         </Link>
         
          ))}
        </div>
      </div>
    );
  }



    export { Navbar, DisplayMovies };
