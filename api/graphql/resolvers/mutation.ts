// Assuming "message" should be a string based on your usage
export const mutationResolvers = {
  Mutation: {
    addMessage: (_: any, { message }: { message: string }) => {
      // Logic to add a message
      return `Message added: ${message}`;
    },
  },
};