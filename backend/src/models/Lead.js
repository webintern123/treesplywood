const mongoose = require("mongoose");

const router = require("express").Router();
const Lead = require("../models/Lead");
const adminAuth = require("../middleware/adminAuth");

router.get("/", adminAuth, async (req, res) => {
  const leads = await Lead.find().sort({ createdAt: -1 });
  res.json(leads);
});

module.exports = router;


const LeadSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    company: String,
    city: String,
    subject: String,
    message: String,
    products: [String],
    projects: [String],
    sources: [String],
    contactMethod: String,
    quantity: String,
    timeline: String,
    urgency: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lead", LeadSchema);
