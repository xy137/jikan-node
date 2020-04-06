import { Response, MalInfo, Relation } from "../../shared";

export interface Animelist extends Response {
  anime: Array<
    MalInfo & {
      title: string;
      video_url: string;
      image_url: string;
      type: string;
      watching_status: number;
      score: number;
      watched_episodes: number; // TODO null check on this and total
      total_episodes: number;
      airing_status: number;
      season_name: string | null;
      season_year: string | null;
      has_episode_video: boolean;
      has_promo_video: boolean;
      has_video: boolean;
      is_rewatching: boolean;
      tags: string | null; // string array? TODO
      rating: string;
      start_date: string | null;
      end_date: string | null;
      watch_start_date: string | null;
      watch_end_date: string | null;
      days: number | null;
      storage: string | null; // Don't know what this is
      priority: string;
      added_to_list: boolean;
      studios: string[];
      licensors: string[];
    }
  >;
}

export interface Mangalist extends Response {
  manga: Array<
    MalInfo & {
      title: string;
      type: string;
      reading_status: number;
      score: number;
      read_chapters: number;
      read_volumes: number;
      total_chapters: number;
      total_volumes: number;
      publishing_status: number;
      is_rereading: boolean;
      tags: string | null;
      start_date: string | null;
      end_date: string | null;
      read_start_date: string | null;
      read_end_date: string | null;
      days: number | null;
      retail: string | null; // Don't know what this is
      priority: string;
      added_to_list: boolean;
      magazines: string[];
    }
  >;
}

export interface Friends extends Response {
  friends: Array<{
    url: string;
    username: string;
    image_url: string;
    last_online: string;
    friends_since: string | null;
  }>;
}

export interface Profile extends Response {
  user_id: number;
  username: string;
  url: string;
  image_url: string;
  last_online: string;
  gender: string | null;
  birthday: string | null;
  location: string | null;
  joined: string;
  anime_status: {
    days_watched: number;
    mean_score: number;
    watching: number;
    completed: number;
    on_hold: number;
    dropped: number;
    plan_to_watch: number;
    total_entries: number;
    rewatched: number;
    episodes_watched: number;
  };
  manga_status: {
    days_read: number;
    mean_score: number;
    reading: number;
    completed: number;
    on_hold: number;
    dropped: number;
    plan_to_read: number;
    total_entries: number;
    reread: number;
    chapters_read: number;
    volumes_read: number;
  };
  favorites: {
    anime: Relation[];
    manga: Relation[];
    characters: Relation[];
    people: Relation[];
  };
  about: string | null;
}

export interface History extends Response {
  history: Array<{
    meta: Relation;
    increment: number;
    date: string;
  }>;
}
