import { gql } from "apollo-boost";

export const CHECK_RANK = gql`
  mutation checkRank($username: String!) {
    checkRank(username: $username)
  }
`;

export const TOP_RANKER = gql`
  mutation topRanker {
    topRanker {
      username
      stage
    }
  }
`;
