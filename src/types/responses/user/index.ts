import * as Responses from "./responses";

type UserResponse = {
  animelist: Responses.Animelist;
  mangalist: Responses.Mangalist;
  profile: Responses.Profile;
  history: Responses.History;
  friends: Responses.Friends;
};

export default UserResponse;
