import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Error from "./Components/Error";
import Settings from "./Components/Settings";
import CineBites from "./Components/CineBites";
// import Account from "./Components/Account";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path:"/",
        element:<CineBites/>,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contacts",
        element: <Contacts />,
      },
      {
        path: "/Settings",
        element: <Settings/>
      },
      // {
      //   path: "/Account",
      //   element: <Account/>
      // }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}></RouterProvider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
