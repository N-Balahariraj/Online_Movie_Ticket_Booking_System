import React from "react";
import { Movie_Data } from "../Common/Movie_Data";
import MovieCards from "./MovieCards";

export default function dummyMovies() {
  return (
    <>
      <div className="MovieBox">
        {Movie_Data.map((Movies) => {
          return <MovieCards key={Movies.id} MovieDetails={Movies} />;
        })}
      </div>
    </>
  );
}
