const express = require("express");
const router = express.Router();
const Lead = require("../models/Lead");
const { sendLeadMail } = require("../services/mail");

/* ================= CREATE LEAD ================= */
router.post("/", async (req, res) => {
  try {
    console.log("📥 LEAD RECEIVED:", req.body);

    const lead = await Lead.create(req.body);

    try {
      await sendLeadMail(lead);
    } catch (mailErr) {
      console.error("📧 Lead mail failed:", mailErr.message);
    }

    res.json({ success: true });
  } catch (err) {
    console.error("❌ LEAD ERROR:", err);
    res.status(500).json({
      success: false,
      message: "Failed to save lead",
    });
  }
});

/* ================= GET LEADS (ADMIN) ================= */
router.get("/", async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch leads" });
  }
});

/* ================= DELETE LEAD ================= */
router.delete("/:id", async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});

module.exports = router;
