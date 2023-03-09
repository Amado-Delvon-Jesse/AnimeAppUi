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
import SignUp from './pages/SignUp';
import Login from './pages/Login'

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
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/login",
        element: <Login />
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
