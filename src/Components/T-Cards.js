import React,{useEffect, useState} from "react";
import { Theatre_Data } from "../Common/Theatre_Data";
import { IoStarSharp } from "react-icons/io5";

export default function TheatreCards({ clickBg,SearchedTheatre }) {


  return (
    <div className="T-Card-Box">
      {SearchedTheatre.map((T) => {
        return (
          <div className="T-Cards" key={T.id} onClick={()=>{clickBg(T.id)}}>
            <div className="w-[100%] flex justify-between items-center"> 
                <span className=" text-lg font-semibold border-b-2 ">{T.name}</span>
                <span className="flex justify-end items-center"><IoStarSharp className="mr-1"/>{T.rate}</span>
            </div>
            <span>{T.location}</span>
          </div>
        );
      })}
    </div>
  );
}
