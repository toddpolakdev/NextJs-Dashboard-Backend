"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const pg_1 = require("pg");
// Initialize PostgreSQL connection pool
const pool = new pg_1.Pool({
    connectionString: "postgres://default:NsFQ6fUmDay7@ep-winter-cherry-97050086.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"
});
// Define your GraphQL schema
const typeDefs = (0, apollo_server_1.gql) `
  type Query {
    hello: String
  }
`;
// Define resolvers for your schema fields
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
};
// Create the Apollo Server instance
const server = new apollo_server_1.ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({
        db: pool
    })
});
// Start the server
server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
