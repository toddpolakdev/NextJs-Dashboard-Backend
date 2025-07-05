"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
// import 'dotenv/config';
const mongodb_1 = require("mongodb");
let cachedDb;
async function connectToDatabase() {
    if (cachedDb) {
        return cachedDb;
    }
    console.log('Connecting to database', process.env.MONGODB_URI);
    console.log('dbName', process.env.DB_NAME);
    const client = await mongodb_1.MongoClient.connect(process.env.MONGODB_URI || '');
    console.log('client', client);
    const dbName = process.env.DB_NAME;
    cachedDb = client.db(dbName);
    console.log('cachedDb', cachedDb);
    return cachedDb;
}
exports.connectToDatabase = connectToDatabase;
