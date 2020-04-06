import { Response, MalInfo } from "../../shared";

export interface Anime extends Response, MalInfo {
  trailer_url: string | null;
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: {
    // TODO check if null possible
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
    string: string; // "Sep 30, 2004 to Sep 29, 2005"
  };
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
}

export interface CharactersStaff extends Response {
  characters: Array<
    MalInfo & {
      name: string;
      role: string;
      voice_actors: Array<{
        mal_id: number;
        url: string;
        image_url: string;
        language: string;
      }>;
    }
  >;
  staff: Array<
    MalInfo & {
      name: string;
      positions: string[];
    }
  >;
}

export interface Episodes extends Response {
  episodes_last_page: number;
  episodes: Array<{
    episode_id: number;
    title: string;
    title_japanese: string;
    title_romanji: string;
    aired: string; // ISO Datestring
    filler: boolean;
    recap: boolean;
    video_url: string;
    forum_url: string;
  }>;
}

export interface Forum extends Response {
  topics: Array<{
    topic_id: number;
    url: string;
    title: string;
    date_posted: string; // ISO Datestring
    author_name: string;
    author_url: string;
    replies: number;
    last_post: {
      url: string;
      author_name: string;
      author_url: string;
      date_posted: string;
    };
  }>;
}

export interface MoreInfo extends Response {
  moreinfo: string | null;
}

export interface News extends Response {
  articles: Array<{
    url: string;
    title: string;
    date: string; // ISO Datestring
    author_name: string;
    author_url: string;
    forum_url: string;
    image_url: string | null;
    comments: number;
    intro: string;
  }>;
}

export interface Pictures extends Response {
  pictures: Array<{
    large: string;
    small: string;
  }>;
}

export interface Recommendations extends Response {
  recommendations: Array<
    MalInfo & {
      recommendation_url: string;
      title: string;
      recommendation_count: number;
    }
  >;
}

export interface Reviews extends Response {
  reviews: Array<{
    mal_id: number;
    url: string;
    type: null | string;
    helful_count: number;
    date: string; // ISO Datestring;
    reviewer: {
      url: string;
      image_url: string;
      username: string;
      episodes_seen: number;
      scores: {
        overall: number;
        story: number;
        animation: number;
        sound: number;
        character: number;
        enjoyment: number;
      };
    };
    content: string; // potential null?
  }>;
}

interface Score {
  votes: number;
  percentage: number;
}

export interface Stats extends Response {
  watching: number;
  completed: number;
  on_hold: number;
  dropped: number;
  plan_to_watch: number;
  total: number;
  scores: {
    1: Score;
    2: Score;
    3: Score;
    4: Score;
    5: Score;
    6: Score;
    7: Score;
    8: Score;
    9: Score;
    10: Score;
  };
}

export interface UserUpdates extends Response {
  users: Array<{
    username: string;
    url: string;
    image_url: string | null;
    score: number | null;
    status: string;
    episodes_seen: number | null;
    episodes_total: number | null;
    date: string; // ISO Datestring;
  }>;
}

export interface Videos extends Response {
  promo: Array<{
    title: string;
    image_url: string;
    video_url: string;
  }>;
  episodes: Array<{
    title: string;
    episode: string; // "Episode 25"
    url: string;
    image_url: string | null;
  }>;
}
