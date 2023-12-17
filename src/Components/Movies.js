import React, { useState, useEffect, forwardRef } from "react";
import { Movie_Data } from "../Common/Movie_Data";
import MovieCards from "./MovieCards";
import Shimmer from "./Shimmer";
import SearchBar from "./SearchBar";
import MoviePlayer from "./MoviePlayer";

function Movies({ ShowsToTheatres, Ref }) {
  const [FilteredMovie, setFilteredMovie] = useState(Movie_Data);
  const [Player, setPlayer] = useState(1);

  return (
    <>
      <div className="MovieBox" Ref={Ref}>
        <SearchBar Filtering={setFilteredMovie} />
        <span className="w-[100%] h-[50px] text-4xl text-white font-semibold font-sherif my-2">
          Streaming
        </span>
        <div className="flex flex-wrap ml-5 w-[100%] h-[75vh] overflow-y-scroll scrollbar-hide">
          {FilteredMovie.length == 0 ? (
            <Shimmer />
          ) : (
            FilteredMovie.map((Movie) => {
              return (
                <MovieCards
                  key={Movie.id}
                  id={Movie.id}
                  MovieDetails={Movie}
                  chosenMovie={setPlayer}
                />
              );
            })
          )}
        </div>
        <MoviePlayer Play={Player} MoviesToTheatresViaShows={ShowsToTheatres} />
      </div>
    </>
  );
}

export default forwardRef(Movies);
