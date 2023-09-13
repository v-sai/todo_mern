const express = require("express");
const router = express.Router();

const {
  register,
  login,
  verifyEmail,
  forgotPassword,
  logout,
  resetPassword,
} = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.delete("/logout", logout);
router.post("/verifyEmail", verifyEmail);
router.post("/resetPassword", resetPassword);
router.post("/forgotPassword", forgotPassword);

module.exports = router;
