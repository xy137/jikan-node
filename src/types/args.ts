export type RequestType =
  | "anime"
  | "manga"
  | "person"
  | "character"
  | "season"
  | "schedule"
  | "producer"
  | "user"
  | "club"
  | "magazine";

export type LookupType = "search" | "top" | "genre";

export type UserRequestType = "profile" | "history" | "friends" | "animelist" | "mangalist";

export type AnimelistType = "all" | "watching" | "completed" | "onhold" | "dropped" | "ptw";

export type MangalistType = "all" | "reading" | "completed" | "onhold" | "dropped" | "ptr";

export interface UserDataOptions {
  history: "anime" | "manga";
  friends: number;
  animelist: AnimelistType;
  mangalist: MangalistType;
}

// Get rid of "username" in all of them

export interface UserDataOptions {
  history: "anime" | "manga";
  friends: number;
  animelist: AnimelistType;
  mangalist: MangalistType;
  profile: undefined;
}
