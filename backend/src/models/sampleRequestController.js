const SampleRequest = require("../models/SampleRequest");

/* CREATE SAMPLE REQUEST */
exports.createSampleRequest = async (req, res) => {
  try {
    const request = await SampleRequest.create(req.body);
    res.status(201).json({ success: true, request });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

/* GET ALL SAMPLE REQUESTS (ADMIN) */
exports.getSampleRequests = async (req, res) => {
  try {
    const data = await SampleRequest.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch" });
  }
};

/* DELETE SAMPLE REQUEST */
exports.deleteSampleRequest = async (req, res) => {
  try {
    await SampleRequest.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false });
  }
};