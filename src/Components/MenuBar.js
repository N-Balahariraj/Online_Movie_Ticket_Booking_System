import React from "react";
import MenuCards from "./MenuCards";

export default function MenuBar(props) {
  return (
    <>
      <div className="MenuBar">
        {props.filterOptions.map(option => {
          return <span>{option}</span>;
        })
      }
      </div>
      <MenuCards />
    </>
  );
}
