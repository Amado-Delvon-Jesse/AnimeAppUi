import {useState, useEffect} from "react";
import AnimeCard from "../components/AnimeCard";
import AnimeService from "../services/AnimeService";


const Home = () => {

    const [animeList, setAnimeList] = useState([]);

    useEffect(() => {
      retrieveTop5AnimeHome();
    }, []);
    
    
    const retrieveTop5AnimeHome = () => {
        AnimeService.getTop5()
        .then(response => {
          setAnimeList(response.data);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    };


    return(
        <div className="App">
            <h1>Home</h1>
            <AnimeCard animeList={animeList} />
        </div>

    )

}

export default Home;