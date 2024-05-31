const Employee = require('./models/employeeModel');
const Attendance = require('./models/attendanceModel');
const Category = require('./models/categoryModel');
const Purchased = require('./models/purchasedModel');
const Customer = require('./models/customerModel');
const Sam = require('./models/samModel');
const Inventory = require('./models/inventoryModel');
const Item = require('./models/itemModel');
const User = require('./models/usersModel');
const PayrolMaster = require('./models/PayrolMasterModel');
const OverTime = require('./models/overTimeModel');
const Inventory = require('./models/inventoryModel');

// Define associations
Attendance.belongsTo(Employee, { foreignKey: 'employee', as: 'employee' });
Category.belongsTo(Purchased, { foreignKey: 'purchased', as: 'purchased' });
Customer.belongsTo(Purchased, { foreignKey: 'purchased', as: 'purchased' });
Incentive.belongsTo(Employee, { foreignKey: 'employee', as: 'employee' });
Incentive.belongsTo(Sam, { foreignKey: 'sam', as: 'sam' });
Inventory.belongsTo(Item, { foreignKey: 'item', as: 'item' });
Inventory.belongsTo(User, { foreignKey: 'user', as: 'user' });
Inventory.belongsTo(Purchased, { foreignKey: 'purchased', as: 'purchased' });
Inventory.belongsTo(Category, { foreignKey: 'category', as: 'category' });
OverTime.belongsTo(PayrolMaster, { foreignKey: 'payrol', as: 'payrol' });
PayrolMaster.belongsTo(Employee, { foreignKey: 'employee', as: 'employee' });
PayrolMaster.belongsTo(OverTime, { foreignKey: 'overTime', as: 'overTime' });