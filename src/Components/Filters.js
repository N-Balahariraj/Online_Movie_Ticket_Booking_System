import React from "react";
import { FaLanguage } from "react-icons/fa6";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { TiStarOutline } from "react-icons/ti";
import { TbMovie } from "react-icons/tb";
import { RiMovie2Line } from "react-icons/ri";

export default function Filters() {
  return (
    <>
      <div className="Filters">
        <div className="FilterOptions">
          <FaLanguage className="FilterIcons"></FaLanguage>
          <span className="pl-2.5">Language</span>
        </div>
        <div className="FilterOptions">
          <AiOutlineVideoCamera className="FilterIcons"></AiOutlineVideoCamera>
          <span className="pl-2.5">Genere</span>
        </div>
        <div className="FilterOptions">
          <TiStarOutline className="FilterIcons"></TiStarOutline>
          <span className="pl-2.5">Star Ratings</span>
        </div>
        <div className="FilterOptions">
          <TbMovie className="FilterIcons"></TbMovie>
          <span className="pl-2.5">Average Price</span>
        </div>
        <div className="bg-[#273158] w-[80%] h-0.5 mt-3 ml-5"></div>
      </div>
    </>
  );
}
