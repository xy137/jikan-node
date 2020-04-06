import { Genres, ExtraAnimeGenres } from "../../utils/genres";
import { Sort } from "../shared";

export const AllGenres = { ...Genres, ...ExtraAnimeGenres };

type AnimeShowStatus = "airing" | "completed" | "upcoming";
type MangaShowStatus = "publishing" | "completed" | "upcoming";

type AnimeTypes = "tv" | "ova" | "movie" | "special" | "ona" | "music";
type MangaTypes = "manga" | "novel" | "oneshot" | "doujin" | "manhwa" | "manhua";

interface SearchParams {
  page: number;
  score: number;
  rated: "g" | "pg" | "pg13" | "r17" | "r" | "rx";
  start_date: string | null; // "yyyy-mm-dd"
  end_date: string | null; // "yyyy-mm-dd"
  genre_exclude: 0 | 1; // maybe set this to boolean and cast it when making request?
  limit: number;
  producer: number;
  magazine: number;
  letter: string;
  sort: Sort;
  genre: keyof typeof AllGenres | number;
}

export interface AnimeSearchParams extends SearchParams {
  type: AnimeTypes;
  status: AnimeShowStatus;
}

export interface MangaSearchParams extends SearchParams {
  type: MangaTypes;
  status: MangaShowStatus;
}
