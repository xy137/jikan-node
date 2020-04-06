import { Relation, Response, AnimeShowDetails, MangaShowDetails } from "../../shared";

export interface GenreAnimeResponse extends Response {
  mal_url: Relation;
  item_count: number;
  anime: AnimeShowDetails[];
}

export interface GenreMangaResponse extends Response {
  mal_url: Relation;
  item_count: number;
  manga: MangaShowDetails[];
}
