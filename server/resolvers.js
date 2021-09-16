const { Product, Category } = require('./models');

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
    category: async (_, { slug }) => {
      const category = await Category.findOne({ slug });
      return category;
    },
  },
  Category: {
    products: async (parent, args, ctx) => {
      // console.log(parent);
      const products = await Product.find({ category: parent._id });
      return products;
    },
  },
  Product: {
    category: async (parent, args, ctx) => {
      // console.log(parent.category);
      const foundCategory = await Category.findById(parent.category);
      return foundCategory;
    },
  },
  Mutation: {
    createProduct: async (_, args) => {
      const product = new Product(args);
      await product.save();
      return product;
    },
    createCategory: async (_, args) => {
      const category = new Category(args);
      await category.save();
      return category;
    },
  },
};

module.exports = resolvers;
