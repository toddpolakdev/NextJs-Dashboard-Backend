import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from './schemas';
import { resolvers } from './resolvers';
import { VercelRequest, VercelResponse } from '@vercel/node';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers: Object.assign({}, ...resolvers), // Combine resolver objects
});

const startServer = apolloServer.start();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  await startServer;
  apolloServer.createHandler({ 
    path: "/api/graphql",
  })(req, res);
}
