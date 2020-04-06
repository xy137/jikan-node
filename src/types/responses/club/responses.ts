import { Relation, Response } from "../../shared";

export interface Club extends Response {
  mal_id: number;
  url: string;
  image_url: string;
  title: string;
  members_count: number;
  pictures_count: number;
  category: string; // "Anime", assuming "Manga" is the other one?
  created: string; // ISO Datestring "2007-03-29T00:00:00+00:00"
  type: string; // "public", assuming "private" is the other one?
  staff: Relation[];
  anime_relations: Relation[];
  manga_relations: Relation[];
  character_relations: Relation[];
}

export interface ClubMembers extends Response {
  members: Array<{
    username: string;
    url: string;
    image_url: string;
  }>;
}
