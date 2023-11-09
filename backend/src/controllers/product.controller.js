const ProductModel = require("../models/product.model");
const UserModel = require("../models/user.model");

// Create a product
const addProduct = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  const product = await ProductModel.create(info);
  res.status(200).json({ product });
};

// Get all products
const getAllProducts = async (req, res) => {
  const products = await ProductModel.findAll({});
  const productsAttr = await ProductModel.findAll({
    attributes: ["title", "price"],
  });
  res.status(200).json({ products, productsAttr });
};

// Get single product
const getOneProduct = async (req, res) => {
  const { id } = req.params;
  const product = await ProductModel.findOne({
    where: { id: id },
  });
  const productAttr = await ProductModel.findOne({
    where: { id: id },
    attributes: ["title"],
  });
  res.status(200).json({ productAttr, product });
};

// Update a product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { title, description, price, published } = req.body;
  const newProduct = { title, description, price, published };
  const updatedProduct = await ProductModel.update(newProduct, {
    where: { id },
  });
  res.status(200).json({ updatedProduct });
};

// Delete a product
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await ProductModel.destroy({
    where: { id },
  });
  res.status(200).json({ deletedProduct });
};

// Get published products
const getPublishedProducts = async (req, res) => {
  const publishedProducts = await ProductModel.findAll({
    where: { published: true },
  });
  res.status(200).json({ publishedProducts });
};

// get users about a product
const getProductUsers = async (req, res) => {
  const { id } = req.params;
  const productUsers = await ProductModel.findAll({
    include: [
      {
        model: UserModel
      },
    ],
    where: { id },
  });
  res.status(200).json({
    productUsers
  })
};

module.exports = {
  addProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
  getPublishedProducts,
  getProductUsers,
};
