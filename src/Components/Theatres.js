import React, { useEffect } from "react";
import TheatreCards from "./TheatreCards";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import MenuBar from "./MenuBar";

export default function Theatres() {
  const Theatre_Data = [
    {
      name: "National Centre Performing Arts",
      location: "Mumbai",
      seats: "2091",
    },
    {
      name: "LTG Auditorium ",
      location: "Delhi",
      seats: "327",
    },
    {
      name: "Akshara Theatre ",
      location: "New Delhi",
      seats: "500",
    },
    {
      name: "Artrightis Theatre Company ",
      location: "Banglore",
      seats: "427",
    },
    {
      name: "National Centre Performing Arts",
      location: "Mumbai",
      seats: "2091",
    },
    {
      name: "LTG Auditorium ",
      location: "Delhi",
      seats: "327",
    },
    {
      name: "Akshara Theatre ",
      location: "New Delhi",
      seats: "500",
    },
    {
      name: "Artrightis Theatre Company ",
      location: "Banglore",
      seats: "427",
    },
  ];

  const [searchText, setSearchText] = useOutletContext();
  const [filteredTheatre, setfileredTheatre] = useState(Theatre_Data);

  useEffect(() => {
    filterData();
  }, [searchText]);

  function filterData() {
    const Filter = Theatre_Data.filter((Theatre) => {
      return Theatre.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setfileredTheatre(Filter);
  }

  return (
    <>
      <MenuBar filterOptions={["Location", "Ratings", "Average Price"]} />
      <div className="TheatreBox">
        <div className="Theatre Headings">
          <span>Theatres</span>
          <span>Location</span>
          <span>No.of Seats</span>
        </div>
        <div className="Theatre Cards">
          {filteredTheatre.map((Theatre) => {
            return <TheatreCards TheatreDetails={Theatre} />;
          })}
        </div>
      </div>
    </>
  );
}
