import React from "react";
import {Card} from "react-bootstrap";


const AnimeCard = () => {

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://anime-db.p.rapidapi.com/anime',
  params: {page: '1', size: '5', sortBy: 'ranking', sortOrder: 'asc'},
  headers: {
    'X-RapidAPI-Key': '49cba4f092msh072998c8f0e2319p1c72a2jsn2065aa171335',
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});



    // const cardInfo = [
    //     {image: "", title: "", text: ""},
    //     {image: "", title: "", text: ""},
    //     {image: "", title: "", text: ""},
    //     {image: "", title: "", text: ""}
    // ]

    const renderCard = (card, index) => {

        return(
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
            </Card.Body>
            </Card>
        )

    }

    return ( 
        <div className="App">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

}

export default AnimeCard;