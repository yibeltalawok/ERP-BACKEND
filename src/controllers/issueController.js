const Issue = require('../models/issueModel');

exports.getAllIssue = async (req, res, next) => {
  try {
    const allIssues = await Issue.find();
    res.json(allIssues);
  } catch (error) {
    console.error('Error getting Issues:', error.message);
    next(error);
  }
};

exports.getIssueById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getIssue = await Issue.findById(id);
    if (!getIssue) {
      res.status(404).json({ error: 'Issue not found.' });
    } else {
      res.json(getIssue);
    }
  } catch (error) {
    console.error('Error getting Issue by ID:', error.message);
    next(error);
  }
};
exports.createIssue = async (req, res, next) => {
  try {
    console.log(req.body)
    // Hash the password before storing it in the database
    const newIssue = new Issue({ ...req.body});
    const savedIssue = await newIssue.save();
    res.status(201).json(savedIssue);
  } catch (error) {
    console.error('Error creating Issue:', error.message);
    next(error);
  }};


exports.updateIssue = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedIssue = await Issue.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedIssue) {
      res.status(404).json({ error: 'Issue is not found.' });
    } else {
      res.json(updatedIssue);
    }
  } catch (error) {
    console.error('Error updating Issue:', error.message);
    next(error);
  }
};

// Delete User by ID
exports.deleteIssue = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedIssue = await Issue.findByIdAndDelete(id);
    if (!deletedIssue) {
      res.status(404).json({ error: 'Issue not found.' });
    } else {
      res.json({ message: 'Issue deleted successfully.' });
    }
  } catch (error) {
    console.error('Error deleting Issue:', error.message);
    next(error);
  }
};