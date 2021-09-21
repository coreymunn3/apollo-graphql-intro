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

  type Hero {
    text: String!
    image: String!
  }

  type Query {
    products: [Product!]!
    product(slug: String!): Product
    categories: [Category!]!
    category(slug: String!): Category
    hero: Hero
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

    deleteProduct(id: ID!): Boolean

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

    deleteCategory(id: ID!): Boolean

    createHero(text: String!, image: String!): Hero!
    updateHero(id: ID!, text: String, image: String): Hero!
  }
`;

module.exports = typeDefs;
