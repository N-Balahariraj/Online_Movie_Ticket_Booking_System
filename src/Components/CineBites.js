import React, { useState } from "react";
import Header from "./Header";
import Shows from "./Shows";
import Theatres from "./Theatres";
import Movies from "./Movies";

export default function (props) {
  const [check, setCheck] = useState(false);

  // if(props)
  //     setCheck = 1;

  return (
    <div>
      <Header checked={setCheck} check={check} />
      {check ? <Theatres checked={setCheck} /> : <Shows checked={setCheck} />}
    </div>
  );
}
