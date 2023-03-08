import {useState, useEffect} from "react";
import AnimeCard from "../components/AnimeCard";
import AnimeService from "../services/AnimeService";


const Home = () => {

    const [animeListRanked, setAnimeListRanked] = useState([]);
    const [animeListUpcoming, setAnimeListUpcoming] = useState([]);

    useEffect(() => {
      retrieveTop5AnimeHome();
      retrieveUpcomingAnimeHome();
    }, []);
    
    
    const retrieveTop5AnimeHome = () => {
        AnimeService.getTop5()
        .then(response => {
          setAnimeListRanked(response.data);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });

    };

    function createAnimeCardRanked(animeListRanked) {
        return (
            <AnimeCard
            key={animeListRanked.id}
            image={animeListRanked.image}
            title={animeListRanked.title}
            />
        );
    }

    const retrieveUpcomingAnimeHome = () => {
        AnimeService.getUpcomingAnime()
        .then(response => {
            setAnimeListUpcoming(response.data);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });


    };

    function createAnimeCardUpcoming(animeListUpcoming) {
        return (
            <AnimeCard
            key={animeListUpcoming.id}
            image={animeListUpcoming.image}
            title={animeListUpcoming.title}
            />
        );
    }

    return(
        <div className="App">
            <h1>Home</h1>
            <div className="card-container">{animeListRanked.map(createAnimeCardRanked)}</div>
            <div className="card-container">{animeListUpcoming.map(createAnimeCardUpcoming)}</div>
        </div>

    )

}

export default Home;