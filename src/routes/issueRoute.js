const express = require('express');
const router = express.Router();
const IssueController = require('../controllers/issueController');

router.post('/issues', IssueController.createIssue);
router.get('/issues', IssueController.getAllIssue);
router.get('/issues/:id', IssueController.getIssueById);
router.put('/issues/:id', IssueController.updateIssue);
router.delete('/issues/:id', IssueController.deleteIssue);
router.get('/itemList/:issueId',IssueController.getItemListDeatiled)
router.get('/issueDetails/:issueId',IssueController.getIssueDeatil)
module.exports = router;
