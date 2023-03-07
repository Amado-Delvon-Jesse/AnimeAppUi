import {useState, useEffect} from "react";
import AnimeCard from "../components/AnimeCard";
import AnimeService from "../services/AnimeService";


const Home = () => {

    const [animeListRanked, animeListUpcoming, setAnimeListRanked, setAnimeListUpcoming] = useState([]);

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

    return(
        <div className="App">
            <h1>Home</h1>
            <AnimeCard animeList={animeListRanked} />
            <AnimeCard animeList={animeListUpcoming}/>
        </div>

    )

}

export default Home;