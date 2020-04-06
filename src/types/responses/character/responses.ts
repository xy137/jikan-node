import { MalInfo, Response } from "../../shared";

export interface Character extends MalInfo, Response {
  name: string;
  name_kanji: string;
  nicknames: string[];
  about: string | null;
  member_favorites: number;
  animeography: Array<
    MalInfo & {
      name: string;
      role: string;
    }
  >;
  mangaography: Array<
    MalInfo & {
      name: string;
      role: string;
    }
  >;
  voice_actors: Array<
    MalInfo & {
      name: string;
      language: string;
    }
  >;
}
