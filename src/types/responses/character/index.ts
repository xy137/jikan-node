import { Character } from "./responses";
import * as AnimeResponses from "../anime/responses";

type CharacterResponse = {
  default: Character;
  // Shared response
  pictures: AnimeResponses.Pictures;
};

export default CharacterResponse;
