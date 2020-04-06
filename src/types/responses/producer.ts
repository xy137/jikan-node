import { Response, Relation, AnimeShowDetails } from "../shared";

interface ProducerResponse extends Response {
  meta: Relation;
  anime: AnimeShowDetails[];
}

export default ProducerResponse;
