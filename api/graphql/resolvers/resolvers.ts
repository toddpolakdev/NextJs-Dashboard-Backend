import { connectToDatabase } from '../../../mongo';

interface TechnologyItem {
  name: string;
  description: string;
  url: string;
}

interface TechnologyDocument {
  _id: any; // You can use 'any' or a more specific type like 'ObjectId' from MongoDB.
  category: string;
  technology: TechnologyItem[];
}

interface ResolverArgs {
  category?: string;
}

export const resolvers = {
  Query: {
    hello: () => 'NextJs Dashboard Backend Test!',
    // restaurants: async () => {
    //   const db = await connectToDatabase();
    //   console.log('db', db )
    //   const collection = db.collection('restaurants');
    //   const restaurants = await collection.find({}).limit(10).toArray();
    //   console.log('restaurants', restaurants)
    //   return restaurants.map((restaurant) => ({
    //     id: restaurant._id.toString(), // Convert ObjectId to string
    //     name: restaurant.name,
    //   }));
    // },

    // New test resolver with timestamp
    deploymentTest: () => ({
      message: 'Deployment sync test successful!',
      timestamp: new Date().toISOString(),
      version: '1.0.2'
    }),

    technologies: async (_: unknown, { category }: ResolverArgs) => {
      const db = await connectToDatabase();
      console.log('db', db)
      const query = category ? { category } : {}; // Filter by category if it's provided
      const collection = db.collection<TechnologyDocument>('technologies');
      const technologies = await collection.find(query).toArray();
      console.log('technologies', technologies)
      return technologies.map((item) => ({
        id: item._id, // Convert ObjectId to string
        category: item.category,
        technology: item.technology.map((technologyItem: TechnologyItem) => ({
          name: technologyItem.name,
          description: technologyItem.description,
          url: technologyItem.url,
        })),
      }));
    },
  }
};
