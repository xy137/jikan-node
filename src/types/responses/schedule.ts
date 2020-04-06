import { AnimeShowDetails, ShowDetails, Response } from "../shared";

export type Days =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type ScheduleDayResponse<T extends Days> = Response &
  {
    [key in T]: AnimeShowDetails[];
  };

type ScheduleResponse = Response &
  {
    [key in Days]: AnimeShowDetails[];
  };

export default ScheduleResponse;
