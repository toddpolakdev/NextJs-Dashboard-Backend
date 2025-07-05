import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Query {
    restaurants: [Restaurant!]!
    technologies(category: String): [Technology!]!
    hello: String
    deploymentTest: DeploymentInfo
  }

  type DeploymentInfo {
    message: String!
    timestamp: String!
    version: String!
  }

  type Restaurant {
    name: String!
  }

  type TechnologyItem {
    name: String!
    description: String!
    url: String!
  }

  type Technology {
    id: String!
    category: String!
    technology: [TechnologyItem!]!
  }
`;