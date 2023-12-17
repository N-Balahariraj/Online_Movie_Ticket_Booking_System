import React, { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { Movie_Data } from "../Common/Movie_Data";
import { parseJSON } from "jquery";

export default function SearchBar({ Filtering }) {
  const [FilteredMovie, setFilteredMovie] = useState(Movie_Data);
  const [SearchInput, setSearchInput] = useState("");
  const [SelectedLanguage, setSelectedLanguage] = useState("Language");
  const [SelectedGenere, setSelectedGenere] = useState("Genere");
  const [SelectedPrice, setSelectedPrice] = useState("Pricings");
  const [SelectedRate, setSelectedRate] = useState("Ratings");

  const Languages = [
    {
      key: 0,
      name: "Language",
    },
    {
      key: 1,
      name: "English",
    },
    {
      key: 2,
      name: "Hindi",
    },
    {
      key: 3,
      name: "Tamil",
    },
    {
      key: 4,
      name: "Malayalam",
    },
    {
      key: 5,
      name: "Telugu",
    },
    {
      key: 6,
      name: "Kannadam",
    },
  ];

  const Generes = [
    {
      key: 0,
      name: "Genere",
    },
    {
      key: 1,
      name: "Horror",
    },
    {
      key: 2,
      name: "Thriller",
    },
    {
      key: 3,
      name: "Action",
    },
    {
      key: 4,
      name: "Drama",
    },
    {
      key: 5,
      name: "Sci-Fi",
    },
    {
      key: 5,
      name: "Crime",
    },
    {
      key: 6,
      name: "Comedy",
    },
    {
      key: 7,
      name: "Romance",
    },
    {
      key: 8,
      name: "Adventure",
    },
  ];

  const Price = [
    {
      key: 0,
      name: "Pricings",
    },
    {
      key: 1,
      name: "Low to High",
    },
    {
      key: 2,
      name: "High to Low",
    },
  ];

  const Rate = [
    {
      key: 0,
      name: "Ratings",
    },
    {
      key: 1,
      name: "Low to High",
    },
    {
      key: 2,
      name: "High to Low",
    },
  ];

  useEffect(() => {
    filterBySearchInput();
  }, [SearchInput]);

  function filterBySearchInput() {
    const Filter = FilteredMovie.filter((Movie) => {
      return Movie.movie.toLowerCase().includes(SearchInput.toLowerCase());
    });
    setFilteredMovie(Filter);
  }

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    const newFilteredMovies = Movie_Data.filter((movie) => {
      return movie.languages.includes(newLanguage);
    });
    if(newLanguage != "Language")
      Filtering(newFilteredMovies)
    else
      Filtering(Movie_Data)
  };
  

  const handleGenereChange = (event) => {
    const newGenere = event.target.value;
    setSelectedGenere(newGenere);
    const newFilteredMovies = Movie_Data.filter((movie) => {
      return movie.theme.includes(newGenere);
    });
    if(newGenere != "Genere")
      Filtering(newFilteredMovies)
    else
      Filtering(Movie_Data)
  };

  const handlePriceChange = (event) => {
    const newPrice = event.target.value;
    setSelectedPrice(newPrice);
    const Ascending = Array.from(Movie_Data).sort((a,b)=>a.price - b.price)
    const Descending = Array.from(Movie_Data).sort((a,b)=>b.price - a.price)
    if(newPrice == "Low to High")
      Filtering(Ascending)
    else if(newPrice == "High to Low")
      Filtering(Descending)
    else
      Filtering(Movie_Data)
  };

  const handleRateChange = (event) => {
    const newRate = event.target.value;
    setSelectedRate(newRate);
    const Ascending = Array.from(Movie_Data).sort((a,b)=>a.rating - b.rating)
    const Descending = Array.from(Movie_Data).sort((a,b)=>b.rating - a.rating)
    if(newRate == "Low to High")
      Filtering(Ascending)
    else if(newRate == "High to Low")
      Filtering(Descending)
    else
      Filtering(Movie_Data)
  };

  return (
    <div className="SearchBar">
      <div className="w-[20%] h-[60%] flex items-center justify-around border rounded-lg p-2 ">
        <input
          placeholder="Search"
          className="w-[100%] bg-transparent text-center text-lg outline-none"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        ></input>
        <BiSearchAlt
          className="text-xl cursor-pointer"
          onClick={() => {
            Filtering(FilteredMovie);
          }}
        />
      </div>
      <select
        value={SelectedLanguage}
        className="Ops"
        onChange={handleLanguageChange}
      >
        {Languages.map((Lang) => {
          return (
            <option key={Lang.key} value={Lang.name} className="SearchOps">
              {Lang.name}
            </option>
          );
        })}
      </select>
      <select
        value={SelectedGenere}
        className="Ops"
        onChange={handleGenereChange}
      >
        {Generes.map((Gen) => {
          return (
            <option key={Gen.key} value={Gen.name} className="SearchOps">
              {Gen.name}
            </option>
          );
        })}
      </select>
      <select
        value={SelectedPrice}
        className="Ops"
        onChange={handlePriceChange}
      >
        {Price.map((Price) => {
          return (
            <option key={Price.key} value={Price.name} className="SearchOps">
              {Price.name}
            </option>
          );
        })}
      </select>
      <select value={SelectedRate} className="Ops" onChange={handleRateChange}>
        {Rate.map((Rate) => {
          return (
            <option key={Rate.key} value={Rate.name} className="SearchOps">
              {Rate.name}
            </option>
          );
        })}
      </select>
      {/* //   <div className="Ops">
    //     <div className="HeadOps" onClick={handleClick("Lang")}>      
    //       <input
    //         type="text"
    //         placeholder="Language"
    //         className="w-20 bg-transparent placeholder-white outline-none text-center"
    //       />        
    //     </div>
    //     <div className="SearchHid" id="Lang">
    //       {Languages.map((Lang) => {
    //         return <span key={Lang.key}>{Lang.name}</span>;
    //       })}
    //     </div>
    //   </div>
    //   <div className="Ops">
    //     <div className="HeadOps" onClick={handleClick("Gen")}>
    //       <input
    //         type="text"
    //         placeholder="Genere"
    //         className="w-20 bg-transparent placeholder-white outline-none text-center "
    //       />      
    //     </div>
    //     <div className="SearchHid" id="Gen">
    //       {Generes.map((Gen) => {
    //         return <span key={Gen.key}>{Gen.name}</span>;
    //       })}
    //     </div>
    //   </div>
    //   <div className="Ops">
    //     <div className="HeadOps" onClick={handleClick("Star")}>
    //       <input
    //         type="text"
    //         placeholder="Ratings"
    //         className="w-20 bg-transparent placeholder-white outline-none text-center "
    //       />        
    //     </div>
    //     <div className="SearchHid" id="Star">
    //       <span>Low to High</span>
    //       <span>High to Low</span>
    //     </div>
    //   </div>
    //   <div className="Ops">
    //     <div className="HeadOps" onClick={handleClick("Price")}>
    //       <input
    //         type="text"
    //         placeholder="Pricings"
    //         className="w-20 bg-transparent placeholder-white outline-none text-center "
    //       />          
    //     </div>
    //     <div className="SearchHid" id="Price">
    //       <span>Low to High</span>
    //       <span>High to Low</span>
    //     </div>
    //   </div> */}
    </div>
  );
}
