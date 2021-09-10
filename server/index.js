const { ApolloServer, gql } = require('apollo-server');
const { mainCards } = require('./db');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type MainCard {
    title: String
    image: String
  }

  type Query {
    mainCards: [MainCard]
  }
`;

const resolvers = {
  Query: {
    mainCards: () => mainCards,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
