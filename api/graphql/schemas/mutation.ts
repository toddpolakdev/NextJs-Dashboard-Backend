import { gql } from 'apollo-server-micro';

export const mutationTypeDefs = gql`
  type Mutation {
    addMessage(message: String!): String
  }
`;
