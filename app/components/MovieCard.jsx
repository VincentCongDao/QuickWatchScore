import React from "react";

const MovieCard = ({ movie }) => {
  const getScoreColor = (score) => {
    const roundedScore = Number(score).toFixed(2).toString();
    if (roundedScore >= 0 && roundedScore <= 5) {
      return "text-lime-500";
    } else if (roundedScore >= 5 && roundedScore <= 8) {
      return "text-sky-500";
    } else if (roundedScore >= 8 && roundedScore <= 10) {
      return "text-emerald-500";
    }
    return "text-white-500";
  };
  const scoreColor = getScoreColor(movie.vote_average);
  const posterURL = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="border p-4 m-4 sm:w-2/6 md:w-1/4 w-auto">
      <div className="w-full flex">
        <img
          src={posterURL + movie.poster_path}
          alt={movie.title}
          height={500}
          width={300}
        />
        <div className="mx-2 ">
          <h4 className="my-2 font-bold">Release Date</h4>
          <p>{movie.release_date}</p>
          <h4 className="my-2 font-bold">Movie Title</h4>
          <p className="">{movie.original_title}</p>
          <h4 className="my-2 font-bold">Movie Score</h4>
          <p className={`${scoreColor}`}>{movie.vote_average}</p>
        </div>
      </div>
      <div className="mx-2 my-4">
        <h2 className="text-xl font-bold">{movie.title}</h2>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
