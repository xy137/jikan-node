import { Person } from "./responses";
import * as AnimeResponses from "../anime/responses";

type PersonResponse = {
  default: Person;
  // Shared response
  pictures: AnimeResponses.Pictures;
};

export default PersonResponse;
