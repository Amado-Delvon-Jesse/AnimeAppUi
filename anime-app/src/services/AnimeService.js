import http from "../http-commons";


const getAll = () => {
    return http.get("/animeCollection/anime");
};

const get = id => {
    return http.get(`/animeCollection/anime/${id}`);
};

const getTop10 = () => {
    return http.get("/animeCollection/anime/rankingTop10")
};

const AnimeService = {
    getAll,
    get,
    getTop10
};

export default AnimeService;
