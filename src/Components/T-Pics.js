import React from "react";
import { Theatre_Data } from "../Common/Theatre_Data";

export default function TheatrePics({ selectedBg, SearchedTheatre }) {


  return (
    <div className="T-Pics">
      <img
        src={
          SearchedTheatre.length
            ? SearchedTheatre[0].bg
            : Theatre_Data[selectedBg - 1].bg
        }
        alt="theatre image"
        className=" w-[100%] h-[100%] "
      />
    </div>
  );
}
