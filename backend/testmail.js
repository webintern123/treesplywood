require("dotenv").config();
const { sendLeadMail } = require("./src/services/mail");

sendLeadMail({
  name: "Test User",
  email: "test@gmail.com",
  phone: "9999999999",
  city: "Hyderabad",
  products: ["Test Product"]
  project: ["Test Project"],
})
  .then(() => {
    console.log("✅ MAIL OK");
    process.exit();
  })
  .catch(err => {
    console.error("❌ MAIL ERROR:", err);
    process.exit(1);
  });
