const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date

  type Product {
    id: ID!
    name: String!
    slug: String!
    image: String!
    rating: Float
    price: Float
    description: [String]
    stock: Int
    onSale: Boolean
    salePrice: Float
    category: Category!
    createdAt: Date!
    updatedAt: Date!
  }

  type Category {
    id: ID!
    image: String!
    categoryName: String!
    slug: String!
    products: [Product]!
    createdAt: Date!
    updatedAt: Date!
  }

  type Hero {
    id: ID!
    text: String!
    image: String!
    createdAt: Date!
    updatedAt: Date!
  }

  type MainCard {
    id: ID!
    title: String!
    images: [String!]!
    createdAt: Date!
    updatedAt: Date!
  }

  type Query {
    products: [Product!]!
    product(slug: String!): Product
    categories: [Category!]!
    category(slug: String!): Category
    hero: [Hero!]!
    mainCards: [MainCard!]!
    mainCard(id: ID!): MainCard
  }

  type Mutation {
    createProduct(
      name: String!
      slug: String!
      image: String!
      rating: Float
      price: Float
      description: [String]
      stock: Int
      onSale: Boolean
      salePrice: Float
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
      salePrice: Float
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

    createMainCard(title: String!, images: [String!]!): MainCard!
    updateMainCard(id: ID!, title: String, images: [String]): MainCard!
    deleteMainCard(id: ID!): Boolean
  }
`;

module.exports = typeDefs;
