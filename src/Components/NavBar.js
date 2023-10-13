import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar({searchQuery}) {

  const [searchText,setSearchText] = useState("");
  
  const HandleInput = (e) =>{
    e.preventDefault();
    console.log(searchText);
    searchQuery(searchText);
  }
  // console.log(searchText);
  
  return (
    <nav className="NavBar">
      <h3>BookYourShow</h3>
      <ul>
        <li><Link to="/">Movies</Link ></li>
        <li><Link to="/Theatres">Theatres</Link ></li>
        <li><Link to="/About">About</Link ></li>
        <li><Link to="/Contacts">Contact</Link ></li>
      </ul>
      <form>
          <input type="text" onChange={(e) => setSearchText(e.target.value)}  />
          <button onClick={HandleInput}> Search </button> 
      </form>
    </nav>
  );

}
