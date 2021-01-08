import { gql } from "apollo-boost";

export const ME = gql`
  mutation me($username: String!) {
    me(username: $username) {
      stage
      horizontalNum
      heart
      gameEnd
    }
  }
`;

export const UPDATE_GAME_INFO = gql`
  mutation updateGameInfo(
    $username: String!
    $stage: Int
    $horizontalNum: Int
    $heart: Int
    $gameEnd: Boolean
  ) {
    updateGameInfo(
      username: $username
      stage: $stage
      horizontalNum: $horizontalNum
      heart: $heart
      gameEnd: $gameEnd
    )
  }
`;
