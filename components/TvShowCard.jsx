import React from "react";
// sm:w-2/6 md:w-1/4
const TvShowCard = ({ tvShow }) => {
  const posterURL = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="border p-4 m-4  sm:w-2/6 md:w-1/4 w-auto bg-slate-100/70">
      <div className="w-full flex flex-wrap">
        <img
          src={posterURL + tvShow.poster_path}
          alt={tvShow.name}
          height={500}
          width={300}
        />
        <div className="mx-2">
          <h4 className="my-2 font-bold">First Air Date</h4>
          <p>{tvShow.first_air_date}</p>
          <h4 className="my-2 font-bold">TV Show Name</h4>
          <p className="">{tvShow.name}</p>
          <h4 className="my-2 font-bold">TV Show Score</h4>
          <p>{tvShow.vote_average}</p>
        </div>
      </div>
      <div className="mx-2 my-4">
        <h2 className="text-xl font-bold">{tvShow.name}</h2>
        <p>{tvShow.overview}</p>
      </div>
    </div>
  );
};

export default TvShowCard;
