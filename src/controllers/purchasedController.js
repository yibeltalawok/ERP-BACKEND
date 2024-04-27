const Purchased = require('../models/purchasedModel');

exports.getAllPurchased = async (req, res, next) => {
  try {
    const allPurchaseds = await Purchased.find();
    res.json(allPurchaseds);
  } catch (error) {
    console.error('Error getting Purchaseds:', error.message);
    next(error);
  }
};

exports.getPurchasedById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getPurchased = await Purchased.findById(id);
    if (!getPurchased) {
      res.status(404).json({ error: 'Purchased not found.' });
    } else {
      res.json(getPurchased);
    }
  } catch (error) {
    console.error('Error getting Purchased by ID:', error.message);
    next(error);
  }
};
exports.createPurchased = async (req, res, next) => {
  try {
    console.log(req.body)
    // Hash the password before storing it in the database
    const newPurchased = new Purchased({ ...req.body});
    const savedPurchased = await newPurchased.save();
    res.status(201).json(savedPurchased);
  } catch (error) {
    console.error('Error creating Purchased:', error.message);
    next(error);
  }};


exports.updatePurchased = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedPurchased = await Purchased.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedPurchased) {
      res.status(404).json({ error: 'Purchased is not found.' });
    } else {
      res.json(updatedPurchased);
    }
  } catch (error) {
    console.error('Error updating Purchased:', error.message);
    next(error);
  }
};

// Delete User by ID
exports.deletePurchased = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedPurchased = await Purchased.findByIdAndDelete(id);
    if (!deletedPurchased) {
      res.status(404).json({ error: 'Purchased not found.' });
    } else {
      res.json({ message: 'Purchased deleted successfully.' });
    }
  } catch (error) {
    console.error('Error deleting Purchased:', error.message);
    next(error);
  }
};