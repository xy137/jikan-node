import { Club, ClubMembers } from "./responses";

type ClubResponse = {
  default: Club;
  members: ClubMembers;
};

export default ClubResponse;
