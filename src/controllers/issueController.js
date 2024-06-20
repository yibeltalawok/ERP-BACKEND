const Issue = require('../models/issueModel');
const Item =require("../models/itemModel");
exports.getAllIssue = async (req, res, next) => {
  try {
    const allIssues = await Issue.find().populate('issuedBy');
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

// exports.getItemListDeatiled = async (req, res, next) => {
//   const issueId=req.params.issueId;
//   try {
//     let issueData = await Issue.findById(issueId)
//     const itemList=[]
//     const issueList=[]
//     issueList.push(issueData)
//     if(issueList.length>0){
//       for(let i=0;i<issueList.length;i++){
//         let item = await Item.findById(issueList[i].items)
//         let itemData=[]
//         itemData.push(item)
//        if(itemData.length){
//         itemData[0].available = issueList[i].issueSize
//           itemList.push(itemData[0])
//        }
//        }
//        res.json(itemList);
//       }
//   } catch (error) {
//     console.error('Error getting Issues:', error.message);
//     next(error);
//   }
// };

exports.getIssueDeatil = async (req, res, next) => {
  const issueId=req.params.issueId;
  try {
     let issueData = await Issue.findById(issueId).populate('issuedBy')
     const itemList=[]
     const issueList=[]
     let issueDataValue=[]
     issueList.push(issueData)
       if(issueList[0].items.length > 0) {
          let itemData = []
          for (let i = 0; i < issueList[0].items.length; i++) {
          const dataList=await Item.findById(issueList[0].items[i])
          const result=[]
          result.push(dataList)
            if(result)
              {
              itemData.push({
                // inventoryName: result[0].inventory.inventoryName,
                itemNumber: result[0].itemNumber,
                binCardNumber: result[0].binCardNumber,
                itemName: result[0].itemName,
                unitPrice: result[0].unitPrice,
                totalQuantity: issueList[0].items[i].issueSize,
                id: result[0].id,
                  })
              if (i == issueList[0].items.length - 1) {
                issueDataValue.push({
                  issuedBy: issueList[0].issuedBy,
                  email: issueList[0].issuedBy?.email,
                  issueType: issueList[0].type,
                  issueCode: issueList[0].issueCode,
                  issueReason: issueList[0].reason,
                  issueDate: issueList[0].issueDate,
                  inventoryName: issueList[0].inventory.inventoryName,
                  issueSignature: issueList[0].issueSignature,
                  storeManager: issueList[0].storeManagerSignature,
                  finance: issueList[0].financeSignature,
                  generalManager: issueList[0].generalManagerSignature,
                  store: issueList[0].storeSignature,
                  items: itemData,
                })
                res.json(issueDataValue);
              }
            }
            else {
              issueDataValue.push({
                issuedBy: issueList[0].issuedBy.fullName,
                email: issueList[0].issuedBy.email,
                issueType: issueList[0].type,
                issueCode: issueList[0].issueCode,
                issueReason: issueList[0].reason,
                inventoryName: issueList[0].inventory.inventoryName,
                issueSignature: issueList[0].issueSignature,
                items: [],
              })
              res.json(issueDataValue);
              }}}
  } catch (error) {
    console.error('Error getting Issues:', error.message);
    next(error);
  }
};
