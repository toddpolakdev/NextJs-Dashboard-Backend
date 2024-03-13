import { ApolloServer, gql } from 'apollo-server';
import { Pool } from 'pg';

// Initialize PostgreSQL connection pool
const pool = new Pool({
  connectionString: "postgres://default:NsFQ6fUmDay7@ep-winter-cherry-97050086.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"
});

console.log('pool', pool)

// Define your GraphQL schema
const typeDefs = gql`
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
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    db: pool
  })
});

console.log('server', server)

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});