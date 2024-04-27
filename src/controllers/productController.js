const Product = require('../models/productModel');

exports.getAllProduct = async (req, res, next) => {
  try {
    const allProducts = await Product.find();
    res.json(allProducts);
  } catch (error) {
    console.error('Error getting Products:', error.message);
    next(error);
  }
};

exports.getProductById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getProduct = await Product.findById(id);
    if (!getProduct) {
      res.status(404).json({ error: 'Product not found.' });
    } else {
      res.json(getProduct);
    }
  } catch (error) {
    console.error('Error getting Product by ID:', error.message);
    next(error);
  }
};
exports.createProduct = async (req, res, next) => {
  try {
    console.log(req.body)
    // Hash the password before storing it in the database
    const newProduct = new Product({ ...req.body});
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('Error creating Product:', error.message);
    next(error);
  }};


exports.updateProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedProduct) {
      res.status(404).json({ error: 'Product is not found.' });
    } else {
      res.json(updatedProduct);
    }
  } catch (error) {
    console.error('Error updating Product:', error.message);
    next(error);
  }
};

// Delete User by ID
exports.deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      res.status(404).json({ error: 'Product not found.' });
    } else {
      res.json({ message: 'Product deleted successfully.' });
    }
  } catch (error) {
    console.error('Error deleting Product:', error.message);
    next(error);
  }
};