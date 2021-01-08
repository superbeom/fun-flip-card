import { gql } from "apollo-boost";

export const CREATE_ACCOUNT = gql`
  mutation createAccount($username: String!, $secret: String!) {
    createAccount(username: $username, secret: $secret)
  }
`;

export const CONFIRM_SECRET = gql`
  mutation confirmSecret($username: String!, $secret: String!) {
    confirmSecret(username: $username, secret: $secret)
  }
`;
