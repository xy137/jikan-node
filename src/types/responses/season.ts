import { Response, AnimeShowDetails } from "../shared";

interface SeasonResponse extends Response {
  season_name: string;
  season_year: number;
  anime: AnimeShowDetails[];
}

export default SeasonResponse;
