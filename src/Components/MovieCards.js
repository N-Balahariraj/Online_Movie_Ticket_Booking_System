import React from "react";
import { RiMovieLine } from "react-icons/ri";
import { IoStarSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function MovieCards(props) {
  const { movie, rating, imageUrl, languages, theme, Votes } = props.MovieDetails;
  return (
    <div className=" h-[21rem] w-[12rem] flex flex-col m-2 border-1 rounded-md">
      <div className="h-[65%] w-[100%] rounded-lg">
        <img
          src={imageUrl}
          className="h-[100%] w-[100%] rounded-lg"
          alt="..."
        />
      </div>
      <div className="h-[43%] w-[100%] flex flex-col justify-around box-border p-2 pt-0 text-[lightgrey] text-sm">
        <span className="whitespace-nowrap text-white text-lg font-medium w-[100%] overflow-hidden">
          {movie}
        </span>
        <span>{theme.map((T)=>{
          if(theme[theme.length-1] === T)
            return T;
          return T+" | ";
        })}</span>
        <div className="flex justify-between text-[orange]">
          <span>
            {Votes} Votes
          </span>
          <span className="flex flex-row jusify-between items-center">
            {rating}/10 <IoStarSharp />
          </span>
        </div>
        <div className="flex justify-between">
          <Link
            onClick={()=>{props.chosenMovie(props.id)}}
            className="flex justify-center items-center h-7 w-[100%] text-white rounded box-border bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-700"
          >
            Watch Trailer <RiMovieLine className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
