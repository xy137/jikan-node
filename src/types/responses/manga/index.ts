import * as Responses from "./responses";
import * as AnimeResponses from "../anime/responses";

type MangaResponse = {
  characters: Responses.Characters;
  reviews: Responses.Reviews;
  userupdates: Responses.UserUpdates;
  default: Responses.Manga;
  // Below are shared response interfaces with Anime lookup
  news: AnimeResponses.News;
  pictures: AnimeResponses.Pictures;
  moreinfo: AnimeResponses.MoreInfo;
  recommendations: AnimeResponses.Recommendations;
  stats: AnimeResponses.Stats;
};

export default MangaResponse;
