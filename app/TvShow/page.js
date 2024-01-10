"use client";
import { useEffect, useState } from "react";
import TvShowCard from "@/components/TvShowCard";

const TvShowPage = () => {
  const [tvShows, settvShows] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY;
        const tvUrl = `https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${apiKey}`;
        const response = await fetch(tvUrl);
        const data = await response.json();
        settvShows(data.results);
      } catch (error) {
        console.error("TV Show is not able to fetch", error``);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {tvShows.map((tvShow) => (
        <TvShowCard key={tvShow.id} tvShow={tvShow} />
      ))}
    </div>
  );
};

export default TvShowPage;
