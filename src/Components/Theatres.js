import React, { useEffect, useState } from "react";
import TheatreCards from "./T-Cards";
import TheatreFills from "./T-Fills";
import TheatrePics from "./T-Pics";
import { Theatre_Data } from "../Common/Theatre_Data";

export default function Theatres() {
  const [Bg, setBg] = useState(1);

  // Here the searchText changes even on firstLoad/Reload of a page.
  // So,the useEffect calls the filter function and sets filteredTheatres' length to 8.
  // And so, the ternary operator in "T-Pics" cannot change the image on clicking the respective theatre

  const [filteredTheatres,setFilteredTheatre] = useState(Theatre_Data);

  return (
    <>
      <div className="TheatreBox">
        <div className="flex flex-col w-[79%] h-[100%]">
          <TheatrePics selectedBg={Bg} SearchedTheatre={filteredTheatres} />
          <TheatreCards clickBg={setBg} SearchedTheatre={filteredTheatres} />
        </div>
        <TheatreFills Searching = {setFilteredTheatre} />
      </div>
    </>
  );
}
