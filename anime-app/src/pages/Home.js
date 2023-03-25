import {useState, useEffect} from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import AnimeCard from "../components/AnimeCard";
import AnimeService from "../services/AnimeService";
import '../styles/Home.css';


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
            <div key={index}>
                    <Col>
                    <div className="card-top-title">
                <h4 className="card-title">{card.title}</h4>
                <div className="main-card">  
                <div className="card-left">
                <img alt="" src={card.images.jpg.image_url}/>
                </div>
                <div className="card-right">
                <div className="card-details">
                <p className="synopsis">{card.synopsis}</p>
                <div className="card-info">
                <p>{card.type}</p>
                <p>{card.year}</p>
                <div className="studios-container">
                    {card.studios.map((studio, index) => {
                        return (
                            <div key={index}>
                                <p>{studio.name}</p>
                            </div>
                        )
                    })

                    }
                </div>
                </div>
                <div className="genre-container">
                {card.genres.map((genre, index) => {
                    return (
                        <div key={index}>
                        <p className="genre-item">{genre.name}</p>
                        </div>
                    )
                })}
                </div>
                </div>
                </div>
                </div>
                </div>
                    </Col>
            </div>
        );
    }

    return(
        <div className="App">
            <h1>Home</h1>
            <div className="card-container">{animeListRanked.map(createAnimeCardRanked)}</div>
            <Container>
            <Row lg={3}>
            <div>{animeListSeasonal.map(RenderCard)}</div>
            </Row>
            </Container>

        </div>
    )
    }

export default Home;