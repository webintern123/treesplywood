const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

// 🔑 FORCE dotenv path
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const app = express();

/* ================= MIDDLEWARE ================= */
app.use(cors());
app.use(express.json());

/* ================= ROUTES ================= */
const leadRoutes = require("./routes/leads");
const adminRoutes = require("./routes/admin");
const sampleRoutes = require("./routes/sampleRequests");


app.use("/api/leads", leadRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/sample-requests", require("./routes/sampleRequests"));

/* ================= DB ================= */
console.log("MONGO_URI =", process.env.MONGO_URI);
console.log("ADMIN_USER =", process.env.ADMIN_USER);
console.log("ADMIN_PASS =", process.env.ADMIN_PASS);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

/* ================= SERVER ================= */
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
