import { MalInfo, Response } from "../../shared";

export interface Person extends MalInfo, Response {
  website_url: string | null;
  name: string;
  given_name: string;
  family_name: string;
  alternate_names: string[];
  birthday: string;
  member_favorites: number;
  about: string | null;
  voice_acting_roles: Array<{
    role: string;
    anime: MalInfo & { name: string };
    character: MalInfo & { name: string };
  }>;
  anime_staff_positions: Array<{
    position: string;
    anime: MalInfo & { name: string };
  }>;
  published_manga: Array<any>; // TODO find someone with published manga lol
}
