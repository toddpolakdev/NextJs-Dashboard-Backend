// require('dotenv').config();
// import { ApolloServer } from 'apollo-server-micro';
// import { typeDefs } from './api/graphql/schemas/schema';
// import { resolvers } from './api/graphql/resolvers/resolvers';
// import { createServer } from 'http';

// const apolloServer = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// async function startServer() {
//   await apolloServer.start();
//   const server = createServer((req, res) => {
//     if (req.url && req.url.startsWith('/api/graphql')) {
//       apolloServer.createHandler({ path: '/api/graphql' })(req, res);
//     } else {
//       res.statusCode = 200;
//       res.end('Server is running');
//     }
//   });

//   console.log('Connecting to database', process.env.MONGODB_URI);

//   const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
//   server.listen(port, () => console.log(`🚀 Server ready at http://localhost:${port}/api/graphql`));
// }

// startServer();
