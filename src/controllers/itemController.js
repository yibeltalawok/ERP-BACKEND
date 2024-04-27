const Item = require('../models/itemModel');

exports.getAllItem = async (req, res, next) => {
  try {
    const allItems = await Item.find();
    res.json(allItems);
  } catch (error) {
    console.error('Error getting Items:', error.message);
    next(error);
  }
};

exports.getItemById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getItem = await Item.findById(id);
    if (!getItem) {
      res.status(404).json({ error: 'Item not found.' });
    } else {
      res.json(getItem);
    }
  } catch (error) {
    console.error('Error getting Item by ID:', error.message);
    next(error);
  }
};
exports.createItem = async (req, res, next) => {
  try {
    console.log(req.body)
    // Hash the password before storing it in the database
    const newItem = new Item({ ...req.body});
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    console.error('Error creating Item:', error.message);
    next(error);
  }};


exports.updateItem = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedItem = await Item.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedItem) {
      res.status(404).json({ error: 'Item is not found.' });
    } else {
      res.json(updatedItem);
    }
  } catch (error) {
    console.error('Error updating Item:', error.message);
    next(error);
  }
};

// Delete User by ID
exports.deleteItem = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedItem = await Item.findByIdAndDelete(id);
    if (!deletedItem) {
      res.status(404).json({ error: 'Item not found.' });
    } else {
      res.json({ message: 'Item deleted successfully.' });
    }
  } catch (error) {
    console.error('Error deleting Item:', error.message);
    next(error);
  }
};