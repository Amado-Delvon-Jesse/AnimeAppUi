import http from "../http-commons";


const getAll = () => {
    return http.get("/JikanAnimeFullCollection/animeTop5");
};

const getByMalId = id => {
    return http.get("/JikanAnimeFullCollection/")
};

const getSeasonalAnimePaginated = () => {
    return http.get("/JASNCollection/seasonNow/")
};


const AnimeService = {
    getAll,
    getByMalId,
    getSeasonalAnimePaginated
};

export default AnimeService;
