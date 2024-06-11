const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const swaggerUi = require("swagger-ui-express");
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
console.log('here...', path.resolve(__dirname, '../.env'), process.env.MONGODB_URL)
const { authenticateToken } = require("./middleware/authMiddleware");
const multer = require("multer");
const helmet = require("helmet");
const cors = require("cors");
const winston = require("winston");
// Access environment variables
// const dbName = process.env.DB_NAME;
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3003;
// Body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "error.log", level: "error" }),
  ],
});

//  security features
// Define routes that don't require authentication
// const publicRoutes = ['/api/login',  '/api-docs'];
// //Middleware to exclude authentication for public routes
// app.use((req, res, next) => {
//   if (publicRoutes.includes(req.path)) {
//     return next(); // Skip authentication for public routes
//   }
//   authenticateToken(req, res, next); // Apply authentication for other routes
// });

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "trusted-scripts.com"],
    },
  })
);
// CORS middleware
app.use(cors());

// Security features middleware
app.use(helmet());

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
// Routes import
// const busRoutes = require("./routes/busRoutes");
const usersRoutes = require("./routes/userRoute");
const categoryRoutes = require("./routes/categoryRoute");
const employeeRoutes = require("./routes/employeeRoutes");
const attendanceRoutes = require("./routes/attendanceRoute");
const IncentiveRoutes = require("./routes/incentiveRoute");
const CustomerRoutes = require("./routes/customerRoute");
const CostSummaryRoutes = require("./routes/costSummaryRoute");
const costPerSamRoutes = require("./routes/costPerSamRoute");
const costPerMinuteRoutes = require("./routes/costPerMinuteRoutes");
 const IncentiveShareRoutes = require("./routes/incentiveShareRoute");
const IncentiveSlabRoutes = require("./routes/incentiveSlabRoute");
const InventoryRoutes = require("./routes/inventoryRoute");
const IssueRoutes = require("./routes/issueRoute");
const ItemRoutes = require("./routes/itemRoute");
const OverTimeRoutes = require("./routes/overTimeRoute");
const PayrolMasterRoutes = require("./routes/payrolMasterRoute");
const ProductRoutes = require("./routes/productRoute");
const PurchasedRoutes = require("./routes/purchasedRoute");
const SamRoutes = require("./routes/samRoute");
const SalaryMasterRoutes = require("./routes/salaryMasterRoute");
const SupplierRoutes = require("./routes/supplierRoute");
const TaxSlabRoutes = require("./routes/taxSlabRoute");
// const location = require("./routes/locationRoute");
const WorkDayRoutes = require("./routes/workDayRoute");
const WorkHourRoutes = require("./routes/workHourRoute");

// Swagger documentation import
// const swaggerDocuments = {
//   "bus-owner": require("./apidocs/busOwnerswagger.json"),
//   assocation: require("./apidocs/assocationSwagger.json"),
//   station: require("./apidocs/station.json"),
//   maintainance: require("./apidocs/maintainance.json"),
//   bus: require("./apidocs/busswagger.json"),
//   users: require("./apidocs/users.json"),
//   messages: require("./apidocs/messages.json"),
//   materials: require("./apidocs/lost.json"),
//   drivers: require("./apidocs/driver.json"),
//   terminals: require("./apidocs/terminal.json"),
//   assignation: require("./apidocs/busAssignation.json"),
//   accidents: require("./apidocs/accident.json"),
//   punshiments: require("./apidocs/punshiment.json"),
//   passengers: require("./apidocs/passanger.json"),
//   tickets: require("./apidocs/tickets.json"),
//   feedbacks: require("./apidocs/feedback.json"),
//   servicePayment: require("./apidocs/servicePayment.json"),
//   attendances: require("./apidocs/attendance.json"),
//   login: require("./apidocs/login.json"),
//   booking: require("./apidocs/booking.json"),
//   penalityCategory: require("./apidocs/penalityCategory.json"),
//   location: require("./apidocs/location.json"),
//   driverBooking: require("./apidocs/driverBooking.json"),
//   driverServicePayments: require("./apidocs/driverServicePaymnet.json"),
//   //
// };

// Route definition
app.use("/api", CostSummaryRoutes);
app.use("/api", costPerSamRoutes);
app.use("/api", costPerMinuteRoutes);
app.use("/api", categoryRoutes);
app.use("/api", employeeRoutes);
app.use("/api", usersRoutes);
app.use("/api", CustomerRoutes);
app.use("/api", IncentiveRoutes);
app.use("/api", IncentiveShareRoutes);
app.use("/api", IncentiveSlabRoutes);
app.use("/api", InventoryRoutes);
app.use("/api", IssueRoutes);
app.use("/api", ItemRoutes);
app.use("/api", OverTimeRoutes);
app.use("/api", PayrolMasterRoutes);
app.use("/api", ProductRoutes);
app.use("/api", PurchasedRoutes);
app.use("/api", attendanceRoutes);
app.use("/api", SalaryMasterRoutes);
app.use("/api", SamRoutes);
app.use("/api", SupplierRoutes);
app.use("/api", TaxSlabRoutes);
// app.use("/api", location);
app.use("/api", WorkDayRoutes);
app.use("/api", WorkHourRoutes);

// Swagger documentation setup
// Object.entries(swaggerDocuments).forEach(([key, value]) => {
//   app.use(
//     `/api-docs/${key}`,
//     (req, res, next) => {
//       req.swaggerDoc = value;
//       next();
//     },
//     swaggerUi.serve,
//     swaggerUi.setup()
//   );
// });

// app.get("/api-docs/:doc", (req, res) => {
//   res.send(req.swaggerDoc);
// });

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err);
  res
    .status(500)
    .json({ error: `Internal Server Error : the Error is -> ${err}` });
});


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    // console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Connected to MongoDB AND Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Handle process termination gracefully
process.on("SIGINT", () => {
  console.log("Closing server...");
  // Handle closing server gracefully here (add proper shutdown logic)
  process.exit(0);
});
