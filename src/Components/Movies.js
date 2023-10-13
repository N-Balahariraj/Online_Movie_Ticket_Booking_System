import React, { useState, useEffect } from "react";
import MovieCards from "./MovieCards";
import { Movie_Data } from "../Common/Movie_Data";
import { useOutletContext } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuBar from "./MenuBar";

export default function Movies() {
  const [searchText, setSearchText] = useOutletContext();
  const [filtered_movie_data, setFilteredData] = useState([]);
  const  [all_movie_data, setAllMovies] = useState([]);

  console.log(searchText);

  const API_Data = async () => {
    const Fetch_Data = await fetch("https://dummyapi.online/api/movies");
    const Movie_Data = await Fetch_Data.json();
    setFilteredData(Movie_Data);
    setAllMovies(Movie_Data)
  };

  useEffect(() => {
    API_Data();
  }, []);

  useEffect(() => {
    filterData();
  }, [searchText]);

  function filterData() {
    const Filter = all_movie_data.filter((Movie) => {
      return Movie.movie.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredData(Filter);
  }

  return (
    <>
     <MenuBar filterOptions={["Languages","Genere","Ratings","Average Price"]}/>
    
    <div className="MovieBox">
      {filtered_movie_data.length == 0 ? (
        <Shimmer />
      ) : (
        filtered_movie_data.map((Movie) => {
          return (
            <MovieCards
              key={Movie.id}
              MovieDetails={Movie}
              searchText={searchText}
            />
          );
        })
      )}
    </div>
    </>
   
  );
}
