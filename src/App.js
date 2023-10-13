// import logo from './logo.svg';
import "./App.css";
import NavBar from "./Components/NavBar";
import MenuBar from "./Components/MenuBar";
import Footer from "./Components/Footer";
import {Outlet} from 'react-router-dom'
import { useState } from "react";

function App() {

  const  [searchText, setSearchText] = useState("");
    // console.log(searchText);

  return (
    <>
      <NavBar searchQuery={setSearchText} />
      <div className="AppBox">
        <Outlet context={[searchText, setSearchText]}/>
      </div>
      <Footer />
    </>
  );
}

export default App;
