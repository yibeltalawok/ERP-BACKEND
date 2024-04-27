const express = require('express');
const router = express.Router();
const IssueController = require('../controllers/issueController');

router.post('/issues', IssueController.createIssue);
router.get('/issues', IssueController.getAllIssue);
router.get('/issues/:id', IssueController.getIssueById);
router.put('/issues/:id', IssueController.updateIssue);
router.delete('/issues/:id', IssueController.deleteIssue);

module.exports = router;
