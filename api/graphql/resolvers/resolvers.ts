import { connectToDatabase } from '../../../mongo';

export const resolvers = {
  Query: {
    hello: () => 'NextJs Dashboard Backend Test!',
    restaurants: async () => {
      const db = await connectToDatabase();
      console.log('db', db )
      const collection = db.collection('restaurants');
      const restaurants = await collection.find({}).toArray();
      console.log('restaurants', restaurants)
      return restaurants.map((restaurant) => ({
        id: restaurant._id.toString(), // Convert ObjectId to string
        name: restaurant.name,
      }));
    },
  },
};
