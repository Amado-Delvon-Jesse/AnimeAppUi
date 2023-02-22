import React from 'react';
import './App.css';
import NavBar from './NavBar';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


//pages
import Home from './pages/Home'
import Top100Anime from './pages/Top100Anime';
import Top100Manga from './pages/Top100Manga';

const router = createBrowserRouter([
  {
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/Top100Anime",
        element: <Top100Anime />
      },
      {
        path: "/Top100Manga",
        element: <Top100Manga />
      }

    ]
  }
])

function App() {

  return (
    <div className="App">
        <RouterProvider router={router}/>
        
    </div>
  );
}

export default App;
