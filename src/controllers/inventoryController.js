const Inventory = require('../models/inventoryModel');

exports.getAllInventory = async (req, res, next) => {
  try {
    const allInventorys = await Inventory.find();
    res.json(allInventorys);
  } catch (error) {
    console.error('Error getting Inventorys:', error.message);
    next(error);
  }
};

exports.getInventoryById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getInventory = await Inventory.findById(id);
    if (!getInventory) {
      res.status(404).json({ error: 'Inventory not found.' });
    } else {
      res.json(getInventory);
    }
  } catch (error) {
    console.error('Error getting Inventory by ID:', error.message);
    next(error);
  }
};
exports.createInventory = async (req, res, next) => {
  try {
    console.log(req.body)
    // Hash the password before storing it in the database
    const newInventory = new Inventory({ ...req.body});
    const savedInventory = await newInventory.save();
    res.status(201).json(savedInventory);
  } catch (error) {
    console.error('Error creating Inventory:', error.message);
    next(error);
  }};


exports.updateInventory = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedInventory = await Inventory.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedInventory) {
      res.status(404).json({ error: 'Inventory is not found.' });
    } else {
      res.json(updatedInventory);
    }
  } catch (error) {
    console.error('Error updating Inventory:', error.message);
    next(error);
  }
};

// Delete User by ID
exports.deleteInventory = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedInventory = await Inventory.findByIdAndDelete(id);
    if (!deletedInventory) {
      res.status(404).json({ error: 'Inventory not found.' });
    } else {
      res.json({ message: 'Inventory deleted successfully.' });
    }
  } catch (error) {
    console.error('Error deleting Inventory:', error.message);
    next(error);
  }
};