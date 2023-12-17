import React, { useState,useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { TbCurrentLocation } from "react-icons/tb";
import { Theatre_Data } from "../Common/Theatre_Data";

export default function TheatreFills({ Searching }) {
  const [SearchInput, setSearchInput] = useState("");
  const [RateOrder,setRateOrder] = useState("reset");
  const RateBtn = document.getElementById("RateBtn");
  const [PriceOrder, setPriceOrder] = useState("reset");
  const PriceBtn = document.getElementById("PriceBtn");
  const DescendingRate = Array.from(Theatre_Data).sort((a,b)=>b.rate - a.rate);
  const AscendingPrice = Array.from(Theatre_Data).sort((a,b)=>a.price - b.price);

  function filterTheatre() {
    const Filter = Theatre_Data.filter((Theatre) => {
      return Theatre.name.toLowerCase().includes(SearchInput.toLowerCase());
    });
    Searching(Filter);
  }

  const sortRate = ()=>{
    RateBtn.classList.toggle("BtnActive");
    if(RateOrder == "reset"){
      setRateOrder("set");
      Searching(DescendingRate);
    }
    else{
      setRateOrder("reset");
      Searching(Theatre_Data);
    }
  }

  const sortPrice = ()=>{
    PriceBtn.classList.toggle("BtnActive");
    if(PriceOrder == "reset"){
      setPriceOrder("set");
      Searching(AscendingPrice);
    }
    else{
      setPriceOrder("reset");
      Searching(Theatre_Data);
    }
  }

  return (
    <div className="T-Fills">
      <div className="Search">
        <BiSearchAlt
          className=" h-[100%] w-[15%] pr-2 cursor-pointer"
          onClick={() => {
            filterTheatre();
          }}
        />
        <input
          type="text"
          placeholder="Search"
          className="h-[100%] w-[70%] outline-none bg-transparent"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <TbCurrentLocation className=" h-[100%] w-[15%] pl-2 border-l border-l-white cursor-pointer" />
      </div>
      <div className="Sort">
        {/* Sort By */}
        <span
          className=" h-8 border border-white rounded text-center cursor-pointer hover:bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-700 hover:brightness-90 "
          id ="RateBtn"
          onClick={sortRate}
        >
          Top Rated
        </span>
        <span
          className=" h-8 border border-white rounded text-center cursor-pointer hover:bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-700 hover:brightness-90"
          id = "PriceBtn"
          onClick={sortPrice}
        >
          In Budget
        </span>
      </div>
      <div className="Tickets">
        <img
          src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jigarthanda-double-x-et00359702-1699446701.jpg"
          alt="Movie"
          className=" h-[60%]"
        />
        <div className="Details h-[40%] flex flex-col justify-between">
          <span>Theatre</span>
          <span>Show Date and Time</span>
          <span>Snack</span>
          <span>No.of Tickets</span>
          <button className=" rounded h-8 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-700 hover:brightness-90">
            Book for ₹ 400
          </button>
        </div>
      </div>
    </div>
  );
}
