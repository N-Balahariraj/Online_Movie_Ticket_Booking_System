import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { Link } from 'react-router-dom';
import About from './Components/About'
import Contacts from './Components/Contacts'
import Movies from './Components/Movies'
import Theatres from './Components/Theatres'
import Error from './Components/Error'

const AppRouter = createBrowserRouter([{
  path:"/",
  element:<App/>,
  errorElement:<Error/>,
  children:[
      {
        path:"/",
        element:<Movies/>
      },
      {
        path:"/Theatres",
        element:<Theatres/>
      },
      {
        path:"/About",
        element:<About/>
      },
      {
        path:"/Contacts",
        element:<Contacts/>
      },
  ]

}]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter}></RouterProvider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
