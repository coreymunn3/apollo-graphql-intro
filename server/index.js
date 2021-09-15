const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');
const { Product, Category } = require('./models');

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    slug: String!
    image: String
    rating: Float
    price: Float
    description: [String]
    stock: Int
    onSale: Boolean
  }

  type Category {
    id: ID!
    image: String!
    categoryName: String!
    slug: String!
  }

  type Query {
    products: [Product!]!
    product(slug: String!): Product
    categories: [Category!]!
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

    createCategory(
      image: String!
      categoryName: String!
      slug: String!
    ): Category!
  }
`;

const resolvers = {
  Query: {
    products: async () => {
      const products = await Product.find();
      return products;
    },
    product: async (parent, { slug }, context) => {
      const product = await Product.findOne({ slug });
      return product;
    },
    categories: async () => {
      const categories = await Category.find();
      return categories;
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
      // console.log(product);
      await product.save();
      return product;
    },
    createCategory: async (_, { image, categoryName, slug }) => {
      const category = new Category({ image, categoryName, slug });
      await category.save();
      return category;
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

// quick start guide mongoose with graphql
// https://www.youtube.com/watch?v=YFkJGEefgU8
