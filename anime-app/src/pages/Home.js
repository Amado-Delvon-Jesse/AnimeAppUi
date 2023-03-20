import {useState, useEffect} from "react";
import AnimeCard from "../components/AnimeCard";
import AnimeService from "../services/AnimeService";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


const Home = () => {

    const [animeListRanked, setAnimeListRanked] = useState([]);
    const [animeListSeasonal, setAnimeListSeasonal] = useState([]);

    useEffect(() => {
      retrieveAnimeHome();
      retrieveSeasonalAnimeHome();
    }, []);
    
    
    const retrieveAnimeHome = () => {
        AnimeService.getAll()
        .then(response => {
          setAnimeListRanked(response.data);
          console.log(response.data.data);
        })
        .catch(e => {
          console.log(e);
        });
    };

    function createAnimeCardRanked(animeListRanked) {
        return (
            <AnimeCard
            key={animeListRanked.data.mal_id}
            image={animeListRanked.data.images.jpg.image_url}
            title={animeListRanked.data.title}
            />
        );
    }

    const retrieveSeasonalAnimeHome = () => {
        AnimeService.getSeasonalAnimePaginated()
        .then(response => {
            setAnimeListSeasonal(response.data.data);
            console.log(response.data.data);
        })
        .catch(e => {
            console.log(e);
        });
    };

    const RenderCard = (card, index) => {
        return (
            <Card key={index}>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
                </Card.Body>
            </Card>
        );
    }

    return(
        <div className="App">
            <h1>Home</h1>
            <div className="card-container">{animeListRanked.map(createAnimeCardRanked)}</div>
            <div>{animeListSeasonal.map(RenderCard)}</div>
        </div>
    )
    }

export default Home;