"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const mongo_1 = require("../../../mongo");
exports.resolvers = {
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
        technologies: async (_, { category }) => {
            const db = await (0, mongo_1.connectToDatabase)();
            console.log('db', db);
            const query = category ? { category } : {}; // Filter by category if it's provided
            const collection = db.collection('technologies');
            const technologies = await collection.find(query).toArray();
            console.log('technologies', technologies);
            return technologies.map((item) => ({
                id: item._id, // Convert ObjectId to string
                category: item.category,
                technology: item.technology.map((technologyItem) => ({
                    name: technologyItem.name,
                    description: technologyItem.description,
                    url: technologyItem.url,
                })),
            }));
        },
    }
};
