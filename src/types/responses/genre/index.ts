import { GenreAnimeResponse, GenreMangaResponse } from "./responses";

type GenreResponse = {
  anime: GenreAnimeResponse;
  manga: GenreMangaResponse;
};

export default GenreResponse;
