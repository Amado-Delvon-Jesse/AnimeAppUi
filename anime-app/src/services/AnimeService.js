import http from "../http-commons";


const getAll = () => {
    return http.get("/JikanAnimeFullCollection/animeTop5");
};

const getByMalId = id => {
    return http.get("/JikanAnimeFullCollection/${id}")
};

// const get = id => {
//     return http.get(`/animeCollection/anime/${id}`);
// };

// const getTop5 = () => {
//     return http.get("/animeCollection/anime/rankingTop5");
// };

// const getUpcomingAnime = () => {
//     return http.get("/animeCollection/anime/upcomingAnime");
// }

const AnimeService = {
    getAll,
    getByMalId
};

export default AnimeService;
