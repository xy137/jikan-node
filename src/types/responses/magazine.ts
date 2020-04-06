import { Response, Relation, MangaShowDetails } from "../shared";

interface MagazineResponse extends Response {
  meta: Relation;
  manga: MangaShowDetails[];
}

export default MagazineResponse;
