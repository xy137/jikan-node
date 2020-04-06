import { Response, MalInfo, Relation } from "../../shared";

type Search = Response & { last_page: number };

export interface AnimeSearch extends Search {
  results: Array<
    MalInfo & {
      title: string;
      airing: boolean | null;
      synopsis: string;
      type: string;
      episodes: number | null;
      score: number;
      start_date: string | null;
      end_date: string | null;
      members: number;
      rated: string;
    }
  >;
}

export interface CharacterSearch extends Search {
  results: Array<
    MalInfo & {
      name: string;
      alternative_names: string[];
      anime: Relation[];
      manga: Relation[];
    }
  >;
}

export interface MangaSearch extends Search {
  results: Array<
    MalInfo & {
      title: string;
      publishing: boolean;
      synopsis: string;
      type: string;
      chapters: number | null;
      volumes: number | null;
      score: number;
      start_date: string | null;
      end_date: string | null;
      members: number;
    }
  >;
}

export interface PersonSearch extends Search {
  results: Array<
    MalInfo & {
      name: string;
      alternative_names: string[];
    }
  >;
}
