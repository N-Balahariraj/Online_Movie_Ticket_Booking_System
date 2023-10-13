import React from "react";

export default function MovieCards(props) {
  const { movie, rating, image, imdb_url  } = props.MovieDetails

  return (
    <>
      <div className="MovieCards">
        <img src={image} className="card-img-top" alt="..." />
        <div>
          <h5>{movie}</h5>
          <span>Director     : </span>
          <span>Genere       : </span>
          <span>Star ratings : {rating}  </span>
        </div>
      </div>
    </>
  );
}
