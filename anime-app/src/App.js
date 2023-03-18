import React from 'react';
import './styles/App.css';
import NavBar from './components/NavBar';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


//pages
import Home from './pages/Home'
import TopAnime from './pages/TopAnime';
import TopManga from './pages/TopManga';
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
        path: "/TopAnime",
        element: <TopAnime />
      },
      {
        path: "/TopManga",
        element: <TopManga />
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
