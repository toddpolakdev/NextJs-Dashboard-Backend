import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Query {
    restaurants: [Restaurant!]!
  }

  type Query {
    hello: String
  }

  type Restaurant {
    name: String!
  }
`;