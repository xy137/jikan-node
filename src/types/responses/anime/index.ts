import * as Responses from "./responses";

type AnimeResponse = {
  characters_staff: Responses.CharactersStaff;
  episodes: Responses.Episodes;
  forum: Responses.Forum;
  moreinfo: Responses.MoreInfo;
  news: Responses.News;
  pictures: Responses.Pictures;
  recommendations: Responses.Recommendations;
  reviews: Responses.Reviews;
  stats: Responses.Stats;
  userupdates: Responses.UserUpdates;
  videos: Responses.Videos;
  default: Responses.Anime;
};

export default AnimeResponse;
