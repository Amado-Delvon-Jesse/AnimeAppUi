import React from 'react';
import './styles/App.css';
import NavBar from './components/NavBar';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


//pages
import Home from './pages/Home'
import Top100Anime from './pages/Top100Anime';
import Top50Manga from './pages/Top50Manga';

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
        element: <Top50Manga />
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
