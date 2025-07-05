"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_micro_1 = require("apollo-server-micro");
const schema_1 = require("./schemas/schema");
const resolvers_1 = require("./resolvers/resolvers");
const apolloServer = new apollo_server_micro_1.ApolloServer({
    typeDefs: schema_1.typeDefs,
    resolvers: resolvers_1.resolvers,
    introspection: true, // Enable introspection
});
const startServer = apolloServer.start();
async function handler(req, res) {
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
exports.default = handler;
