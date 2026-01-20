const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  console.log("ADMIN LOGIN TRY:", username, password);
  console.log("ENV USER:", process.env.ADMIN_USER);
  console.log("ENV PASS:", process.env.ADMIN_PASS);

  if (
    username === process.env.ADMIN_USER &&
    password === process.env.ADMIN_PASS
  ) {
    const token = jwt.sign(
      { role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    return res.json({
      success: true,
      token,
    });
  }

  res.status(401).json({
    success: false,
    message: "Invalid credentials",
  });
});

module.exports = router;
