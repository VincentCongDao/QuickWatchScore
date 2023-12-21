import React from "react";
import MovieCard from "./MovieCard";
import TvShowCard from "./TvShowCard";

const AllCard = ({ item }) => {
  return (
    <>
      {item.media_type === "movie" && <MovieCard movie={item} />}
      {item.media_type === "tv" && <TvShowCard tvShow={item} />}
    </>
  );
};

export default AllCard;
