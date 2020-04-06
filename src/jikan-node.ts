import makeRequest from "./request";
import { UserDataOptions } from "./types/args";
import { AnimeSearchParams, MangaSearchParams, AllGenres } from "./types/params/search";
import { UserParams } from "./types/params/user";
import * as Responses from "./types/responses";
import { Days, ScheduleDayResponse } from "./types/responses/schedule";
import { SubTypes } from "./types/responses/top/responses";
import { Genres, ExtraAnimeGenres, ExtraMangaGenres } from "./utils/genres";

/**
 *
 * @param options Id of the anime, with optional additional request and page.
 * @param options.id Id (number) of anime
 * @param options.request (Optional) Request options (https://jikan.docs.apiary.io/#reference/0/anime)
 * @param options.page (Optional) number
 */
export const findAnime = <T extends keyof Responses.Anime = "default">(options: {
  id: number;
  request?: T;
  page?: number;
}): Promise<Responses.Anime[T]> => {
  const { id, request, page } = options;
  return makeRequest("anime", [id, request, page]);
};

/**
 *
 * @param options Id of manga, with optional request and page.
 * @param options.id Id of manga from MAL
 * @param options.request (Optional) Request options on https://jikan.docs.apiary.io/#reference/0/manga
 * @param options.page (Optional) number
 */
export const findManga = async <T extends keyof Responses.Manga = "default">(options: {
  id: number;
  request?: T;
  page?: number;
}): Promise<Responses.Manga[T]> => {
  const { id, request, page } = options;
  return makeRequest("manga", [id, request, page]);
};

/**
 *
 * @param options Id of person with optional request
 * @param options.id Id of person from MAL
 * @param options.request (Optional) "pictures" (https://jikan.docs.apiary.io/#reference/0/person)
 */
export const findPerson = async <T extends keyof Responses.Person = "default">(options: {
  id: number;
  request?: T;
}): Promise<Responses.Person[T]> => {
  return makeRequest("person", [options.id, options.request]);
};

/**
 *
 * @param options Id of character with optional request
 * @param options.id Id of character from MAL
 * @param options.request (Optional) "pictures" (https://jikan.docs.apiary.io/#reference/0/character)
 */
export const findCharacter = async <T extends keyof Responses.Character = "default">(options: {
  id: number;
  request?: T;
}): Promise<Responses.Character[T]> => {
  return makeRequest("character", [options.id, options.request]);
};

/**
 *
 * @param season "summer" | "fall" | "winter" | "spring"
 * @param year Number (e.g 2019)
 */
export const findSeason = (
  season: "summer" | "fall" | "winter" | "spring",
  year: number
): Promise<Responses.Season> => {
  return makeRequest("season", [], { season, year });
};

/**
 * If you don't pass the day parameter, it'll return the schedule for all days of the week (https://jikan.docs.apiary.io/#reference/0/schedule)
 * @param day (Optional) Day of the week as a string (e.g "monday")
 */
export function findSchedule<T extends Days>(day: T): Promise<ScheduleDayResponse<T>>;
export function findSchedule(): Promise<Responses.Schedule>;
export function findSchedule<T extends Days>(
  day?: T
): Promise<ScheduleDayResponse<T> | Responses.Schedule> {
  return makeRequest("schedule", [day]);
}

/**
 *
 * @param id Id of producer
 * @param page (Optional) number
 */
export const findProducer = (id: number, page?: number): Promise<Responses.Producer> => {
  return makeRequest("producer", [id, page]);
};

/**
 *
 * @param id Id of magazine
 * @param page (Optional) number
 */
export const findMagazine = (id: number, page?: number): Promise<Responses.Magazine> => {
  return makeRequest("magazine", [id, page]);
};

/**
 * https://jikan.docs.apiary.io/#reference/0/genre
 * @param options Required genre and type, optional page number.
 * @param options.genre Genre as string or genre id. (e.g. "Shounen" or 27)
 * @param options.type "anime" | "manga"
 * @param options.page (Optional) number
 */
export const findGenre = <T extends keyof Responses.Genre>(options: {
  genre: keyof typeof AllGenres | number;
  type: T;
  page?: number;
}): Promise<Responses.Genre> => {
  const { type, genre, page } = options;
  let id: number;
  if (typeof genre === "number") id = genre;
  else if (type === "anime") id = { ...Genres, ...ExtraAnimeGenres }[genre];
  else id = { ...Genres, ...ExtraMangaGenres }[genre];
  return makeRequest("genre", [type, id, page]);
};

/**
 *
 * @param options Id and optional request
 * @param options.id Id of club
 * @param options.request "members" (https://jikan.docs.apiary.io/#reference/0/club)
 */
export const findClub = <T extends keyof Responses.Club = "default">(options: {
  id: number;
  request?: T;
}): Promise<Responses.Club[T]> => {
  return makeRequest("club", [options.id, options.request]);
};

/**
 *
 * @param options Title and type of search, with optional parameters.
 * @param options.title string to search for
 * @param options.type "anime" | "manga" | "person" | "character"
 * @param options.params (Optional) List of parameters: https://jikan.docs.apiary.io/#reference/0/search
 */
export const search = <T extends keyof Responses.Search>(options: {
  type: T;
  title: string;
  params?: AnimeSearchParams | MangaSearchParams;
}): Promise<Responses.Search[T]> => {
  const params = { q: options.title, ...options.params };
  return makeRequest("search", [options.type], params);
};

/**
 *
 * @param options Required type, optional subtype and page.
 * @param options.type "anime" | "manga" | "people" | "characters"
 * @param options.subtype (Optional) List of subtypes: https://jikan.docs.apiary.io/#reference/0/top
 * @param options.page (Optional) number
 */
export const findTop = <T extends keyof Responses.Top>(options: {
  type: T;
  page?: number;
  subtype?: SubTypes[T];
}): Promise<Responses.Top[T]> => {
  const { type, page, subtype } = options;
  return makeRequest("top", [type, page || 1, subtype]);
};

/**
 *
 * @param options Username and request type, optional data.
 * @param options.username Username as string
 * @param options.request "animelist" | "mangalist" | "profile" | "history" | "friends"
 * @param options.data (Optional) List of data options: https://jikan.docs.apiary.io/#reference/0/user
 */
export const findUser = <T extends keyof Responses.User>(
  options: UserParams & {
    username: string;
    request: T;
    data?: UserDataOptions[T];
  }
): Promise<Responses.User[T]> => {
  const { username, request, data } = options;
  return makeRequest("user", [username, request, data]);
};
