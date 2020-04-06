import * as Responses from "./responses";

type SearchResponse = {
  anime: Responses.AnimeTop;
  manga: Responses.MangaTop;
  people: Responses.PeopleTop;
  characters: Responses.CharacterTop;
};

export default SearchResponse;
