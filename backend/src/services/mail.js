const nodemailer = require("nodemailer");

console.log("MAIL USER:", process.env.MAIL_USER);
console.log("MAIL PASS EXISTS:", !!process.env.MAIL_PASS);

/* SAMPLE ID → NAME MAP */
const sampleProducts = {
  "1": "Ananta 12mm Structural BWP",
  "2": "Ananta 19mm Structural BWP",
  "3": "Agni 12mm Fire-Resistant",
  "4": "Bhima 12mm Marine Grade",
  "5": "Samrat 12mm Premium BWP",
  "6": "Samrat 19mm Premium BWP",
  "7": "Vajra 12mm Resilient BWP",
  "8": "Ujval 9mm Interior",
  "9": "Block Board 19mm",
  "10": "Flush Door Sample Panel",
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// 🔍 Verify transporter
transporter.verify((error) => {
  if (error) {
    console.error("❌ Mail error:", error);
  } else {
    console.log("✅ Mail server ready");
  }
});

/* ================= SAMPLE MAIL ================= */
async function sendSampleMail(sample) {
  const sampleNames = sample.selectedSamples
    ? sample.selectedSamples.map(id => sampleProducts[id] || id)
    : [];

  const message = `
📦 NEW SAMPLE REQUEST

Name: ${sample.fullName}
Email: ${sample.email}
Phone: ${sample.phone}

Samples:
${sampleNames.join("\n") || "N/A"}
`;

  await transporter.sendMail({
    from: `"Trees Plywood" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_USER,
    subject: "📦 New Sample Request",
    text: message,
  });
}

/* ================= LEAD MAIL ================= */
async function sendLeadMail(lead) {
  const message = `
📥 NEW WEBSITE LEAD

Name: ${lead.name}
Email: ${lead.email}
Phone: ${lead.phone}
City: ${lead.city}
Company: ${lead.company || "N/A"}

Message:
${lead.message || "N/A"}
`;

  await transporter.sendMail({
    from: `"Trees Plywood" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_USER,
    subject: "📥 New Website Lead",
    text: message,
  });
}

module.exports = {
  sendSampleMail,
  sendLeadMail,
};
