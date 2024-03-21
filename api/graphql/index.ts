import { ApolloServer, gql } from 'apollo-server-micro';
import { typeDefs } from './schemas/schema';
import { resolvers } from './resolvers/resolvers';
import { VercelRequest, VercelResponse } from '@vercel/node';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true, // Enable introspection
});

const startServer = apolloServer.start();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  await startServer;

  // Apply CORS headers universally
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*'); // Or a specific origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

   // Handle OPTIONS method for CORS preflight
   if (req.method === 'OPTIONS') {
    // End OPTIONS request early with a 200 OK response
    res.status(200).end();
    return;
  }

  apolloServer.createHandler({ 
    path: "/api/graphql",
  })(req, res);
}
