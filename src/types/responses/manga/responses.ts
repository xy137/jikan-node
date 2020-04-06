import { Response, MalInfo, Relation } from "../../shared";

export interface Manga extends Response, MalInfo {
  trailer_url: string | null;
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  volumes: number | null;
  chapters: number | null;
  publishing: boolean;
  published: {
    from: string; // ISO Datestring
    to: string;
    prop: {
      from: {
        day: number;
        month: number;
        year: number;
      };
      to: {
        day: number;
        month: number;
        year: number;
      };
    };
    string: string;
  };
  rank: number;
  score: number;
  scored_by: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string | null;
  background: string;
  related: null | {
    [key: string]: Relation[];
  };
  genres: Relation[];
  authors: Relation[];
  serializations: Relation[];
}

export interface Characters extends Response {
  characters: MalInfo &
    Array<{
      name: string;
      role: string;
    }>;
}

// News is shared

// Pictures is shared

// Stats is shared

// Forum is shared

// MoreInfo is shared

export interface Reviews extends Response {
  reviews: Array<{
    mal_id: number;
    url: string;
    type: string | null;
    helful_count: number;
    date: string; // ISO Datestring;
    reviewer: {
      url: string;
      image_url: string;
      username: string;
      chapters_read: number;
      scores: {
        overall: number;
        story: number;
        art: number;
        character: number;
        enjoyment: number;
      };
    };
    content: string; // potential null?
  }>;
}

// Recommendations is shared

export interface UserUpdates extends Response {
  users: Array<{
    username: string;
    url: string;
    image_url: string | null;
    score: number | null;
    status: string;
    volumes_read: number | null;
    volumes_total: number | null;
    chapters_read: number | null;
    chapters_total: number | null;
    date: string;
  }>;
}
