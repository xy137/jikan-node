export interface Response {
  request_hash: string;
  request_cached: boolean;
  request_cache_expiry: number;
}

export interface MalInfo {
  mal_id: number;
  url: string;
  image_url: string | null;
}

export interface Relation {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface ShowDetails extends MalInfo {
  title: string;
  synopsis: string;
  type: string;
  members: number;
  genres: Relation[];
  score: number | null;
}

export interface MangaShowDetails extends ShowDetails {
  publishing_start: string | null; // ISO datestring
  volumes: number;
  serialization: string[];
  authors: Relation[];
}

// Used in findSeason
export interface AnimeShowDetails extends ShowDetails {
  airing_start: string | null; // ISO datestring
  episodes: number;
  producers: Relation[];
  licensors: string[];
  r18: boolean;
  kids: boolean;
  continuing?: boolean | null;
}

export type Sort = "asc" | "ascending" | "desc" | "descending";
