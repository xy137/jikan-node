import { Sort } from "../shared";

type AnimeAiringStatus = "airing" | "finished" | "to_be_aired";

type MangaAiringStatus = "publishing" | "finished" | "to_be_published";

type AnimeOrderBy =
  | "title"
  | "finish_date"
  | "start_date"
  | "score"
  | "last_updated"
  | "type"
  | "rated"
  | "rewatch"
  | "priority"
  | "progress"
  | "storage"
  | "air_start"
  | "air_end"
  | "status";

type MangaOrderBy =
  | "title"
  | "finish_date"
  | "start_date"
  | "score"
  | "last_updated"
  | "type"
  | "priority"
  | "progress"
  | "volumes_read"
  | "publish_start"
  | "publish_end"
  | "status";

interface UserAnimeParams {
  aired_from: string; // yyyy-mm-dd
  aired_to: string; // yyyy-mm-dd
  producer: number;
  year: number;
  season: "summer" | "spring" | "fall" | "winter";
  airing_status: AnimeAiringStatus;
  order_by: AnimeOrderBy;
  order_by2: AnimeOrderBy;
}

interface UserMangaParams {
  published_from: string; // yyyy-mm-dd
  published_to: string; // yyyy-mm-dd
  magazine: number;
  publishing_status: MangaAiringStatus;
  order_by: MangaOrderBy;
  order_by2: MangaOrderBy;
}

export interface UserParams {
  params?: {
    search: string;
    sort?: Sort;
    page?: number;
    advanced?: Partial<UserMangaParams | UserAnimeParams>;
  };
}
