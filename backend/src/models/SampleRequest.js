const mongoose = require("mongoose");

const SampleRequestSchema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    phone: String,
    company: String,
    profession: String,

    address: String,
    city: String,
    state: String,
    pincode: String,

    projectDetails: String,
    purpose: String,

    selectedSamples: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("SampleRequest", SampleRequestSchema);
