const { gql } = require('apollo-server');

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
    category: Category!
  }

  type Category {
    id: ID!
    image: String!
    categoryName: String!
    slug: String!
    products: [Product]!
  }

  type Query {
    products: [Product!]!
    product(slug: String!): Product
    categories: [Category!]!
    category(slug: String!): Category
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
      category: ID!
    ): Product!

    updateProduct(
      id: ID!
      name: String
      slug: String
      image: String
      rating: Float
      price: Float
      description: [String]
      stock: Int
      onSale: Boolean
      category: ID
    ): Product!

    createCategory(
      image: String!
      categoryName: String!
      slug: String!
    ): Category!

    updateCategory(
      id: ID!
      image: String
      categoryName: String
      slug: String
    ): Category!
  }
`;

module.exports = typeDefs;
