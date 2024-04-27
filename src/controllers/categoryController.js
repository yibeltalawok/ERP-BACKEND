const Category = require('../models/categoryModel');

exports.getAllCategory = async (req, res, next) => {
  try {
    const allCategorys = await Category.find();
    res.json(allCategorys);
  } catch (error) {
    console.error('Error getting Categorys:', error.message);
    next(error);
  }
};

exports.getCategoryById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getCategory = await Category.findById(id);
    if (!getCategory) {
      res.status(404).json({ error: 'Category not found.' });
    } else {
      res.json(getCategory);
    }
  } catch (error) {
    console.error('Error getting category by ID:', error.message);
    next(error);
  }
};
exports.createCategory = async (req, res, next) => {
  try {
    console.log(req.body)
    // Hash the password before storing it in the database
    const newCategory = new Category({ ...req.body});
    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    console.error('Error creating category:', error.message);
    next(error);
  }};


exports.updateCategory = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedCategory) {
      res.status(404).json({ error: 'Category is not found.' });
    } else {
      res.json(updatedCategory);
    }
  } catch (error) {
    console.error('Error updating category:', error.message);
    next(error);
  }
};

// Delete User by ID
exports.deleteCategory = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedCategory = await Category.findByIdAndDelete(id);
    if (!deletedCategory) {
      res.status(404).json({ error: 'Category not found.' });
    } else {
      res.json({ message: 'Category deleted successfully.' });
    }
  } catch (error) {
    console.error('Error deleting category:', error.message);
    next(error);
  }
};