import { Response, MalInfo, Relation } from "../../shared";

// Duplicate of "MangaTypes" in params/search.ts

type GenericSubTypes = "bypopularity" | "favorite";

export interface SubTypes {
  anime: "airing" | "upcoming" | "tv" | "movie" | "ova" | "special" | GenericSubTypes;
  manga: "manga" | "novel" | "oneshot" | "doujin" | "manhwa" | "manhua" | GenericSubTypes;
  characters: undefined;
  people: undefined;
}

interface GenericTop extends MalInfo {
  rank: number;
  title: string;
  type: string;
  start_date: string | null; // "Apr 2009"
  end_date: string | null;
  members: number;
  score: number;
}

export interface AnimeTop extends Response {
  top: Array<GenericTop & { episodes: number | null }>;
}

export interface MangaTop extends Response {
  top: Array<GenericTop & { volumes: number | null }>;
}

export interface CharacterTop extends Response {
  top: Array<
    MalInfo & {
      rank: number;
      title: string;
      name_kanji: string;
      animeography: Relation[];
      mangaography: Relation[];
      favorites: number;
    }
  >;
}

export interface PeopleTop extends Response {
  top: Array<
    MalInfo & {
      rank: number;
      title: string;
      name_kanji: string;
      favorites: number;
      birthday: string;
    }
  >;
}
