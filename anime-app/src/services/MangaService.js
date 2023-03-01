import http from "../http-commons"

const getAll = () => {
    return http.get("/mangaCollection/manga");
};

const MangaService = {
    getAll
};

export default MangaService;