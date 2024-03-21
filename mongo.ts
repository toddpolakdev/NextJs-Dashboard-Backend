// import 'dotenv/config';
import { MongoClient, Db } from 'mongodb';

let cachedDb: Db;

export async function connectToDatabase(): Promise<Db> {
  if (cachedDb) {
    return cachedDb;
  }

  console.log('Connecting to database', process.env.MONGODB_URI);
  console.log('dbName', process.env.DB_NAME);

  const client = await MongoClient.connect(process.env.MONGODB_URI || '');

  console.log('client', client)

  const dbName = process.env.DB_NAME;
  cachedDb = client.db(dbName);

  console.log('cachedDb', cachedDb)

  return cachedDb;
}
