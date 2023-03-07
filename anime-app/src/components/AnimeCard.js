import React from "react";
import {Card} from "react-bootstrap";
import {useState, useEffect} from 'react';
import axios from 'axios';
import '../styles/AnimeCard.css';
import AnimeService from "../services/AnimeService";


const AnimeCard = () => {

    const [animeList, setAnimeList] = useState([]);

    useEffect(() => {
      retrieveTop5AnimeHome();
    }, []);
    
    
    const retrieveTop5AnimeHome = () => {
        AnimeService.getTop5()
        .then(response => {
          setAnimeList(response.data);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    };
        


    return ( 
        <div className="render-anime-card">
            {animeList.map((item) => (
                <div className="card" key={item}>
                  <div className="card-top">
                      <img src={item.image} />
                  </div>
                  <div className="card-bottom">
                    <p>{item.title}</p>
                  </div>
                </div>
            ))}    
        </div>
    );

}

export default AnimeCard;