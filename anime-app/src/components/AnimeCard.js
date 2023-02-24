import React from "react";
import {Card} from "react-bootstrap";
import {useState, useEffect} from 'react';
import axios from 'axios';
import '../styles/AnimeCard.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

  

const AnimeCard = () => {

    const [animeList, setAnimeList] = useState([]);
    const {XRapidAPIHost, XRapidAPIKey} = require('../keys')


    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://anime-db.p.rapidapi.com/anime',
            params: {page: '1', size: '10', sortBy: 'ranking', sortOrder: 'asc'},
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
      
        
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };

 
    return ( 
        <div className="App">
            <Slider {...settings}>
            {animeList.map((item) => (
            <Card key={item}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body className="card-body">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                {item.genres.join(" ")} 
                </Card.Text>
                <Card.Text>
                {"rank: " + item.ranking}
                </Card.Text>
            </Card.Body>
            </Card>
            ))}    
            </Slider>
        </div>
    );

}

export default AnimeCard;