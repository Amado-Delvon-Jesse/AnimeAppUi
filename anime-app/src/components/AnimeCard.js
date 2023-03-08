import React from "react";
import '../styles/AnimeCard.css';

function AnimeCard(props) {

    return ( 
        <div className="render-anime-card">
                <div className="card">
                  <div className="card-top">
                      <img src={props.image} />
                  </div>
                  <div className="card-bottom">
                    <p>{props.title}</p>
                  </div>
                </div>
        </div>
    );
}

export default AnimeCard;