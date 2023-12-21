"use client";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY;
        const movieUrl = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apiKey}`;
        const response = await fetch(movieUrl);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Movie is not able to fetch", error``);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviePage;
