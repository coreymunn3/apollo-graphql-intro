const { ApolloServer, gql } = require('apollo-server');
const { mainCards, products } = require('./db');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type MainCard {
    title: String
    image: String
  }

  type Product {
    id: ID!
    slug: String!
    image: String!
    name: String!
    rating: Float
    price: Float
    description: [String!]!
    stock: Int!
    onSale: Boolean
  }

  type Query {
    mainCards: [MainCard]
    products: [Product]
    product(slug: String!): Product
  }
`;

const resolvers = {
  Query: {
    mainCards: () => mainCards,
    products: () => products,
    product: (parent, args, context) => {
      return products.find((p) => p.slug === args.slug);
    },
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
