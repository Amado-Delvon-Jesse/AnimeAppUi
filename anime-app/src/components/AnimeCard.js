import React from "react";
import '../styles/AnimeCard.css';

function AnimeCard(props) {

    return ( 
        <div className="render-anime-card">
                <div className="card">
                  <div className="card-top">
                      <img src={props.image} alt="Anime Cover"/>
                  </div>
                  <div className="card-bottom">
                    <a href="/props.key">{props.title}</a>
                  </div>
                </div>
        </div>
    );
}

export default AnimeCard;