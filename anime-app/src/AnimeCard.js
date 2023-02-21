import React from "react";
import {Card} from "react-bootstrap";
import {useState, useEffect} from 'react';
import axios from 'axios';



  

const AnimeCard = () => {

    const [animeList, setAnimeList] = useState([]);
    const {XRapidAPIHost, XRapidAPIKey} = require('./keys')


    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://anime-db.p.rapidapi.com/anime',
            params: {page: '1', size: '5', sortBy: 'ranking', sortOrder: 'asc'},
            headers: {
              'X-RapidAPI-Key': XRapidAPIKey,
              'X-RapidAPI-Host': XRapidAPIHost
            }
          };

        axios.request(options).then(function (response) {
            console.log(response.data.data);
            setAnimeList(response.data.data);
  
        }).catch(function (error) {
            console.error(error);
        });
  
    }, []);
      
 
    const renderCard = (anime, index) => {

        return(
            <Card style={{ width: '18rem' }} key={index}>
            <Card.Img variant="top" src={anime.image} />
            <Card.Body>
                <Card.Title>{anime.title}</Card.Title>
                <Card.Text>
                {anime.synopsis}
                </Card.Text>
            </Card.Body>
            </Card>
        )

    }

    return ( 
        <div className="App">
            {animeList.map(renderCard)}
        </div>
    );

}

export default AnimeCard;