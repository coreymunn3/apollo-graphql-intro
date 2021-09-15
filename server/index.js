const { ApolloServer, gql } = require('apollo-server');
const { mainCards, products } = require('./db');
const mongoose = require('mongoose');
const Product = require('./models/Product');

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    slug: String
    image: String
    rating: Float
    price: Float
    description: [String]
    stock: Int
    onSale: Boolean
  }

  type Query {
    products: [Product]
    product(slug: String!): Product
  }

  type Mutation {
    createProduct(
      name: String!
      slug: String
      image: String
      rating: Float
      price: Float
      description: [String]
      stock: Int
      onSale: Boolean
    ): Product!
  }
`;

const resolvers = {
  Query: {
    products: () => products,
    product: (parent, args, context) => {
      return products.find((p) => p.slug === args.slug);
    },
  },
  Mutation: {
    createProduct: async (
      _,
      { name, slug, image, rating, price, description, stock, onSale }
    ) => {
      const product = new Product({
        name,
        slug,
        image,
        rating,
        price,
        description,
        stock,
        onSale,
      });
      console.log(product);
      await product.save();
      return product;
    },
  },
};

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
