const dateScalar = require('./dateScalar');

const resolvers = {
  Date: dateScalar,
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
    hero: async (_, __, { Hero }) => {
      const hero = await Hero.find();
      return hero[0];
    },
    mainCards: async (_, __, { MainCard }) => {
      const maincards = await MainCard.find();
      return maincards;
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
    updateProduct: async (_, { id, ...args }, { Product }) => {
      const newProduct = await Product.findByIdAndUpdate(id, args, {
        new: true,
      });
      return newProduct;
    },
    deleteProduct: async (_, { id }, { Product }) => {
      await Product.findByIdAndDelete(id);
      return true;
    },
    createCategory: async (_, args, { Category }) => {
      const category = new Category(args);
      await category.save();
      return category;
    },
    updateCategory: async (_, { id, ...args }, { Category }) => {
      const newCategory = await Category.findByIdAndUpdate(id, args, {
        new: true,
      });
      return newCategory;
    },
    deleteCategory: async (_, { id }, { Product, Category }) => {
      // delete all products in category first
      const productsInCategory = await Product.find({ category: id });
      productsInCategory.forEach(async (product) => {
        await Product.findByIdAndDelete(product._id);
        return;
      });
      // then delete category
      await Category.findByIdAndDelete(id);
      return true;
    },
    createHero: async (_, args, { Hero }) => {
      const hero = new Hero(args);
      await hero.save();
      return hero;
    },
    updateHero: async (_, { id, ...args }, { Hero }) => {
      const updatedHero = await Hero.findByIdAndUpdate(id, args, {
        new: true,
      });
      return updatedHero;
    },
    createMainCard: async (_, args, { MainCard }) => {
      const mainCard = new MainCard(args);
      await mainCard.save();
      return mainCard;
    },
    updateMainCard: async (_, { id, ...args }, { MainCard }) => {
      const updatedCard = MainCard.findByIdAndUpdate(id, args, {
        new: true,
      });
      return updatedCard;
    },
    deleteMainCard: async (_, { id }, { MainCard }) => {
      await MainCard.findByIdAndDelete(id);
      return true;
    },
  },
};

module.exports = resolvers;
