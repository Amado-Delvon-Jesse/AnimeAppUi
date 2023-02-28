import http from "../http-commons";


const getAll = () => {
    return http.get("/anime");
};

const get = id => {
    return http.get(`/anime/${id}`);
};

const getTop10 = () => {
    return http.get("/anime/rankingTop10")
};

const AnimeService = {
    getAll,
    get,
    getTop10
};

export default AnimeService;
