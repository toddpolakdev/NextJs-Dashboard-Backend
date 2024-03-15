export const queryResolvers = {
    Query: {
      hello: () => 'Hello world!',
      currentTime: () => new Date().toISOString(),
    },
  };
  