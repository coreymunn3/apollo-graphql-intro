const resolvers = {
  Query: {
    products: async (_, __, { Product }) => {
      const products = await Product.find();
      return products;
    },
    product: async (parent, { slug }, { Product }) => {
      const product = await Product.findOne({ slug });
      return product;
    },
    categories: async (_, __, { Category }) => {
      const categories = await Category.find();
      return categories;
    },
    category: async (_, { slug }, { Category }) => {
      const category = await Category.findOne({ slug });
      return category;
    },
  },
  Category: {
    products: async (parent, args, { Product }) => {
      // console.log(parent);
      const products = await Product.find({ category: parent._id });
      return products;
    },
  },
  Product: {
    category: async (parent, args, { Category }) => {
      // console.log(parent.category);
      const foundCategory = await Category.findById(parent.category);
      return foundCategory;
    },
  },
  Mutation: {
    createProduct: async (_, args, { Product }) => {
      const product = new Product(args);
      await product.save();
      return product;
    },
    createCategory: async (_, args, { Category }) => {
      const category = new Category(args);
      await category.save();
      return category;
    },
  },
};

module.exports = resolvers;
