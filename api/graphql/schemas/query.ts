import { gql } from 'apollo-server-micro';

export const queryTypeDefs = gql`
  type Query {
    hello: String
    currentTime: String
  }
`;
