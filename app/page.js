"use client";
import { useEffect, useState } from "react";
import AllCard from "../components/AllCards";

export default function Home() {
  const [mediaType, setMediaType] = useState("all");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let url;
        const apiKey = process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY;
        if (mediaType === "all") {
          const movieUrl = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apiKey}`;
          const tvShowUrl = `https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${apiKey}`;
          const [movieResponse, tvShowResponse] = await Promise.all([
            fetch(movieUrl),
            fetch(tvShowUrl),
          ]);

          const [movieData, tvShowData] = await Promise.all([
            movieResponse.json(),
            tvShowResponse.json(),
          ]);
          const combinedData = [...movieData.results, ...tvShowData.results];
          const sortedData = combinedData.sort(
            (a, b) => b.popularity - a.popularity
          );
          setItems(sortedData);
        } else if (mediaType === "movie") {
          url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apiKey}`;
        } else if (mediaType === "tv") {
          url = `https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${apiKey}`;
        }
        if (mediaType !== "all") {
          const response = await fetch(url);
          const data = await response.json();
          setItems(data.results);
        }
        setLoading(false);
      } catch (error) {
        console.error("Issue fetching the movie database: ", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [mediaType]);
  return (
    <div className="w-full h-auto ">
      <div className="">
        <div className="flex justify-center py-5">
          <button
            onClick={() => setMediaType("all")}
            className={`text-slate-950 dark:text-slate-100 linear-graident-effect mx-2 outline-blue-500/50 p-2 border px-2 ease-in duration-300 hover:bg-sky-400 transition  ${
              mediaType === "all" ? "bg-blue-400" : ""
            }`}
          >
            All
          </button>
          <button
            onClick={() => setMediaType("movie")}
            className={`text-slate-950 dark:text-slate-100 linear-graident-effect mx-2  outline-blue-500/50 p-2 border px-2 ease-in duration-300 hover:bg-sky-400  transition ${
              mediaType === "movie" ? "bg-blue-400" : ""
            }`}
          >
            Movies
          </button>
          <button
            onClick={() => setMediaType("tv")}
            className={`text-slate-950  dark:text-slate-100 linear-graident-effect mx-2 outline-blue-500/50 p-2 border px-2 ease-in duration-300 hover:bg-sky-400 transition  ${
              mediaType === "tv" ? "bg-blue-400" : ""
            }`}
          >
            TV Shows
          </button>
        </div>
      </div>
      <div className="flex flex-3 flex-wrap justify-evenly">
        {loading ? (
          <p>Loading...</p>
        ) : (
          items.map((item) => <AllCard key={item.id} item={item} />)
        )}
      </div>
    </div>
  );
}
