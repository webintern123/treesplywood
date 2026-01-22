const express = require("express");
const router = express.Router();
const SampleRequest = require("../models/SampleRequest");
const adminAuth = require("../middleware/adminAuth");
const { sendSampleMail } = require("../services/mail");

/* ===============================
   CREATE SAMPLE REQUEST (PUBLIC)
================================ */
router.post("/", async (req, res) => {
  try {
    console.log("📦 SAMPLE REQUEST:", req.body);

    // ✅ SAVE EXACT SAME DATA AS FRONTEND
    const request = new SampleRequest({
      fullName: req.body.fullName,
      email: req.body.email,
      phone: req.body.phone,
      company: req.body.company,
      profession: req.body.profession,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      pincode: req.body.pincode,
      purpose: req.body.purpose,
      projectDetails: req.body.projectDetails,
      selectedSamples: req.body.selectedSamples, 
    });

    await request.save();

    // ✅ SEND CLEAN DATA TO MAIL
    await sendSampleMail(request.toObject());

    res.json({ success: true });
  } catch (err) {
    console.error("❌ SAMPLE REQUEST ERROR:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

/* ===============================
   GET SAMPLE REQUESTS (ADMIN)
================================ */
router.get("/", async (req, res) => {
  const data = await SampleRequest.find().sort({ createdAt: -1 });
  res.json(data);
});

/* ===============================
   DELETE SAMPLE REQUEST (ADMIN)
================================ */
router.delete("/:id", adminAuth, async (req, res) => {
  await SampleRequest.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
