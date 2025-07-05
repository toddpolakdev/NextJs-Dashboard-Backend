"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_micro_1 = require("apollo-server-micro");
exports.typeDefs = (0, apollo_server_micro_1.gql) `
  type Query {
    restaurants: [Restaurant!]!
    technologies(category: String): [Technology!]!
    hello: String
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
