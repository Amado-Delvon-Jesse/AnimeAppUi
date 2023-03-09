import http from "../http-commons";


const getAll = () => {
    return http.get("/animeCollection/anime");
};

const get = id => {
    return http.get(`/animeCollection/anime/${id}`);
};

const getTop5 = () => {
    return http.get("/animeCollection/anime/rankingTop5");
};

const getUpcomingAnime = () => {
    return http.get("/animeCollection/anime/upcomingAnime");
}

const AnimeService = {
    getAll,
    get,
    getTop5,
    getUpcomingAnime
};

export default AnimeService;
