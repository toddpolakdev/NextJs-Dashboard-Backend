import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from '../src/schema';
import { resolvers } from '../src/resolvers';
// import { ServerRequest, ServerResponse } from 'http';
import { VercelRequest, VercelResponse } from '@vercel/node';

const apolloServer = new ApolloServer({ typeDefs, resolvers });
const startServer = apolloServer.start();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  
  if (req.method === 'OPTIONS') {
    res.end();
    return;
  }

  await startServer;
  await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
}
