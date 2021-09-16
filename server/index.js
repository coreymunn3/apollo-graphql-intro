const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const conn = await mongoose.connect(
    'mongodb+srv://coreymunn:shermansucks@cluster0.hi9yc.mongodb.net/test?retryWrites=true&w=majority'
  );
  console.log(`MongoDb connected at ${conn.connection.host}`);

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

startServer();

// quick start guide mongoose with graphql
// https://www.youtube.com/watch?v=YFkJGEefgU8
