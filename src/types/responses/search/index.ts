import * as Responses from "./responses";

type SearchResponse = {
  anime: Responses.AnimeSearch;
  manga: Responses.MangaSearch;
  person: Responses.PersonSearch;
  character: Responses.CharacterSearch;
};

export default SearchResponse;
