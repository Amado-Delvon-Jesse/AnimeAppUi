import React from "react";
import '../styles/AnimeCard.css';

function AnimeCard(props) {

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